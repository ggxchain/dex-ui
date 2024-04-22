import type Pair from "@/pair";
import { PairUtils } from "@/pair";
import type {
	Amount,
	CounterId,
	DetailedOrder,
	OrderType,
	PubKey,
	Token,
	TokenId,
} from "@/types";
import GGXWallet from "./ggx";

import { CONTRACT_MOCKED, TOKENS_LIST_TTL } from "@/consts";
import type Order from "@/order";
import { toast } from "react-toastify";
import GGxNetwork from "./api/ggx";
import ContractMock from "./api/mock";
import { translateErrorMesg } from "./utils";

export type onFinalize = (error: string | undefined) => void;

export interface ApiInterface {
	// On dex interactions
	deposit(
		tokenId: TokenId,
		amount: Amount,
		callback: onFinalize,
	): Promise<void>;
	balanceOf(tokenId: TokenId, address: string): Promise<Amount>;
	withdraw(
		tokenId: TokenId,
		amount: Amount,
		callback: onFinalize,
	): Promise<void>;
	tokens(): Promise<TokenId[]>;
	ownersTokens(address: string): Promise<TokenId[]>;
	pairOrders(pair: Pair): Promise<Order[]>;
	userOrders(user: PubKey): Promise<Order[]>;
	makeOrder(
		pair: Pair,
		orderType: OrderType,
		amountOffered: Amount,
		amoutRequested: Amount,
		expireTimestamp: number,
		callback: onFinalize,
	): Promise<void>;
	cancelOrder(counterId: CounterId, callback: onFinalize): Promise<void>;
	takeOrder(counterId: CounterId, callback: onFinalize): Promise<void>;

	// On chain information
	tokenInfo(tokenId: TokenId): Promise<Token>;
	// Sadly we can't fetch all tokens owned by user, so we have to fetch all tokens and then filter them.
	onChainBalanceOf(tokenId: TokenId, address: string): Promise<Amount>;
}

export enum Errors {
	WalletIsNotConnected = "Wallet is not connected",
	AmountIsLessOrEqualToZero = "Amount is less or equal to zero",
	NotEnoughBalance = "Not enough balance",
	InvalidTokenId = "Invalid token id",
}
export default class Contract {
	api: ApiInterface;
	tokenCache: Map<TokenId, Token> = new Map<TokenId, Token>();
	tokenList: TokenId[] = new Array<TokenId>();
	lastUpdated = 0;

	constructor() {
		let mocked = CONTRACT_MOCKED;
		if (typeof window !== "undefined" && window.localStorage) {
			// Get info from local storage
			const mockedValue = window.localStorage.getItem("mocked");
			if (mockedValue !== null) {
				mocked = mockedValue === "true";
			}
		}

		this.api = mocked ? new ContractMock() : new GGxNetwork();
	}

	changeContract() {
		if (Contract.isMocked()) {
			this.api = new ContractMock();
		} else {
			this.api = new ContractMock();
		}
		this.tokenCache = new Map<TokenId, Token>();
		this.tokenList = new Array<TokenId>();
		this.lastUpdated = 0;
	}

	static isMocked(): boolean {
		if (typeof window !== "undefined" && window.localStorage) {
			const mockedValue = window.localStorage.getItem("mocked");
			return mockedValue === "true";
		}
		return CONTRACT_MOCKED;
	}

	static setMocked(value: boolean) {
		if (typeof window !== "undefined" && window.localStorage) {
			window.localStorage.setItem("mocked", `${value}`);
		}
	}

	async allTokens(): Promise<TokenId[]> {
		const now = new Date().getTime();
		if (now - this.lastUpdated > TOKENS_LIST_TTL) {
			this.tokenList = await this.api.tokens();
			this.lastUpdated = now;
		}
		return await Promise.resolve(this.tokenList);
	}

	async allTokensWithInfo(): Promise<Token[]> {
		const tokens = await this.allTokens();
		return await Promise.all(
			tokens.map(async (value) => {
				return {
					...(await this.mapTokenIdToToken(value)),
					id: value,
				};
			}),
		);
	}

	async allTokensOfOwner(): Promise<TokenId[]> {
		const address = this.walletAddress();
		return await this.api.ownersTokens(address);
	}

	async onChainBalanceOf(tokenId: TokenId): Promise<Amount> {
		const address = this.walletAddress();
		return await this.api.onChainBalanceOf(tokenId, address);
	}

	async allOrders(pair: Pair): Promise<DetailedOrder[]> {
		await this.validateTokenId(pair[0]);
		await this.validateTokenId(pair[1]);


		const orders = await this.api.pairOrders(pair);
		// TODO: We need to double check this logic after contract will be ready.
		// Currently we fetch both side tiker orders and then filter out duplicates.
		// But it's posible that we will need to fetch only one side of ticker orders.
		const reverseOrders = (
			await this.api.pairOrders(PairUtils.reverse(pair))
		).reduce<Order[]>((acc, order) => {
			if (orders.findIndex((value) => value.counter === order.counter) === -1) {
				acc.push({
					...order,
					orderType: order.orderType === "BUY" ? "SELL" : "BUY",
					pair,
				});
			}
			return acc;
		}, []);

		const [token1, token2] = await Promise.all([
			this.mapTokenIdToToken(pair[0]),
			this.mapTokenIdToToken(pair[1]),
		]);

		return [...orders, ...reverseOrders].map((value) => {
			return {
				...value,
				token1,
				token2,
			};
		});
	}

	async allUserOrders(): Promise<DetailedOrder[]> {
		const address = this.walletAddress();
		const orders = await this.api.userOrders(address);
		return await Promise.all(
			orders.map(async (value) => {
				return {
					...value,
					token1: await this.mapTokenIdToToken(value.pair[0]),
					token2: await this.mapTokenIdToToken(value.pair[1]),
				};
			}),
		);
	}

	// Probably, we would need to create a mapping for this on frontend.
	async mapTokenIdToToken(tokenId: TokenId): Promise<Token> {
		let value = this.tokenCache.get(tokenId);
		if (value !== undefined) {
			// Token info shouldn't expire, so we can use cached value.
			return value;
		}

		value = await this.api.tokenInfo(tokenId);
		this.tokenCache.set(tokenId, value);
		return value;
	}

	async balanceOf(tokenId: TokenId): Promise<Amount> {
		const address = this.walletAddress();
		await this.validateTokenId(tokenId);

		return this.api.balanceOf(tokenId, address);
	}

	async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
		const _ = this.walletAddress(); // Check if wallet is initialized
		if (amount.lten(0)) {
			throw new Error(Errors.AmountIsLessOrEqualToZero);
		}
		await this.validateTokenId(tokenId);

		wrapCallWithNotifications(
			curry(this.api.deposit, this.api, tokenId, amount),
			"Deposit",
			callback,
		);
	}

	async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
		const _ = this.walletAddress(); // Check if wallet is initialized
		await this.validateTokenId(tokenId);

		if (amount.lten(0)) {
			throw new Error(Errors.AmountIsLessOrEqualToZero);
		}
		const balance = await this.balanceOf(tokenId);
		if (balance.lt(amount)) {
			throw new Error(Errors.NotEnoughBalance);
		}

		wrapCallWithNotifications(
			curry(this.api.withdraw, this.api, tokenId, amount),
			"Withdraw",
			callback,
		);
	}

	async cancelOrder(counterId: CounterId, callback: onFinalize) {
		const _ = this.walletAddress(); // Check if wallet is initialized
		wrapCallWithNotifications(
			curry(this.api.cancelOrder, this.api, counterId),
			"Cancel order",
			callback,
		);
	}

	async makeOrder(
		pair: Pair,
		amountOffered: Amount,
		amoutRequested: Amount,
		orderType: OrderType,
		endTime: Amount,
		callback: onFinalize,
	) {
		const _ = this.walletAddress(); // Check if wallet is initialized
		await this.validateTokenId(pair[0]);
		await this.validateTokenId(pair[1]);

		if (amountOffered.lten(0) || amoutRequested.lten(0)) {
			throw new Error(Errors.AmountIsLessOrEqualToZero);
		}

		const balance = await this.balanceOf(
			orderType === "SELL" ? pair[0] : pair[1],
		);
		if (balance.lt(amountOffered)) {
			throw new Error(Errors.NotEnoughBalance);
		}

		wrapCallWithNotifications(
			curry(
				this.api.makeOrder,
				this.api,
				pair,
				orderType,
				amountOffered,
				amoutRequested,
				endTime.toNumber(),
			),
			"Order",
			callback,
		);
	}

	async takeOrder(counterId: CounterId, callback: onFinalize) {
		const _ = this.walletAddress(); // Check if wallet is initialized
		wrapCallWithNotifications(
			curry(this.api.takeOrder, this.api, counterId),
			"Order",
			callback,
		);
	}

	walletAddress(): string {
		const wallet = new GGXWallet().pubkey()?.address;
		if (wallet === undefined) {
			throw new Error(Errors.WalletIsNotConnected);
		}
		return wallet;
	}

	async validateTokenId(tokenId: TokenId) {
		// Should be safe to do as it cached
		const tokens = await this.allTokens();
		if (tokens.findIndex((value) => value === tokenId) === -1) {
			throw new Error(Errors.InvalidTokenId);
		}
	}
}

export function warnHandler(error: Errors): undefined {
	toast.warn(`${error}`);
	console.warn(error);
	return undefined;
}
export function errorHandler(error: Errors): undefined {
	toast.error(`${error}`);
	console.error(error);
	return undefined;
}

type WrapCall<T> = (_: onFinalize) => Promise<T>;

function curry<T>(
	// biome-ignore lint/complexity/noBannedTypes: <explanation>
	f: Function,
	_this: ApiInterface,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	...args: any[]
): WrapCall<T> {
	return (onFinalize: onFinalize) => f.call(_this, ...args, onFinalize);
}

function wrapCallWithNotifications<T>(
	call: WrapCall<T>,
	text: string,
	callback: onFinalize,
): ReturnType<typeof toast.promise> {
	const wrappedOnFinalize = (error: string | undefined) => {
		if (error !== undefined) {
      const errEasy = translateErrorMesg(error)
			toast.error(`${errEasy}`);
		} else {
			toast.success(`${text} finalized`);
		}
		callback(error);
	};

	return toast.promise(call(wrappedOnFinalize), {
		pending: `Sending the ${text.toLowerCase()}...`,
		success: { render: `${text} submitted`, icon: false },
		error: {
			render({ data }) {
				callback(`${data}`);
				return `${data}`;
			},
		},
	});
}

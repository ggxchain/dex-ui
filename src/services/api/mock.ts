import mockedTokens from "@/mock";
import type Order from "@/order";
import { OrderUtils } from "@/order";
import type Pair from "@/pair";
import { PairUtils } from "@/pair";
import type {
	Amount,
	CounterId,
	OrderType,
	PubKey,
	Token,
	TokenId,
} from "@/types";
import type { ApiInterface, onFinalize } from "../api";
import GGXWallet from "../ggx";

import TokenDecimals from "@/tokenDecimalsConverter";
import { BN, BN_ZERO } from "@polkadot/util";

type TokenDepositMock = {
	tokenId: TokenId;
	amount: Amount;
};

export default class ContractMock implements ApiInterface {
	deposits: Map<PubKey, TokenDepositMock[]> = new Map<
		PubKey,
		TokenDepositMock[]
	>();
	orders: Order[] = new Array<Order>();
	ordersByUser: Map<PubKey, CounterId[]> = new Map<PubKey, CounterId[]>();
	ordersByPair: Map<string, CounterId[]> = new Map<string, CounterId[]>();

	constructor() {
		const deposits = window.sessionStorage.getItem("contractDepositsMock");
		const orders = window.sessionStorage.getItem("contractOrdersMock");
		const ordersByUser = window.sessionStorage.getItem(
			"contractOrdersByUserMock",
		);
		const ordersByPair = window.sessionStorage.getItem(
			"contractOrdersByPairMock",
		);

		if (
			deposits !== null &&
			orders !== null &&
			ordersByUser !== null &&
			ordersByPair !== null
		) {
			this.ordersByUser = new Map(JSON.parse(ordersByUser));
			this.ordersByPair = new Map(JSON.parse(ordersByPair));
			// We use BN that is a class, so we need to convert it back to BN
			this.deposits = new Map(JSON.parse(deposits));
			this.deposits.forEach((value, key) => {
				value.forEach((deposit) => {
					deposit.amount = new BN(deposit.amount, 16);
				});
			});
			this.orders = JSON.parse(orders);
			this.orders.forEach((value) => {
				value.amountOffered = new BN(value.amountOffered, 16);
				value.amoutRequested = new BN(value.amoutRequested, 16);
			});
		}
	}

	async onChainBalanceOf(tokenId: number, address: string): Promise<Amount> {
		const tokenInfo = await this.tokenInfo(tokenId);
		return Promise.resolve(
			new TokenDecimals(tokenInfo.decimals).strToBN("1000"),
		);
	}

	tokenInfo(tokenId: number): Promise<Token> {
		return Promise.resolve(
			mockedTokens().find((value) => value.id === tokenId)!,
		);
	}

	save() {
		window.sessionStorage.setItem(
			"contractDepositsMock",
			JSON.stringify(Array.from(this.deposits.entries())),
		);
		window.sessionStorage.setItem(
			"contractOrdersMock",
			JSON.stringify(this.orders),
		);
		window.sessionStorage.setItem(
			"contractOrdersByUserMock",
			JSON.stringify(Array.from(this.ordersByUser.entries())),
		);
		window.sessionStorage.setItem(
			"contractOrdersByPairMock",
			JSON.stringify(Array.from(this.ordersByPair.entries())),
		);
	}

	deposit(
		tokenId: TokenId,
		amount: Amount,
		callback: onFinalize,
		pk: PubKey | undefined = undefined,
	): Promise<void> {
		const pubkey =
			pk === undefined ? new GGXWallet().pubkey()?.address ?? "" : pk;
		if (!this.deposits.has(pubkey)) {
			this.deposits.set(pubkey, new Array<TokenDepositMock>());
		}
		const deposit = this.deposits.get(pubkey);
		if (deposit === undefined) {
			//Should not happen as we initialized it above
			return Promise.reject("Deposit is undefined, but it should not happen");
		}
		const index = deposit.findIndex(
			(value) => JSON.stringify(value.tokenId) === JSON.stringify(tokenId),
		);
		if (index !== -1) {
			deposit[index].amount = deposit[index].amount.add(amount);
		} else {
			deposit.push({ tokenId: tokenId, amount });
		}
		this.save();
		callback(undefined);
		return Promise.resolve();
	}

	balanceOf(tokenId: TokenId, account: string): Promise<Amount> {
		const deposit = this.deposits.get(account);
		if (deposit === undefined) {
			return Promise.resolve(BN_ZERO);
		}
		const token = deposit.find(
			(value) => JSON.stringify(value.tokenId) === JSON.stringify(tokenId),
		);

		if (token !== undefined) {
			return Promise.resolve(token.amount);
		}

		return Promise.resolve(BN_ZERO);
	}

	tokens(): Promise<TokenId[]> {
		return Promise.resolve(mockedTokens().map((value) => value.id));
	}

	ownersTokens(address: string): Promise<TokenId[]> {
		const deposit = this.deposits.get(address);
		if (deposit === undefined) {
			return Promise.resolve([]);
		}
		return Promise.resolve(deposit.map((value) => value.tokenId));
	}

	tokenByIndex(index: number): TokenId | undefined {
		return mockedTokens().at(index)?.id;
	}

	ownersTokenByIndex(pubkey: PubKey, index: number): TokenId | undefined {
		const deposit = this.deposits.get(pubkey);
		if (deposit === undefined) {
			return undefined;
		}
		return deposit.at(index)?.tokenId;
	}

	withdraw(
		tokenId: TokenId,
		amount: Amount,
		callback: onFinalize,
	): Promise<void> {
		const pubkey = new GGXWallet().pubkey()?.address ?? "";
		const deposit = this.deposits.get(pubkey);
		if (deposit === undefined) {
			return Promise.reject("User is undefined.");
		}
		const index = deposit.findIndex(
			(value) => JSON.stringify(value.tokenId) === JSON.stringify(tokenId),
		);
		if (index !== -1) {
			deposit[index].amount = deposit[index].amount.sub(amount);
		}
		this.save();
		callback(undefined);
		return Promise.resolve();
	}

	orderFor(counterId: CounterId): Order | undefined {
		return this.orders.find((value) => value.counter === counterId);
	}

	pairOrders(pair: Pair): Promise<Order[]> {
		const orders = this.ordersByPair.get(PairUtils.string(pair));
		if (orders === undefined) {
			return Promise.resolve([]);
		}
		return Promise.resolve(
			orders.reduce<Order[]>((acc, value) => {
				const order = this.orderFor(value);
				if (order !== undefined) {
					acc.push(order);
				}
				return acc;
			}, []),
		);
	}

	pairOrderByIndex(pair: Pair, index: number): CounterId | undefined {
		const orders = this.ordersByPair.get(PairUtils.string(pair));
		if (orders === undefined) {
			return undefined;
		}
		return orders.at(index);
	}

	userOrders(pubkey: PubKey): Promise<Order[]> {
		const orders = this.ordersByUser.get(pubkey);
		if (orders === undefined) {
			return Promise.resolve([]);
		}
		return Promise.resolve(
			orders.reduce<Order[]>((acc, value) => {
				const order = this.orderFor(value);
				if (order !== undefined) {
					acc.push(order);
				}
				return acc;
			}, []),
		);
	}

	userOrderByIndex(pubkey: PubKey, index: number): CounterId | undefined {
		const orders = this.ordersByUser.get(pubkey);
		if (orders === undefined) {
			return undefined;
		}
		return orders.at(index);
	}

	makeOrder(
		pair: Pair,
		orderType: OrderType,
		amountOffered: Amount,
		amoutRequested: Amount,
		timestamp: number,
		callback: onFinalize,
	): Promise<void> {
		const counterId = (this.orders.at(-1)?.counter ?? 0) + 1;
		const order: Order = {
			pubkey: new GGXWallet().pubkey()?.address ?? "",
			pair,
			counter: counterId,
			expiration: Date.now() + 24 * 3600,
			orderType: orderType,
			amountOffered,
			amoutRequested,
		};
		this.orders.push(order);
		const ordersByUser = this.ordersByUser.get(order.pubkey);
		if (ordersByUser === undefined) {
			this.ordersByUser.set(order.pubkey, [counterId]);
		} else {
			ordersByUser.push(counterId);
		}

		const strPair = PairUtils.string(pair);
		const ordersByPair = this.ordersByPair.get(strPair);
		if (ordersByPair === undefined) {
			this.ordersByPair.set(strPair, [counterId]);
		} else {
			ordersByPair.push(counterId);
		}
		this.withdraw(OrderUtils.ownedToken(order), amountOffered, () => {});
		this.save();
		callback(undefined);
		return Promise.resolve();
	}

	cancelOrder(
		counterId: CounterId,
		callback: onFinalize,
		resolved = false,
	): Promise<void> {
		const pubkey = new GGXWallet().pubkey()?.address ?? "";
		const orderId = this.orders.findIndex(
			(value) => value.counter === counterId,
		);
		if (
			orderId === -1 ||
			(this.orders[orderId].pubkey !== pubkey && !resolved)
		) {
			return Promise.reject("Order not found.");
		}
		const order: Order = this.orders[orderId];
		this.orders.splice(orderId, 1);

		const ordersByUser = this.ordersByUser.get(order.pubkey);
		const orderByIndex = ordersByUser?.findIndex(
			(value) => value === counterId,
		);
		if (orderByIndex !== undefined && orderByIndex !== -1) {
			ordersByUser?.splice(orderByIndex, 1);
		}

		const orderByPair = this.ordersByPair.get(PairUtils.string(order.pair));
		const orderByPairIndex = orderByPair?.findIndex(
			(value) => value === counterId,
		);
		if (orderByPairIndex !== undefined && orderByPairIndex !== -1) {
			orderByPair?.splice(orderByPairIndex, 1);
		}

		// Don't return funds if order is resolved.
		if (!resolved) {
			this.deposit(OrderUtils.ownedToken(order), order.amountOffered, () => {});
		}

		this.save();
		callback(undefined);
		return Promise.resolve();
	}

	async takeOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
		const pubkey = new GGXWallet().pubkey()?.address ?? "";
		const order = this.orderFor(counterId);

		if (order !== undefined && order.pubkey !== pubkey) {
			// Check that user has enough tokens to take the order.

			const orderWant = OrderUtils.desiredToken(order);
			const balance = await this.balanceOf(orderWant, pubkey);
			if (balance < order.amoutRequested) {
				return Promise.reject("Not enough tokens.");
			}
			this.withdraw(orderWant, order.amoutRequested, () => {});
			this.deposit(
				OrderUtils.ownedToken(order),
				order.amountOffered,
				() => {},
				pubkey,
			);
			this.deposit(
				OrderUtils.desiredToken(order),
				order.amoutRequested,
				() => {},
				order.pubkey,
			);
			//
			this.cancelOrder(counterId, () => {}, true);
		}
		callback(undefined);
		return Promise.resolve();
	}
}

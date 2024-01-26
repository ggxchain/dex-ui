import GGXWallet from "./ggx";
import { Token, TokenId, CounterId, Order, Amount, PubKey, DetailedOrder, OrderType } from "@/types";
import Pair, { PairUtils } from "@/pair";

import GGxContract from "./contract/ggx";
import ContractMock from "./contract/mock"
import { CONTRACT_MOCKED, TOKENS_LIST_TTL } from "@/consts";
import { toast } from "react-toastify";

export type onFinalize = (error: string | undefined) => void;

export interface ContractInterface {
    // On dex interactions
    deposit(tokenId: TokenId, amount: Amount, callback: onFinalize): Promise<void>;
    balanceOf(tokenId: TokenId, address: string): Promise<Amount>;
    withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize): Promise<void>;
    tokens(): Promise<TokenId[]>;
    ownersTokens(address: string): Promise<TokenId[]>;
    pairOrders(pair: Pair): Promise<Order[]>;
    userOrders(user: PubKey): Promise<Order[]>;
    makeOrder(pair: Pair, orderType: OrderType, amountOffered: Amount, amoutRequested: Amount, callback: onFinalize): Promise<void>;
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
    contract: ContractInterface;
    wallet: GGXWallet = new GGXWallet();
    mocked: boolean;

    tokenCache: Map<TokenId, Token> = new Map<TokenId, Token>();
    tokenList: TokenId[] = new Array<TokenId>();
    lastUpdated: number = 0;

    constructor() {
        this.mocked = CONTRACT_MOCKED;
        if (typeof window !== 'undefined' && window.localStorage) {
            // Get info from local storage
            const mockedValue = window.localStorage.getItem('mocked');
            const tokenCache = window.localStorage.getItem('tokenCache');
            const tokenList = window.localStorage.getItem('tokenList');
            const lastUpdated = window.localStorage.getItem('lastUpdated');
            if (mockedValue !== null) {
                this.mocked = mockedValue === 'true';
            }
            if (tokenCache !== null) {
                this.tokenCache = new Map(JSON.parse(tokenCache));
            }
            if (tokenList !== null) {
                this.tokenList = JSON.parse(tokenList);
            }
            if (lastUpdated !== null) {
                this.lastUpdated = JSON.parse(lastUpdated);
            }
        }

        this.contract = this.mocked ? new ContractMock() : new GGxContract();
    }

    changeContract() {
        this.mocked = !this.mocked;
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('mocked', this.mocked.toString());
        }
        this.contract = this.mocked ? new ContractMock() : new GGxContract();
    }

    isMocked(): boolean {
        return this.mocked;
    }

    async allTokens(): Promise<TokenId[]> {
        const now = new Date().getTime();
        if (now - this.lastUpdated > TOKENS_LIST_TTL) {
            this.tokenList = await this.contract.tokens();
            this.lastUpdated = now;
            if (typeof window !== 'undefined' && window.localStorage) {
                window.localStorage.setItem('tokenList', JSON.stringify(this.tokenList));
                window.localStorage.setItem('lastUpdated', JSON.stringify(this.lastUpdated));
            }
        }
        return await Promise.resolve(this.tokenList);
    }

    async allTokensWithInfo(): Promise<Token[]> {
        const tokens = await this.allTokens();
        return await Promise.all(tokens.map(async (value) => {
            return {
                ...await this.mapTokenIdToToken(value),
                id: value
            }
        }));
    }

    async allTokensOfOwner(): Promise<TokenId[]> {
        const address = this.walletAddress();
        return await this.contract.ownersTokens(address);
    }

    async onChainBalanceOf(tokenId: TokenId): Promise<Amount> {
        const address = this.walletAddress();
        return await this.contract.onChainBalanceOf(tokenId, address);
    }

    async allOrders(pair: Pair): Promise<Order[]> {
        const orders = await this.contract.pairOrders(pair);
        // TODO: We need to double check this logic after contract will be ready.
        // Currently we fetch both side tiker orders and then filter out duplicates.
        // But it's posible that we will need to fetch only one side of ticker orders.
        await this.validateTokenId(pair[0]);
        await this.validateTokenId(pair[1]);

        const reverseOrders = (await this.contract.pairOrders(PairUtils.reverse(pair))).reduce<Order[]>((acc, order) => {
            if (orders.findIndex((value) => value.counter === order.counter) === -1) {
                acc.push({
                    ...order,
                    orderType: order.orderType === "BUY" ? "SELL" : "BUY",
                    pair
                });
            }
            return acc;
        }, []);

        return [...orders, ...reverseOrders];
    }

    async allUserOrders(): Promise<DetailedOrder[]> {
        const address = this.walletAddress();
        const orders = await this.contract.userOrders(address);
        return await Promise.all(orders.map(async (value) => {
            return {
                ...value,
                token1: await this.mapTokenIdToToken(value.pair[0]),
                token2: await this.mapTokenIdToToken(value.pair[1])
            }
        }));
    }

    // Probably, we would need to create a mapping for this on frontend.
    async mapTokenIdToToken(tokenId: TokenId): Promise<Token> {
        let value = this.tokenCache.get(tokenId);
        if (value !== undefined) {
            // Token info shouldn't expire, so we can use cached value.
            return value;
        }
        value = await this.contract.tokenInfo(tokenId)
        this.tokenCache.set(tokenId, value);
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('tokenCache', JSON.stringify(Array.from(this.tokenCache.entries())));
        }
        return value;
    }

    async balanceOf(tokenId: TokenId): Promise<Amount> {
        const address = this.walletAddress();
        await this.validateTokenId(tokenId);

        return this.contract.balanceOf(tokenId, address);
    }

    async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        const _ = this.walletAddress(); // Check if wallet is initialized
        if (amount.lten(0)) {
            throw new Error(Errors.AmountIsLessOrEqualToZero);
        }
        await this.validateTokenId(tokenId);

        wrapCallWithNotifications(curry(this.contract.deposit, this.contract, tokenId, amount), "Deposit", callback);
    }

    async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        const _ = this.walletAddress(); // Check if wallet is initialized
        await this.validateTokenId(tokenId);

        if (amount.lten(0)) {
            throw new Error(Errors.AmountIsLessOrEqualToZero);
        }
        const balance = await this.balanceOf(tokenId);
        if (balance < amount) {
            throw new Error(Errors.NotEnoughBalance);
        }

        wrapCallWithNotifications(curry(this.contract.withdraw, this.contract, tokenId, amount), "Withdraw", callback);
    }

    async cancelOrder(counterId: CounterId, callback: onFinalize) {
        const _ = this.walletAddress(); // Check if wallet is initialized
        wrapCallWithNotifications(curry(this.contract.cancelOrder, this.contract, counterId), "Cancel order", callback);
    }

    async makeOrder(pair: Pair, amountOffered: Amount, amoutRequested: Amount, orderType: OrderType, callback: onFinalize) {
        const _ = this.walletAddress(); // Check if wallet is initialized
        await this.validateTokenId(pair[0]);
        await this.validateTokenId(pair[1]);

        if (amountOffered.lten(0) || amoutRequested.lten(0)) {
            throw new Error(Errors.AmountIsLessOrEqualToZero);
        }

        const balance = await this.balanceOf(orderType == "SELL" ? pair[0] : pair[1]);
        if (balance < amountOffered) {
            throw new Error(Errors.NotEnoughBalance);
        }

        wrapCallWithNotifications(curry(this.contract.makeOrder, this.contract, pair, orderType, amountOffered, amoutRequested), "Order", callback);
    }

    async takeOrder(counterId: CounterId, callback: onFinalize) {
        const _ = this.walletAddress(); // Check if wallet is initialized
        wrapCallWithNotifications(curry(this.contract.takeOrder, this.contract, counterId), "Order", callback);
    }

    walletAddress(): string {
        const wallet = this.wallet.pubkey()?.address;
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

export function errorHandler(error: Errors): undefined {
    toast.error(`Error: ${error}`);
    return undefined
}

type WrapCall<T> = (_: onFinalize) => Promise<T>;

function curry<T>(f: Function, _this: ContractInterface, ...args: any[]): WrapCall<T> {
    return (onFinalize: onFinalize) => f.call(_this, ...args, onFinalize);
}

function wrapCallWithNotifications<T>(call: WrapCall<T>, text: String, callback: onFinalize): ReturnType<typeof toast.promise> {
    const wrappedOnFinalize = (error: string | undefined) => {
        if (error !== undefined) {
            toast.error(`Error: ${error}`);
        } else {
            toast.success(`${text} finalized`);
        }
        callback(error);
    }

    return toast.promise(call(wrappedOnFinalize), {
        "pending": `Sending the ${text.toLowerCase()}...`,
        "success": { render: `${text} submitted`, icon: false },
        error: {
            render({ data }) {
                callback(`${data}`);
                return `${data}`
            }
        }
    });
};


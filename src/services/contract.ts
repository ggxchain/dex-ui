import mockedTokens from "@/mock";
import GGXWallet from "./ggx";
import { Token, TokenId, CounterId, Order, Amount, PubKey, DetailedOrder, OrderType } from "@/types";
import Pair, { PairUtils } from "@/pair";

import GGxContract from "./contract/ggx";
import ContractMock from "./contract/mock"
import { CONTRACT_MOCKED } from "@/consts";
import { toast } from "react-toastify";

export type onFinalize = () => void;

export interface ContractInterface {
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
    tokenInfo(tokenId: TokenId): Promise<Token>;
}

export default class Contract {
    contract: ContractInterface;
    wallet: GGXWallet = new GGXWallet();
    mocked: boolean;

    constructor() {
        this.mocked = CONTRACT_MOCKED;
        if (typeof window !== 'undefined' && window.localStorage) {
            // Get info from local storage
            const mockedValue = window.localStorage.getItem('mocked');
            if (mockedValue !== null) {
                this.mocked = mockedValue === 'true';
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

    async allTokens(): Promise<Token[]> {
        return Promise.all((await this.contract.tokens()).map((tokenId) => this.mapTokenIdToToken(tokenId)));
    }

    async allTokensOfOwner(): Promise<Token[]> {
        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.reject("Wallet is not connected");
        }
        return Promise.all((await this.contract.ownersTokens(address)).map((tokenId) => this.mapTokenIdToToken(tokenId)));
    }

    async allOrders(pair: Pair): Promise<Order[]> {
        const orders = await this.contract.pairOrders(pair);
        // TODO: We need to double check this logic after contract will be ready.
        // Currently we fetch both side tiker orders and then filter out duplicates.
        // But it's posible that we will need to fetch only one side of ticker orders.
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
        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.reject("Wallet is not connected");
        }
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
        return await this.contract.tokenInfo(tokenId)
    }

    async balanceOf(tokenId: TokenId): Promise<Amount> {
        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.resolve(0);
        }

        return this.contract.balanceOf(tokenId, address);
    }

    async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        wrapCallWithNotifications(curry(this.contract.deposit, this.contract, tokenId, amount), "Deposit", callback);
    }

    async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        wrapCallWithNotifications(curry(this.contract.withdraw, this.contract, tokenId, amount), "Withdraw", callback);
    }

    async cancelOrder(counterId: CounterId, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        wrapCallWithNotifications(curry(this.contract.cancelOrder, this.contract, counterId), "Cancel order", callback);
    }

    async makeOrder(pair: Pair, amountOffered: Amount, amoutRequested: Amount, orderType: OrderType, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        wrapCallWithNotifications(curry(this.contract.makeOrder, this.contract, pair, orderType, amountOffered, amoutRequested), "Order", callback);
    }

    async takeOrder(counterId: CounterId, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        wrapCallWithNotifications(curry(this.contract.takeOrder, this.contract, counterId), "Order", callback);
    }
}

type WrapCall<T> = (_: onFinalize) => Promise<T>;

function curry<T>(f: Function, _this: ContractInterface, ...args: any[]): WrapCall<T> {
    return (onFinalize: onFinalize) => f.call(_this, ...args, onFinalize);
}

function wrapCallWithNotifications<T>(call: WrapCall<T>, text: String, callback: onFinalize): ReturnType<typeof toast.promise> {
    const wrappedOnFinalize = () => {
        toast.success(`${text} finalized`);
        callback();
    }

    return toast.promise(call(wrappedOnFinalize), {
        "pending": `Sending the ${text.toLowerCase()}...`,
        "success": { render: `${text} submitted`, icon: false },
        error: {
            render({ data }) {
                return `${data}`
            }
        }
    });
};


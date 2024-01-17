import mockedTokens from "@/mock";
import GGXWallet from "./ggx";
import { Token, TokenId, CounterId, Order, Amount, PubKey, DetailedOrder, OrderType } from "@/types";
import Pair from "@/pair";

import GGxContract from "./contract/ggx";
import ContractMock from "./contract/mock"
import { CONTRACT_MOCKED } from "@/consts";

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
        return (await this.contract.tokens()).map((tokenId) => this.mapTokenIdToToken(tokenId));
    }

    async allTokensOfOwner(): Promise<Token[]> {
        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.reject("Wallet is not connected");
        }
        return (await this.contract.ownersTokens(address)).map((tokenId) => this.mapTokenIdToToken(tokenId));
    }

    async allOrders(pair: Pair): Promise<Order[]> {
        return await this.contract.pairOrders(pair);
    }

    async allUserOrders(): Promise<DetailedOrder[]> {
        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.reject("Wallet is not connected");
        }
        const orders = await this.contract.userOrders(address);
        return orders.map((value) => {
            return {
                ...value, token1: this.mapTokenIdToToken(value.pair[0]),
                token2: this.mapTokenIdToToken(value.pair[1])
            }
        });
    }

    // Probably, we would need to create a mapping for this on frontend.
    mapTokenIdToToken(tokenId: TokenId): Token {
        const token = mockedTokens().find((value) =>
            JSON.stringify(value.id) === JSON.stringify(tokenId)
        );
        if (token === undefined) {
            throw new Error("Token not found");
        }
        return token as Token;
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

        this.contract.deposit(tokenId, amount, callback);
    }

    async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        this.contract.withdraw(tokenId, amount, callback);
    }

    async cancelOrder(counterId: CounterId, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        this.contract.cancelOrder(counterId, callback);
    }

    async makeOrder(pair: Pair, amountOffered: Amount, amoutRequested: Amount, callback: onFinalize) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        return this.contract.makeOrder(pair, "BUY", amountOffered, amoutRequested, callback);
    }
}

import { GGX_WSS_URL } from "@/consts";

import { ApiPromise, WsProvider } from '@polkadot/api';
import { Signer } from '@polkadot/api/types';
import { ISubmittableResult } from "@polkadot/types/types";
import { decodeAddress } from '@polkadot/util-crypto';
import { Amount, CounterId, Order, OrderType, Token, TokenId } from "@/types";
import Pair from "@/pair";
import GGXWallet from "../ggx";

import { BN_ZERO, hexToString } from "@polkadot/util";

import { ContractInterface, onFinalize } from "../contract";

export default class GGxContract implements ContractInterface {
    api: ApiPromise | undefined;

    constructor() { }

    async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        const api = await this.apiPromise();

        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        await api.tx.dex.deposit(tokenId, amount).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async balanceOf(tokenId: TokenId, address: string): Promise<Amount> {
        const api = await this.apiPromise();
        const addressParam = this.createAddress(address);

        const result = await api.query.dex.userTokenInfoes(addressParam, tokenId);
        if (result !== undefined) {
            return Promise.resolve(result.amount.toBn());
        }
        return Promise.resolve(BN_ZERO);
    }

    async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        const api = await this.apiPromise();

        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        await api.tx.dex.withdraw(tokenId, amount).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async tokens(): Promise<TokenId[]> {
        const api = await this.apiPromise();
        const output = await api.query.dex.tokenInfoes();
        if (output !== undefined) {
            return output.map((tokenId) => tokenId.toNumber());
        }
        return Promise.resolve([])
    }

    async tokenInfo(tokenId: TokenId): Promise<Token> {
        // TODO: cache it
        const api = await this.apiPromise();
        const metadata = await api.query.assets.metadata(tokenId);

        return {
            id: tokenId,
            name: hexToString(metadata.name.toString()),
            symbol: hexToString(metadata.symbol.toString()),
            network: "GGx"
        }
    }

    async ownersTokens(address: string): Promise<TokenId[]> {
        const api = await this.apiPromise();
        const output = await api.query.dex.userTokenInfoes.entries(address);
        if (output !== undefined) {
            return output.map(([_, tokenInfo]) => tokenInfo.assetId.toNumber())
        }
        return Promise.resolve([])
    }

    async onChainBalanceOf(tokenId: TokenId, address: string): Promise<Amount> {
        const api = await this.apiPromise();
        const addressParam = this.createAddress(address);

        const result = await api.query.assets.account(tokenId, addressParam);
        if (result !== undefined && result.isSome) {
            return Promise.resolve(result.unwrap().balance.toBn());
        }
        return Promise.resolve(BN_ZERO);
    }

    async pairOrders(pair: Pair): Promise<Order[]> {
        const api = await this.apiPromise();

        const orderList = await api.query.dex.pairOrders(pair);
        const ordersOpt = await Promise.all(orderList.map((number) => api.query.dex.orders(number)));

        if (ordersOpt !== undefined) {
            return ordersOpt.reduce<Order[]>((acc, orderOpt) => {
                if (orderOpt.isNone) {
                    return acc;
                }
                const order = orderOpt.unwrap();
                acc.push({
                    pubkey: order.address.toString(),
                    pair: [order.pair[0].toNumber(), order.pair[1].toNumber()],
                    counter: order.counter.toNumber(),
                    timestamp: order.timestamp.toNumber(),
                    orderType: order.orderType.toString() as OrderType,
                    amountOffered: order.amountOffered.toBn(),
                    amoutRequested: order.amoutRequested.toBn()
                })
                return acc;
            }, []);
        }
        return Promise.reject([]);
    }

    async userOrders(address: string): Promise<Order[]> {
        const api = await this.apiPromise();

        const orderList = await api.query.dex.userOrders.entries(address);
        const ordersOpt = await Promise.all(orderList.map(([storageKey]) => api.query.dex.orders(storageKey.args[1])));

        if (ordersOpt !== undefined) {
            return ordersOpt.reduce<Order[]>((acc, orderOpt) => {
                if (orderOpt.isNone) {
                    return acc;
                }
                const order = orderOpt.unwrap();
                acc.push({
                    pubkey: order.address.toString(),
                    pair: [order.pair[0].toNumber(), order.pair[1].toNumber()],
                    counter: order.counter.toNumber(),
                    timestamp: order.timestamp.toNumber(),
                    orderType: order.orderType.toString() as OrderType,
                    amountOffered: order.amountOffered.toBn(),
                    amoutRequested: order.amoutRequested.toBn()
                })
                return acc;
            }, []);
        }
        return Promise.reject([]);
    }

    async makeOrder(pair: Pair, orderType: OrderType, amountOffered: Amount, amoutRequested: Amount, callback: onFinalize): Promise<void> {
        const api = await this.apiPromise();
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        await api.tx.dex.makeOrder(...pair, amountOffered, amoutRequested, orderType).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async cancelOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
        const api = await this.apiPromise();
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        await api.tx.dex.cancelOrder(counterId).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async takeOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
        const api = await this.apiPromise();
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        await api.tx.dex.takeOrder(counterId).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async apiPromise() {
        if (this.api === undefined) {
            const wsProvider = new WsProvider(GGX_WSS_URL);
            this.api = await ApiPromise.create({ provider: wsProvider });
        }

        return this.api

    }

    async accountSigner(): Promise<[string, Signer]> {
        const wallet = new GGXWallet();
        const account = wallet.pubkey();
        if (account === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        return [account.address, await wallet.signerFor(account.address)];
    }

    createAddress(address: string): Uint8Array {
        return decodeAddress(address);
    }

    transactionCallback(callback: onFinalize): (_: ISubmittableResult) => void {
        return (result: ISubmittableResult) => {
            if (result.status.isFinalized) {
                if (result.dispatchError) {
                    if (result.dispatchError.isModule) {
                        // Dex pallet error
                        const { method } = result.dispatchError.registry.findMetaError(result.dispatchError.asModule);

                        callback(method);
                    } else {
                        // BadOrigin, Not enough balance, etc.
                        callback(result.dispatchError.toString());
                    }
                } else {
                    // Success
                    callback(undefined);
                }
            }
        }
    }

    getOrder(order: PalletDexOrder): Order {
        return {
            pubkey: order.pubkey,
            pair: order.pair,
            counter: order.counter,
            timestamp: order.timestamp,
            orderType: order.orderType,
            amountOffered: order.amountOffered,
            amoutRequested: order.amoutRequested
        }
    }
}

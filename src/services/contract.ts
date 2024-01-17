import mockedTokens from "@/mock";
import GGXWallet from "./ggx";
import { Token, TokenId, CounterId, Order, Amount, PubKey, DetailedOrder } from "@/types";
import Pair from "@/pair";
import { GGX_CONTRACT_ADDRESS, GGX_WSS_URL, WASM_GAS_LIMIT, WASM_PROOF_LIMIT } from "@/consts";
import GGxContractMetadata from "@/config/contractMetadata";

import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { Signer } from '@polkadot/api/types';
import type { WeightV2, } from '@polkadot/types/interfaces';
import { ISubmittableResult } from "@polkadot/types/types";
import { decodeAddress } from '@polkadot/util-crypto';

export default class Contract {
    contract: ContractMock = new ContractMock();
    wallet: GGXWallet = new GGXWallet();

    constructor() { }

    async allTokens(page: number = 0, fetch: number = 50): Promise<Token[]> {
        const tokens = [];
        let i = 0;
        const shift = page * fetch;
        console.log(await new GGxContract().tokens());

        while (i < fetch) {
            const tokenId = this.contract.tokenByIndex(shift + i);
            if (tokenId === undefined) {
                break;
            }
            tokens.push(this.mapTokenIdToToken(tokenId));
            i++;
        }
        return Promise.resolve(tokens);
    }

    async allTokensOfOwner(page: number = 0, fetch: number = 50): Promise<Token[]> {
        const tokens = [];
        let i = 0;
        const shift = page * fetch;

        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.resolve([]);
        }
        console.log(await new GGxContract().ownersTokens(address));
        while (i < fetch) {
            const tokenId = this.contract.ownersTokenByIndex(address, shift + i);
            if (tokenId === undefined) {
                break;
            }
            tokens.push(this.mapTokenIdToToken(tokenId));
            i++;
        }
        return Promise.resolve(tokens);
    }

    async allOrders(pair: Pair, page: number = 0, fetch: number = 50): Promise<Order[]> {
        const orders = [];
        let i = 0;
        const shift = page * fetch;
        console.log(await new GGxContract().pairOrders(pair));
        while (i < fetch) {
            const counterId = this.contract.pairOrderByIndex(pair, shift + i);
            if (counterId === undefined) {
                break;
            }

            const order = this.contract.orderFor(counterId);
            if (order === undefined) {
                break;
            }
            orders.push(order);
            i++;
        }
        return Promise.resolve(orders);
    }

    async allUserOrders(page: number = 0, fetch: number = 50): Promise<DetailedOrder[]> {
        const orders = [];
        let i = 0;
        const shift = page * fetch;

        const address = this.wallet.pubkey()?.address;
        console.log(await new GGxContract().orderFor(0));

        if (address === undefined) {
            return Promise.resolve([]);
        }
        console.log(await new GGxContract().userOrders(address));

        while (i < fetch) {
            const counterId = this.contract.userOrderByIndex(address, shift + i);
            if (counterId === undefined) {
                break;
            }
            const order = this.contract.orderFor(counterId);
            if (order === undefined) {
                break;
            }
            const token1 = this.mapTokenIdToToken(order.pair.tokenId1);
            const token2 = this.mapTokenIdToToken(order.pair.tokenId2);
            orders.push({ ...order, token1, token2 });
            i++;
        }
        return Promise.resolve(orders);
    }

    // Probably, we would need to create a mapping for this on frontend.
    mapTokenIdToToken(tokenId: TokenId): Token {
        return mockedTokens().find((value) => value.id === tokenId)!;
    }

    async balanceOf(tokenId: TokenId): Promise<Amount> {
        const address = this.wallet.pubkey()?.address;
        if (address === undefined) {
            return Promise.resolve(0);
        }
        console.log(await new GGxContract().balanceOf(tokenId, address));

        return Promise.resolve(this.contract.balanceOf(tokenId, address));
    }

    async deposit(tokenId: TokenId, amount: Amount) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        new GGxContract().deposit(tokenId, amount, (result) => { });

        this.contract.deposit(this.wallet.pubkey()!.address, tokenId, amount);
    }

    async withdraw(tokenId: TokenId, amount: Amount) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        this.contract.withdraw(this.wallet.pubkey()!.address, tokenId, amount);
    }

    async cancelOrder(counterId: CounterId) {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        this.contract.cancelOrder(this.wallet.pubkey()!.address, counterId);
    }

    async makeOrder(pair: Pair, amountOffered: Amount, amountDesired: Amount): Promise<CounterId> {
        if (this.wallet.pubkey() === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        return Promise.resolve(this.contract.makeOrder(this.wallet.pubkey()!.address, pair, amountOffered, amountDesired))
    }
}

type TransactionCallback = (result: ISubmittableResult) => void;

type OkWrapper<T> = {
    ok: T
}

class GGxContract {
    constructor() { }

    async deposit(tokenId: TokenId, amount: Amount, callback: TransactionCallback) {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();

        const { gasRequired } = await contract.query.deposit(sender, { gasLimit: initialGasLimit }, tokenId, amount);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.deposit({ gasLimit }, tokenId, amount).signAndSend(sender, { signer: senderSigner }, callback);
    }

    async balanceOf(tokenId: TokenId, address: string): Promise<Amount> {
        const contract = await this.contract();
        const addressParam = this.createAddress(address);
        const initialGasLimit = this.initialGasLimit(contract);
        const { gasRequired } = await contract.query.balanceOf(address, { gasLimit: initialGasLimit }, addressParam, tokenId);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.balanceOf(address, { gasLimit }, addressParam, tokenId);
        if (result.isOk && output !== null) {
            return Promise.resolve(this.decodeAmount(output.toHex()));
        }
        return Promise.reject(result.asErr);
    }

    async withdraw(tokenId: TokenId, amount: Amount, callback: TransactionCallback) {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();

        const { gasRequired } = await contract.query.withdraw(sender, { gasLimit: initialGasLimit }, tokenId, amount);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.withdraw({ gasLimit }, tokenId, amount).signAndSend(sender, { signer: senderSigner }, callback);
    }

    async tokens(): Promise<TokenId[]> {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender] = await this.accountSigner();

        const { gasRequired } = await contract.query.tokens(sender, { gasLimit: initialGasLimit });
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.tokens(sender, { gasLimit });
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<TokenId[]>).ok);
        }
        return Promise.reject(result.asErr);

    }

    async ownersTokens(address: string): Promise<TokenId[]> {
        const contract = await this.contract();
        const addressParam = this.createAddress(address);
        const initialGasLimit = this.initialGasLimit(contract);
        const { gasRequired } = await contract.query.ownersTokens(address, { gasLimit: initialGasLimit }, addressParam);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.ownersTokens(address, { gasLimit }, addressParam);
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<TokenId[]>).ok);
        }
        return Promise.reject(result.asErr);
    }

    async orderFor(counterId: CounterId): Promise<Order> {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract)
        const [sender] = await this.accountSigner();
        const { gasRequired } = await contract.query.orderFor(sender, { gasLimit: initialGasLimit }, counterId);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.orderFor(sender, { gasLimit }, counterId);
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<Order>).ok);
        }
        return Promise.reject(result.asErr);
    }

    async pairOrders(pair: Pair): Promise<Order[]> {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract)
        const [sender] = await this.accountSigner();
        const { gasRequired } = await contract.query.pairOrders(sender, { gasLimit: initialGasLimit }, pair.tokenId1, pair.tokenId2);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.pairOrders(sender, { gasLimit }, pair.tokenId1, pair.tokenId2);
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<Order[]>).ok);
        }
        return Promise.reject(result.asErr);
    }

    async userOrders(address: string): Promise<Order[]> {
        const contract = await this.contract();
        const addressParam = this.createAddress(address);
        const initialGasLimit = this.initialGasLimit(contract);
        const { gasRequired } = await contract.query.getUserOrders(address, { gasLimit: initialGasLimit }, addressParam);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.getUserOrders(address, { gasLimit }, addressParam);
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<Order[]>).ok);
        }
        return Promise.reject(result.asErr);
    }

    async contract() {
        const wsProvider = new WsProvider(GGX_WSS_URL);
        const api = await ApiPromise.create({ provider: wsProvider });
        return new ContractPromise(api, GGxContractMetadata, GGX_CONTRACT_ADDRESS);
    }

    async accountSigner(): Promise<[string, Signer]> {
        const wallet = new GGXWallet();
        const account = wallet.pubkey();
        if (account === undefined) {
            return Promise.reject("Wallet is not initialized");
        }
        return [account.address, await wallet.signerFor(account.address)];
    }

    initialGasLimit(contract: ContractPromise): WeightV2 {
        return contract.registry.createType('WeightV2', {
            proofSize: WASM_PROOF_LIMIT,
            refTime: WASM_GAS_LIMIT,
        });
    }

    createAddress(address: string): Uint8Array {
        return decodeAddress(address);
    }

    decodeAmount(amount: string): Amount {
        return Number(amount)
    }
}


type TokenDepositMock = {
    tokenId: TokenId,
    amount: Amount
}

class ContractMock {
    deposits: Map<PubKey, TokenDepositMock[]> = new Map<PubKey, TokenDepositMock[]>();
    orders: Order[] = new Array<Order>();
    ordersByUser: Map<PubKey, CounterId[]> = new Map<PubKey, CounterId[]>();
    ordersByPair: Map<string, CounterId[]> = new Map<string, CounterId[]>();

    constructor() {
        const deposits = window.sessionStorage.getItem("contractDepositsMock");
        const orders = window.sessionStorage.getItem("contractOrdersMock");
        const ordersByUser = window.sessionStorage.getItem("contractOrdersByUserMock");
        const ordersByPair = window.sessionStorage.getItem("contractOrdersByPairMock");

        if (deposits !== null && orders !== null && ordersByUser !== null && ordersByPair !== null) {
            this.deposits = new Map(JSON.parse(deposits));
            this.orders = JSON.parse(orders);
            this.ordersByUser = new Map(JSON.parse(ordersByUser));
            this.ordersByPair = new Map(JSON.parse(ordersByPair));
        }
    }

    save() {
        window.sessionStorage.setItem("contractDepositsMock", JSON.stringify(Array.from(this.deposits.entries())));
        window.sessionStorage.setItem("contractOrdersMock", JSON.stringify(this.orders));
        window.sessionStorage.setItem("contractOrdersByUserMock", JSON.stringify(Array.from(this.ordersByUser.entries())));
        window.sessionStorage.setItem("contractOrdersByPairMock", JSON.stringify(Array.from(this.ordersByPair.entries())));
    }

    deposit(pubkey: PubKey, tokenId: TokenId, amount: Amount) {
        if (!this.deposits.has(pubkey)) {
            this.deposits.set(pubkey, new Array<TokenDepositMock>());
        }
        const deposit = this.deposits.get(pubkey);
        if (deposit === undefined) {
            //Should not happen as we initialized it above
            console.error("Deposit is undefined, but it should not happen.")
            return;
        }
        const index = deposit.findIndex((value) => value.tokenId === tokenId);
        if (index !== -1) {
            deposit[index].amount += amount;
        } else {
            deposit.push({ tokenId: tokenId, amount });
        }
        this.save();
    }

    balanceOf(tokenId: TokenId, account: string): Amount {
        const deposit = this.deposits.get(account);
        if (deposit === undefined) {
            return 0;
        }
        const index = deposit.findIndex((value) => value.tokenId === tokenId);
        if (index !== -1) {
            return deposit[index].amount;
        } else {
            return 0;
        }
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

    withdraw(pubkey: PubKey, tokenId: TokenId, amount: Amount) {
        const deposit = this.deposits.get(pubkey);
        if (deposit === undefined) {
            return;
        }
        const index = deposit.findIndex((value) => value.tokenId === tokenId);
        if (index !== -1) {
            deposit[index].amount -= amount;
        }
        this.save();

    }

    orderFor(counterId: number): Order | undefined {
        return this.orders.find((value) => value.counterId === counterId);
    }

    pairOrderByIndex(pair: Pair, index: number): CounterId | undefined {
        const orders = this.ordersByPair.get(Pair.string(pair));
        if (orders === undefined) {
            return undefined;
        }
        return orders.at(index);
    }

    userOrderByIndex(pubkey: PubKey, index: number): CounterId | undefined {
        const orders = this.ordersByUser.get(pubkey);
        if (orders === undefined) {
            return undefined;
        }
        return orders.at(index);
    }

    makeOrder(pubkey: PubKey, pair: Pair, amountOffered: Amount, amountDesired: Amount): CounterId {
        const counterId = (this.orders.at(-1)?.counterId ?? 0) + 1;
        const order: Order = {
            pubkey,
            pair,
            counterId: counterId,
            timestamp: Date.now(),
            orderType: pair.orderType,
            amountOffered,
            amountDesired
        };
        this.orders.push(order);
        const ordersByUser = this.ordersByUser.get(pubkey);
        if (ordersByUser === undefined) {
            this.ordersByUser.set(pubkey, [counterId]);
        } else {
            ordersByUser.push(counterId);
        }

        const strPair = Pair.string(pair);
        const ordersByPair = this.ordersByPair.get(strPair);
        if (ordersByPair === undefined) {
            this.ordersByPair.set(strPair, [counterId]);
        } else {
            ordersByPair.push(counterId);
        }
        this.withdraw(pubkey, Pair.ownedToken(pair), amountOffered);
        this.matchOrder(order);
        this.save();

        return counterId;

    }

    cancelOrder(pubkey: PubKey, counterId: CounterId, returnTokens: boolean = true) {
        const orderId = this.orders.findIndex((value) => value.counterId === counterId);
        if (orderId === -1 || this.orders[orderId].pubkey !== pubkey) {
            return;
        }
        const order: Order = this.orders[orderId];
        this.orders.splice(orderId, 1);

        const ordersByUser = this.ordersByUser.get(pubkey);
        const orderByIndex = ordersByUser?.findIndex((value) => value === counterId);
        if (orderByIndex !== undefined && orderByIndex !== -1) {
            ordersByUser?.splice(orderByIndex, 1);
        }

        const orderByPair = this.ordersByPair.get(Pair.string(order.pair));
        const orderByPairIndex = orderByPair?.findIndex((value) => value === counterId);
        if (orderByPairIndex !== undefined && orderByPairIndex !== -1) {
            orderByPair?.splice(orderByPairIndex, 1);
        }

        // Return tokens.
        if (returnTokens) {
            this.deposit(pubkey, Pair.ownedToken(order.pair), order.amountOffered);
        }

        this.save();

    }

    // ideally, we should let the user to buy only part of the maker order, but for the mock we just match the whole order
    matchOrder(order: Order) {
        const ordersByPair = this.ordersByPair.get(Pair.string(order.pair));
        if (ordersByPair === undefined) {
            return;
        }
        const orders = ordersByPair.map((value: number) => this.orderFor(value));
        const available = orders.filter((ord: Order | undefined) => ord && simpleMatch(ord, order));
        const matched = available.at(0);
        if (matched !== undefined) {
            this.deposit(order.pubkey, Pair.desiredToken(order.pair), order.amountDesired);
            this.deposit(matched.pubkey, Pair.desiredToken(matched.pair), order.amountOffered);
            this.cancelOrder(order.pubkey, order.counterId, false);
            this.cancelOrder(matched.pubkey, matched.counterId, false);
        }
    }
}

// We have order book with orders. We want to match orders that are simple equal to each other.
// We check if the amount offered is equal to the amount desired and the other way around.
// The values can be floating point numbers so we need to check if they are close enough.
// We don't care about small Epsilon as it mock contract and on contract we would have proper precision.
function simpleMatch(order1: Order, order2: Order): boolean {
    if (order1.orderType === order2.orderType) {
        // We don't match orders of the same type.
        return false;
    }

    const amountOffered1 = order1.amountOffered;
    const amountOffered2 = order2.amountOffered;
    const amountDesired1 = order1.amountDesired;
    const amountDesired2 = order2.amountDesired;

    const E = 0.0000001;

    if (Math.abs(amountOffered1 - amountDesired2) < E && Math.abs(amountOffered2 - amountDesired1) < E) {
        return true;
    } else {
        return false;
    }
}

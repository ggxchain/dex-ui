import { GGX_CONTRACT_ADDRESS, GGX_WSS_URL, WASM_GAS_LIMIT, WASM_PROOF_LIMIT } from "@/consts";
import GGxContractMetadata from "@/config/contractMetadata";

import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { Signer } from '@polkadot/api/types';
import type { WeightV2, } from '@polkadot/types/interfaces';
import { ISubmittableResult } from "@polkadot/types/types";
import { decodeAddress } from '@polkadot/util-crypto';
import { Amount, CounterId, Order, OrderType, TokenId } from "@/types";
import Pair from "@/pair";
import GGXWallet from "../ggx";

import { ContractInterface, onFinalize } from "../contract";

type OkWrapper<T> = {
    ok: T
}

export default class GGxContract implements ContractInterface {
    constructor() { }

    async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        const { gasRequired } = await contract.query.deposit(sender, { gasLimit: initialGasLimit }, tokenId, amount);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.deposit({ gasLimit }, tokenId, amount).signAndSend(sender, { signer: senderSigner }, transactionCallback);
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

    async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        const { gasRequired } = await contract.query.withdraw(sender, { gasLimit: initialGasLimit }, tokenId, amount);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.withdraw({ gasLimit }, tokenId, amount).signAndSend(sender, { signer: senderSigner }, transactionCallback);
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
        const { gasRequired } = await contract.query.pairOrders(sender, { gasLimit: initialGasLimit }, ...pair);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.pairOrders(sender, { gasLimit }, ...pair);
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<Order[]>).ok);
        }
        return Promise.reject(result.asErr);
    }

    async userOrders(address: string): Promise<Order[]> {
        const contract = await this.contract();
        const addressParam = this.createAddress(address);
        const initialGasLimit = this.initialGasLimit(contract);
        const { gasRequired } = await contract.query.userOrders(address, { gasLimit: initialGasLimit }, addressParam);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;
        const { result, output } = await contract.query.userOrders(address, { gasLimit }, addressParam);
        if (result.isOk && output !== null) {
            return Promise.resolve((output.toJSON() as unknown as OkWrapper<Order[]>).ok);
        }
        return Promise.reject(result.asErr);
    }

    async makeOrder(pair: Pair, orderType: OrderType, amountOffered: number, amoutRequested: number, callback: onFinalize): Promise<void> {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        const { gasRequired } = await contract.query.makeOrder(sender, { gasLimit: initialGasLimit }, ...pair, amountOffered, amoutRequested, orderType);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.makeOrder({ gasLimit }, ...pair, amountOffered, amoutRequested, orderType).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async cancelOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        const { gasRequired } = await contract.query.cancelOrder(sender, { gasLimit: initialGasLimit }, counterId);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.cancelOrder({ gasLimit }, counterId).signAndSend(sender, { signer: senderSigner }, transactionCallback);
    }

    async takeOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
        const contract = await this.contract();
        const initialGasLimit = this.initialGasLimit(contract);
        const [sender, senderSigner] = await this.accountSigner();
        const transactionCallback = this.transactionCallback(callback);

        const { gasRequired } = await contract.query.takeOrder(sender, { gasLimit: initialGasLimit }, counterId);
        const gasLimit = contract.registry.createType('WeightV2', gasRequired) as WeightV2;

        await contract.tx.takeOrder({ gasLimit }, counterId).signAndSend(sender, { signer: senderSigner }, transactionCallback);
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

    transactionCallback(method: onFinalize): (_: ISubmittableResult) => void {
        return (result: ISubmittableResult) => {
            if (result.status.isFinalized) {
                method();
            }
        }
    }
}

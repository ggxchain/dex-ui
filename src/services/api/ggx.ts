import {
	BLOCK_TIME_IN_MILLIS,
	GGX_WSS_URL,
	NATIVE_TOKEN_ID_RESERVED,
} from "@/consts";

import type Pair from "@/pair";
import type { Amount, CounterId, OrderType, Token, TokenId } from "@/types";
import { ApiPromise, WsProvider } from "@polkadot/api";
import type { Signer } from "@polkadot/api/types";
import type { ISubmittableResult } from "@polkadot/types/types";
import { decodeAddress } from "@polkadot/util-crypto";
import GGXWallet from "../ggx";

import { BN_ZERO, hexToString } from "@polkadot/util";

import type Order from "@/order";
import type { ApiInterface, onFinalize } from "../api";

export default class GGxNetwork implements ApiInterface {
	api: ApiPromise | undefined;

	async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
		const api = await this.apiPromise();

		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.depositBalance(api, amount, callback);
		}

		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await api.tx.dex
			.deposit(tokenId, amount)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async depositBalance(
		api: ApiPromise,
		amount: Amount,
		callback: onFinalize,
	): Promise<void> {
		const [sender, senderSigner] = await this.accountSigner();

		await api.tx.dex
			.depositNative(amount)
			.signAndSend(
				sender,
				{ signer: senderSigner },
				this.transactionCallback(callback),
			);
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

	async userBalance(address: string): Promise<Amount> {
		const api = await this.apiPromise();
		const addressParam = this.createAddress(address);

		const result = await api.query.system.account(addressParam);
		if (result !== undefined) {
			return Promise.resolve(result.data.free.toBn());
		}
		return Promise.resolve(BN_ZERO);
	}

	async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
		const api = await this.apiPromise();

		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.withdrawBalance(api, amount, callback);
		}

		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await api.tx.dex
			.withdraw(tokenId, amount)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async withdrawBalance(api: ApiPromise, amount: Amount, callback: onFinalize) {
		const [sender, senderSigner] = await this.accountSigner();

		await api.tx.dex
			.withdrawNative(amount)
			.signAndSend(
				sender,
				{ signer: senderSigner },
				this.transactionCallback(callback),
			);
	}

	async tokens(): Promise<TokenId[]> {
		const api = await this.apiPromise();
		const output = await api.query.dex.tokenInfoes();
		if (output !== undefined) {
			return output.map((tokenId) => tokenId.toNumber());
		}
		return Promise.resolve([]);
	}

	async tokenInfo(tokenId: TokenId): Promise<Token> {
		const api = await this.apiPromise();
		// Let's reserve chain prefix as GGx token id
		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.ggxTokenInfo();
		}

		const metadata = await api.query.assets.metadata(tokenId);

		return {
			id: tokenId,
			name: hexToString(metadata.name.toString()),
			symbol: hexToString(metadata.symbol.toString()),
			network: "GGx",
			decimals: metadata.decimals.toNumber(),
		};
	}

	async ggxTokenInfo(): Promise<Token> {
		const api = await this.apiPromise();

		return {
			id: NATIVE_TOKEN_ID_RESERVED,
			name: api.registry.chainTokens[0],
			symbol: api.registry.chainTokens[0],
			network: "GGx",
			decimals: api.registry.chainDecimals[0],
		};
	}

	async ownersTokens(address: string): Promise<TokenId[]> {
		const api = await this.apiPromise();
		const output = await api.query.dex.userTokenInfoes.entries(address);
		if (output !== undefined) {
			// Dex has a bug for now, use storage key instead
			return output.map(([key, _tokenInfo]) => key.args[1].toNumber());
		}
		return Promise.resolve([]);
	}

	async onChainBalanceOf(tokenId: TokenId, address: string): Promise<Amount> {
		const api = await this.apiPromise();
		const addressParam = this.createAddress(address);

		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.userBalance(address);
		}

		const result = await api.query.assets.account(tokenId, addressParam);
		if (result?.isSome) {
			return Promise.resolve(result.unwrap().balance.toBn());
		}
		return Promise.resolve(BN_ZERO);
	}

	async pairOrders(pair: Pair): Promise<Order[]> {
		const api = await this.apiPromise();

		const blockNumberPromise = api.query.system.number();
		const orderListPromise = api.query.dex.pairOrders(pair);
		const [blockNumber, orderList] = await Promise.all([
			blockNumberPromise,
			orderListPromise,
		]);
		const ordersOpt = await Promise.all(
			orderList.map((number) => api.query.dex.orders(number)),
		);

		if (ordersOpt !== undefined) {
			return ordersOpt.reduce<Order[]>((acc, orderOpt) => {
				if (orderOpt.isNone) {
					return acc;
				}
				const order = orderOpt.unwrap();
				const expiration =
					Date.now() +
					(order.expirationBlock.toNumber() - blockNumber.toNumber()) *
						BLOCK_TIME_IN_MILLIS;
				acc.push({
					pubkey: order.address.toString(),
					pair: [order.pair[0].toNumber(), order.pair[1].toNumber()],
					counter: order.counter.toNumber(),
					expiration,
					orderType: order.orderType.toString() as OrderType,
					amountOffered: order.amountOffered.toBn(),
					amoutRequested: order.amoutRequested.toBn(),
				});
				return acc;
			}, []);
		}
		return Promise.reject([]);
	}

	async userOrders(address: string): Promise<Order[]> {
		const api = await this.apiPromise();

		const blockNumberPromise = api.query.system.number();
		const orderListPromise = await api.query.dex.userOrders.entries(address);
		const [blockNumber, orderList] = await Promise.all([
			blockNumberPromise,
			orderListPromise,
		]);
		const ordersOpt = await Promise.all(
			orderList.map(([storageKey]) => api.query.dex.orders(storageKey.args[1])),
		);

		if (ordersOpt !== undefined) {
			return ordersOpt.reduce<Order[]>((acc, orderOpt) => {
				if (orderOpt.isNone) {
					return acc;
				}
				const order = orderOpt.unwrap();
				const expiration =
					Date.now() +
					(order.expirationBlock.toNumber() - blockNumber.toNumber()) *
						BLOCK_TIME_IN_MILLIS;
				acc.push({
					pubkey: order.address.toString(),
					pair: [order.pair[0].toNumber(), order.pair[1].toNumber()],
					counter: order.counter.toNumber(),
					expiration,
					orderType: order.orderType.toString() as OrderType,
					amountOffered: order.amountOffered.toBn(),
					amoutRequested: order.amoutRequested.toBn(),
				});
				return acc;
			}, []);
		}
		return Promise.reject([]);
	}

	async makeOrder(
		pair: Pair,
		orderType: OrderType,
		amountOffered: Amount,
		amoutRequested: Amount,
		expirationInMillis: number,
		callback: onFinalize,
	): Promise<void> {
		const api = await this.apiPromise();
		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);
		const curentBlock = await api.query.system.number();
		const expirationBlock = curentBlock.addn(
			Math.ceil(expirationInMillis / BLOCK_TIME_IN_MILLIS),
		);

		await api.tx.dex
			.makeOrder(
				...pair,
				amountOffered,
				amoutRequested,
				orderType,
				expirationBlock,
			)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async cancelOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
		const api = await this.apiPromise();
		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await api.tx.dex
			.cancelOrder(counterId)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async takeOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
		const api = await this.apiPromise();
		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await api.tx.dex
			.takeOrder(counterId)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async apiPromise() {
		if (this.api === undefined) {
			const wsProvider = new WsProvider(GGX_WSS_URL);
			this.api = await ApiPromise.create({ provider: wsProvider });
		}

		return this.api;
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
						const { method } = result.dispatchError.registry.findMetaError(
							result.dispatchError.asModule,
						);

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
		};
	}
}

import { BLOCK_TIME_IN_MILLIS, NATIVE_TOKEN_ID_RESERVED } from "@/settings";

import type Pair from "@/pair";
import type { Amount, CounterId, OrderType, Token, TokenId } from "@/types";
import type { ApiPromise } from "@polkadot/api";
import type { Signer } from "@polkadot/api/types";
import type { ISubmittableResult } from "@polkadot/types/types";
import { decodeAddress } from "@polkadot/util-crypto";
import GGXWallet from "../ggx";

import { BN_ZERO, hexToString } from "@polkadot/util";

import type Order from "@/order";
import type { ApiInterface, onFinalize } from "../api";

export default class GGxNetwork implements ApiInterface {
	private api: ApiPromise;

	constructor(api: ApiPromise) {
		this.api = api;
	}

	async deposit(tokenId: TokenId, amount: Amount, callback: onFinalize) {
		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.depositBalance(amount, callback);
		}

		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await this.api.tx.dex
			.deposit(tokenId, amount)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async depositBalance(amount: Amount, callback: onFinalize): Promise<void> {
		const [sender, senderSigner] = await this.accountSigner();

		await this.api.tx.dex
			.depositNative(amount)
			.signAndSend(
				sender,
				{ signer: senderSigner },
				this.transactionCallback(callback),
			);
	}

	async balanceOf(tokenId: TokenId, address: string): Promise<Amount> {
		const addressParam = this.createAddress(address);

		const result = await this.api.query.dex.userTokenInfoes(
			addressParam,
			tokenId,
		);
		if (result !== undefined) {
			return Promise.resolve(result.amount.toBn());
		}
		return Promise.resolve(BN_ZERO);
	}

	async userBalance(address: string): Promise<Amount> {
		const addressParam = this.createAddress(address);

		const result = await this.api.query.system.account(addressParam);
		if (result !== undefined) {
			return Promise.resolve(result.data.free.toBn());
		}
		return Promise.resolve(BN_ZERO);
	}

	async withdraw(tokenId: TokenId, amount: Amount, callback: onFinalize) {
		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.withdrawBalance(amount, callback);
		}

		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await this.api.tx.dex
			.withdraw(tokenId, amount)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async withdrawBalance(amount: Amount, callback: onFinalize) {
		const [sender, senderSigner] = await this.accountSigner();

		await this.api.tx.dex
			.withdrawNative(amount)
			.signAndSend(
				sender,
				{ signer: senderSigner },
				this.transactionCallback(callback),
			);
	}

	async tokens(): Promise<TokenId[]> {
		try {
			if (this.api === undefined) {
				return Promise.resolve([]);
			}
			//@ts-ignore
			const output = await this.api.query.dex.get.tokenInfoes();
			if (output !== undefined) {
				return output.map((tokenId: TokenId) => tokenId);
			}
			return Promise.resolve([]);
		} catch {
			return Promise.resolve([]);
		}
	}

	async tokenInfo(tokenId: TokenId): Promise<Token> {
		// Let's reserve chain prefix as GGx token id
		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.ggxTokenInfo();
		}

		const metadata = await this.api.query.assets.metadata(tokenId);

		return {
			id: tokenId,
			name: hexToString(metadata.name.toString()),
			symbol: hexToString(metadata.symbol.toString()),
			network: "GGx",
			decimals: metadata.decimals.toNumber(),
		};
	}

	ggxTokenInfo(): Token {
		return {
			id: NATIVE_TOKEN_ID_RESERVED,
			name: this.api.registry.chainTokens[0],
			symbol: this.api.registry.chainTokens[0],
			network: "GGx",
			decimals: this.api.registry.chainDecimals[0],
		};
	}

	async ownersTokens(address: string): Promise<TokenId[]> {
		const output = await this.api.query.dex.userTokenInfoes.entries(address);
		if (output !== undefined) {
			// Dex has a bug for now, use storage key instead
			return output.map(([key, _tokenInfo]) => key.args[1].toNumber());
		}
		return Promise.resolve([]);
	}

	async onChainBalanceOf(tokenId: TokenId, address: string): Promise<Amount> {
		const addressParam = this.createAddress(address);

		if (tokenId === NATIVE_TOKEN_ID_RESERVED) {
			return this.userBalance(address);
		}

		const result = await this.api.query.assets.account(tokenId, addressParam);
		if (result?.isSome) {
			return Promise.resolve(result.unwrap().balance.toBn());
		}
		return Promise.resolve(BN_ZERO);
	}

	async pairOrders(pair: Pair): Promise<Order[]> {
		const blockNumberPromise = this.api.query.system.number();
		const orderListPromise = this.api.query.dex.pairOrders(pair);
		const [blockNumber, orderList] = await Promise.all([
			blockNumberPromise,
			orderListPromise,
		]);
		const ordersOpt = await Promise.all(
			orderList.map((number) => this.api.query.dex.orders(number)),
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
		const blockNumberPromise = this.api.query.system.number();
		const orderListPromise =
			await this.api.query.dex.userOrders.entries(address);
		const [blockNumber, orderList] = await Promise.all([
			blockNumberPromise,
			orderListPromise,
		]);
		const ordersOpt = await Promise.all(
			orderList.map(([storageKey]) =>
				this.api.query.dex.orders(storageKey.args[1]),
			),
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
		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);
		const curentBlock = await this.api.query.system.number();
		const expirationBlock = curentBlock.addn(
			Math.ceil(expirationInMillis / BLOCK_TIME_IN_MILLIS),
		);

		await this.api.tx.dex
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
		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await this.api.tx.dex
			.cancelOrder(counterId)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
	}

	async takeOrder(counterId: CounterId, callback: onFinalize): Promise<void> {
		const [sender, senderSigner] = await this.accountSigner();
		const transactionCallback = this.transactionCallback(callback);

		await this.api.tx.dex
			.takeOrder(counterId)
			.signAndSend(sender, { signer: senderSigner }, transactionCallback);
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

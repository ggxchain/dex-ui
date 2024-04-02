import type { PubKey } from "@/types";

import type { Signer } from "@polkadot/api/types";

export type Account = {
	address: PubKey;
	name?: string;
};

export default class GGXWallet {
	accounts: Account[] = [];
	selectedAccount: Account | undefined = undefined;

	constructor() {
		if (typeof window === "undefined") {
			return;
		}

		const selectedAccount = window.localStorage.getItem(
			"ggx-wallet-selected-account",
		);
		const accounts = window.localStorage.getItem("ggx-wallet-accounts");
		if (selectedAccount) {
			this.selectedAccount = JSON.parse(selectedAccount);
			this.accounts = accounts ? JSON.parse(accounts) : [];
		}
	}

	async getAccounts(): Promise<Account[]> {
		const { web3Accounts } = await import("@polkadot/extension-dapp");

		await this.inject();
		this.accounts = await web3Accounts({
			accountType: ["sr25519", "ed25519"],
		}).then((accounts) =>
			accounts.map((info) => {
				return {
					address: info.address,
					name: info.meta.name,
				};
			}),
		);

		window.localStorage.setItem(
			"ggx-wallet-accounts",
			JSON.stringify(this.accounts),
		);
		if (this.accounts.length > 0 && !this.selectedAccount) {
			this.selectedAccount = this.accounts[0];
			window.localStorage.setItem(
				"ggx-wallet-selected-account",
				JSON.stringify(this.accounts[0]),
			);
		}

		return this.accounts;
	}

	async selectAccount(account: Account): Promise<void> {
		if (!this.accounts.find((a) => a.address === account.address)) {
			throw new Error("Account not found");
		}
		this.selectedAccount = account;
		window.localStorage.setItem(
			"ggx-wallet-selected-account",
			JSON.stringify(account),
		);
	}

	async inject(): Promise<void> {
		const { web3Enable } = await import("@polkadot/extension-dapp");
		await web3Enable("RfQ by GGx");
	}

	async signerFor(address: PubKey): Promise<Signer> {
		const { web3FromAddress } = await import("@polkadot/extension-dapp");
		await this.inject();
		return (await web3FromAddress(address)).signer;
	}

	pubkey(): Account | undefined {
		return this.selectedAccount;
	}
}

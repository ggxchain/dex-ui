"use client";

import { Button } from "@/components/common/button";
import { SelectDark } from "@/components/common/select";
import { useOwnedTokens } from "@/components/hooks/useOwnedTokens";
import GgxContext from "@/components/providers/ggx";
import { useParachain } from "@/parachain_provider";
import Contract, { errorHandler } from "@/services/api";
import GGxNetwork from "@/services/api/ggx";
import GgxNetworkMock from "@/services/api/mock";
import CexService from "@/services/cex";
import GGXWallet, { type Account } from "@/services/ggx";
import type { TokenId } from "@/types";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface PageProps {
	params: { slug: string; isMocked: boolean };
	searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ConnectWallet({ isMocked }: { isMocked: boolean }) {
	const [ggxAccounts, setGGXAccounts] = useState<Account[]>([]);
	const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
		undefined,
	);

	// Wallet
	const { ggx, setGgx } = useContext(GgxContext);

	const { api } = useParachain();
	const ggxNetwork = isMocked ? new GgxNetworkMock() : new GGxNetwork(api!);
	const contract = new Contract(ggxNetwork);

	const [, , refreshDexBalances] = useOwnedTokens(
		Contract.prototype.allTokensOfOwner,
		Contract.prototype.balanceOf,
		contract,
	);
	const [, , refreshChainBalances] = useOwnedTokens(
		Contract.prototype.allTokens,
		Contract.prototype.onChainBalanceOf,
		contract,
	);

	const refreshBalances = () => {
		refreshDexBalances();
		refreshChainBalances();
	};

	useEffect(() => {
		if (selectedAccount) {
			const wallet = new GGXWallet();
			setGgx(wallet);
		}
	}, [setGgx, selectedAccount]);
	// biome-ignore lint: do not include` contract` as a dependency of this effect, as it causes an inf loop
	useEffect(() => {
		contract
			.allTokensWithInfo()
			.then((tokens) => {
				const cex = new CexService();
				cex
					.tokenPrices(tokens.map((token) => token.symbol))
					.then((prices) => {
						const map = new Map<TokenId, number>();
						prices.forEach((value, key) => {
							const token = tokens.find((token) => token.symbol === key);
							if (token !== undefined) {
								map.set(token.id, value);
							}
						});
					})
					.catch(errorHandler);
			})
			.then(() => {});

		connectWallet();
		refreshBalances();
		// do not add `contract` OR `refreshBalances` to dependencies here because they cause an infinite loop.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const connectWallet = async () => {
		if (ggx) {
			const accounts = await ggx.getAccounts().catch(errorHandler);
			if (accounts === undefined) {
				return;
			}
			setGGXAccounts(accounts);
			setSelectedAccount(ggx.pubkey());
		}
	};

	const walletIsNotInitialized = ggxAccounts.length === 0;
	const handleSelectChange = (e: Account) => {
		const wallet = new GGXWallet();
		if (e === null) {
			return;
		}
		try {
			wallet.selectAccount(e);
		} catch (err) {
			console.warn(err);
			toast.warn(`${err}`);
		}

		setSelectedAccount(e);
	};

	return (
		<>
			{walletIsNotInitialized ? (
				<Button onClick={connectWallet} className="w-full h-full">
					Connect the wallet
				</Button>
			) : (
				<div data-testid="userSelect" className="flex w-full h-full">
					<p className="h-full p-4 text-[14px] text-GGx-gray">Account</p>
					<SelectDark<Account>
						onChange={handleSelectChange}
						options={ggxAccounts}
						value={selectedAccount}
						className="w-full h-full"
						childFormatter={(account) => {
							return (
								<div className="w-full p-3 h-full text-GGx-light rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
									<span className="text-base">
										{account.name
											? account.name
											: `Account ${ggxAccounts.findIndex(
													(acc) => acc.address === account.address,
												)}`}
									</span>
								</div>
							);
						}}
					/>
				</div>
			)}
		</>
	);
}

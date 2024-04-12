"use client";

import { Button } from "@/components/common/button";
import { InputWithPriceInfo } from "@/components/common/input";
import LoadingButton from "@/components/common/loadButton";
import Modal from "@/components/common/modal";
import Ruler from "@/components/common/ruler";
import SelectLight, { SelectDark } from "@/components/common/select";
import TokenList from "@/components/tokenList";
import Contract, { errorHandler } from "@/services/api";
import CexService from "@/services/cex";
import GGXWallet, { type Account } from "@/services/ggx";
import TokenDecimals from "@/tokenDecimalsConverter";
import type { Amount, Token, TokenId } from "@/types";
import { BN, BN_ZERO } from "@polkadot/util";
import { type ChangeEvent, Suspense, useEffect, useRef, useState } from "react";
import Loading from "./loading";

type InteractType = "Deposit" | "Withdraw";

type FetchUserTokenId = () => Promise<TokenId[]>;
type FetchBalance = (tokenId: TokenId) => Promise<Amount>;

const useOwnedTokens = (
	fetchUserTokens: FetchUserTokenId,
	fetchUserBalance: FetchBalance,
	contract: Contract,
) => {
	const [tokens, setTokens] = useState<TokenId[]>([]);
	const [balances, setBalances] = useState<Map<TokenId, Amount>>(
		new Map<TokenId, Amount>(),
	);

	const refreshBalances = async () => {
		const tokens = await fetchUserTokens.call(contract).catch(errorHandler);
		if (tokens === undefined) {
			return;
		}
		setTokens(tokens);
		setBalances(new Map<TokenId, Amount>());
		const balancesPromises = tokens.map((token) => {
			return fetchUserBalance.call(contract, token).catch(errorHandler);
		});
		const balancesResults = await Promise.all(balancesPromises);
		const balances = new Map<TokenId, Amount>();
		balancesResults.forEach((balance, index) => {
			balances.set(tokens[index], balance ?? BN_ZERO);
		});
		setBalances(balances);
	};

	return [tokens, balances, refreshBalances] as const;
};

export default function Wallet() {
  const [isInitialized, setIsInitialized] = useState(false);
	const [contract, setContract] = useState<Contract>(new Contract());

	const [dexOwnedTokens, dexBalances, refreshDexBalances] = useOwnedTokens(
		Contract.prototype.allTokensOfOwner,
		Contract.prototype.balanceOf,
		contract,
	);
	const [_, chainBalances, refreshChainBalances] = useOwnedTokens(
		Contract.prototype.allTokens,
		Contract.prototype.onChainBalanceOf,
		contract,
	);
	const [tokenMap, setTokenMap] = useState<Map<TokenId, Token>>(
		new Map<TokenId, Token>(),
	);
	const [tokens, setTokens] = useState<Token[]>([]);
	const [search, setSearch] = useState<string>("");
	const [tokenPrices, setTokenPrices] = useState<Map<TokenId, number>>(
		new Map<TokenId, number>(),
	);
	const [ggxAccounts, setGGXAccounts] = useState<Account[]>([]);
	const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
		undefined,
	);
	const [selectedToken, setSelectedToken] = useState<Token | undefined>(
		undefined,
	);

	// Modal related states
	const [modal, setModal] = useState<boolean>(false);
	const [modalAmount, setModalAmount] = useState<number>(0);
	const modalTitle = useRef<InteractType>("Deposit");
	const [modalLoading, setModalLoading] = useState<boolean>(false);

	const refreshBalances = async () => {
		refreshDexBalances();
		refreshChainBalances();
	};

	useEffect(() => {
		setTokens([]);
		contract.allTokensWithInfo().then((tokens) => {
			setTokens(tokens);
			setTokenMap(new Map(tokens.map((token) => [token.id, token])));
			if (tokens.length > 0) {
				setSelectedToken(tokens[0]);
			}
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
					setTokenPrices(map);
				})
				.catch(errorHandler);
		}).then(()=> {
			setIsInitialized(true)
    });

		connectWallet();
	}, [contract]);

	useEffect(() => {
		refreshBalances();
	}, [selectedAccount]);

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const filter = (token: Token) => {
		return (
			token.name.toLowerCase().includes(search.toLowerCase()) ||
			token.symbol.toLowerCase().includes(search.toLowerCase()) ||
			token.network.toLowerCase().includes(search.toLowerCase())
		);
	};

	const filteredTokens = tokens.filter((token) => filter(token));
	const isTokenNotSelected = selectedToken === undefined;

	const totalOnChain = tokens.reduce<number>((total, token) => {
		const balance = new TokenDecimals(token.decimals).BNToFloat(
			chainBalances.get(token.id) ?? BN_ZERO,
		);
		const price = tokenPrices.get(token.id) ?? 0;
		return total + balance * price;
	}, 0);

	const total = dexOwnedTokens.reduce<number>((total, tokenId) => {
		const token = tokenMap.get(tokenId);
		if (token === undefined) {
			return total;
		}

		const balance = new TokenDecimals(token.decimals).BNToFloat(
			dexBalances.get(tokenId) ?? BN_ZERO,
		);
		const price = tokenPrices.get(tokenId) ?? 0;

		return total + balance * price;
	}, totalOnChain);

	const omModalSubmit = () => {
		if (isTokenNotSelected || modalAmount <= 0) {
			return;
		}

		const method =
			modalTitle.current === "Deposit" ? contract.deposit : contract.withdraw;
		setModalLoading(true);

		const amount = new TokenDecimals(selectedToken.decimals).floatToBN(
			modalAmount,
		);

		method
			.call(contract, selectedToken.id, amount, () => {
				refreshBalances();
				setModal(false);
			})
			.catch((error) => {
				setModal(false);
				errorHandler(error);
			});
	};

	const onModalOpen = (type: InteractType) => {
		if (isTokenNotSelected) {
			return;
		}
		modalTitle.current = type;
		setModalLoading(false);
		setModalAmount(0);
		setModal(true);
	};

	const connectWallet = async () => {
		const ggx = new GGXWallet();
		const accounts = await ggx.getAccounts().catch(errorHandler);
		if (accounts === undefined) {
			return;
		}
		setGGXAccounts(accounts);
		setSelectedAccount(ggx.pubkey());
	};

	const walletIsNotInitialized = ggxAccounts.length === 0;
	const handleSelectChange = (e: Account) => {
		const wallet = new GGXWallet();
		if (e === null) {
			return;
		}
		wallet.selectAccount(e);
		setSelectedAccount(e);
	};

	const displayTokens = filteredTokens.map((token) => {
		const balance = dexBalances.get(token.id);
		const price = tokenPrices.get(token.id);
		const chainBalance = chainBalances.get(token.id);

		return {
			...token,
			balance: balance ?? BN_ZERO,
			estimatedPrice: price ?? 0,
			onChainBalance: chainBalance?.eq(BN_ZERO) ? undefined : chainBalance,
			url: `/svg/${token.symbol.toLowerCase()}.svg`,
		};
	});

	const onTokenSelect = (token: Token) => {
		setSelectedToken(token);
	};

	const onContractTypeChange = () => {
		Contract.setMocked(!Contract.isMocked());
		setContract(new Contract());
	};

	const selectedTokenPrice = selectedToken
		? tokenPrices.get(selectedToken.id) ?? 0
		: 0;
	const amountPrice = modalAmount * selectedTokenPrice;
	const selectedTokenBalance = selectedToken
		? new BN(dexBalances.get(selectedToken.id) ?? 0)
		: BN_ZERO;

	return (
		<div className="w-full h-full flex flex-col">
			<div className="flex w-full justify-between items-center">
				<h1 className="text-xl md:text-3xl break-words w-[40%] text-GGx-yellow font-telegraf">
					${total.toFixed(2)}
				</h1>
				<div className="flex md:flex-row flex-col gap-5">
					<Button
						data-testid="deposit"
						onClick={() => onModalOpen("Deposit")}
						disabled={walletIsNotInitialized || isTokenNotSelected}
						className="w-1/4"
					>
						Deposit {selectedToken?.name ?? ""}
					</Button>
					<Button
						data-testid="withdraw"
						onClick={() => onModalOpen("Withdraw")}
						disabled={
							walletIsNotInitialized ||
							isTokenNotSelected ||
							selectedTokenBalance.lte(BN_ZERO)
						}
						className="w-1/4"
					>
						Withdraw {selectedToken?.name ?? ""}
					</Button>
				</div>
			</div>

			<div className="mt-5">
				<Ruler />
			</div>

			<div className="flex w-full justify-end mt-5">
				<label className="inline-flex relative items-center cursor-pointer ">
					<input
						type="checkbox"
						checked={!Contract.isMocked()}
						onChange={onContractTypeChange}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bg-gr-2"></div>
					<span className="ms-3 text-sm font-medium text-GGx-light dark:text-gray-300">
						Contract
					</span>
				</label>
			</div>

			<div className="flex justify-between md:mt-10 mt-1 items-center">
				<input
					type="text"
					placeholder="Search..."
					onChange={onSearch}
					className="md:w-[30%] w-[45%] px-[15px] py-[16px] rounded-md bg-GGx-black2 text-GGx-light"
				/>
				<div className="w-[45%] md:w-[30%] md:max-w-96 max-w-48">
					{walletIsNotInitialized ? (
						<Button onClick={connectWallet} className="w-full h-full">
							Connect the wallet
						</Button>
					) : (
						<div
							data-testid="userSelect"
							className="flex w-full h-full border-GGx-black2 border-2 rounded-[4px]"
						>
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
				</div>
			</div>
      <Suspense fallback={<Loading />}>
			<TokenList
				onChain={true}
				className={`${
					walletIsNotInitialized ? "opacity-50" : "opacity-100"
				} w-full`}
				tokens={displayTokens}
				onClick={onTokenSelect}
        isInitialized={isInitialized}
			/>
      </Suspense>

			<Modal
				modalTitle={`${modalTitle.current} ${selectedToken?.name ?? ""}`}
				isOpen={modal}
				onClose={() => setModal(false)}
			>
				<div className="flex flex-col w-full">
					<InputWithPriceInfo
						name="Amount"
						className="mt-1 rounded-[4px] border p-3 basis-1/4 bg-transparent text-GGx-gray border-GGx-gray w-full"
						value={modalAmount.toString()}
						onChange={(e) => setModalAmount(Number(e.target.value))}
						symbol={selectedToken?.name ?? ""}
						price={amountPrice}
					/>
					<div className="flex w-full justify-center">
						<LoadingButton
							loading={modalLoading}
							disabled={modalAmount === 0}
							className="disabled:opacity-90 text-lg md:w-1/2 mt-5 w-3/4 bg-GGx-dark border-GGx-dark"
							onClick={omModalSubmit}
						>
							<p>{modalTitle.current}</p>
						</LoadingButton>
					</div>
				</div>
			</Modal>
		</div>
	);
}

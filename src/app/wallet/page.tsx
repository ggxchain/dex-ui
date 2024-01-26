"use client"

import CexService from "@/services/cex";
import Contract, { errorHandler } from "@/services/contract";
import GGXWallet, { Account } from "@/services/ggx";
import { Token, Amount, TokenId } from "@/types";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Select from "@/components/select";
import TokenList from "@/components/tokenList";
import Modal from "@/components/modal";
import LoadingButton from "@/components/loadButton";
import { InputWithPriceInfo } from "@/components/input";
import { BN, BN_ONE, BN_ZERO } from "@polkadot/util";
import { displayNumberWithPrecision } from "@/utils";

type InteractType = "Deposit" | "Withdraw";

type FetchUserTokenId = () => Promise<TokenId[]>;
type FetchBalance = (tokenId: TokenId) => Promise<Amount>;

const useOwnedTokens = (fetchUserTokens: FetchUserTokenId, fetchUserBalance: FetchBalance) => {
    const [tokens, setTokens] = useState<TokenId[]>([]);
    const [balances, setBalances] = useState<Map<TokenId, Amount>>(new Map<TokenId, Amount>());


    const refreshBalances = async () => {
        const contract = new Contract();
        const tokens = await fetchUserTokens.call(contract).catch(errorHandler);
        if (tokens === undefined) {
            return;
        }
        setTokens(tokens);
        setBalances(new Map<TokenId, Amount>());
        const balancesPromises = tokens.map((token) => {
            return fetchUserBalance.call(contract, token).catch(errorHandler)
        });
        const balancesResults = await Promise.all(balancesPromises);
        const balances = new Map<TokenId, Amount>();
        balancesResults.forEach((balance, index) => {
            balances.set(tokens[index], balance ?? BN_ZERO);
        });
        setBalances(balances);
    }

    return [tokens, balances, refreshBalances] as const;
}

export default function Wallet() {
    const [dexOwnedTokens, dexBalances, refreshDexBalances] = useOwnedTokens(Contract.prototype.allTokensOfOwner, Contract.prototype.balanceOf);
    const [_, chainBalances, refreshChainBalances] = useOwnedTokens(Contract.prototype.allTokens, Contract.prototype.onChainBalanceOf);
    const [tokens, setTokens] = useState<Token[]>([]);
    const [search, setSearch] = useState<string>("");
    const [tokenPrices, setTokenPrices] = useState<Map<TokenId, number>>(new Map<TokenId, number>());
    const [ggxAccounts, setGGXAccounts] = useState<Account[]>([]);
    const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(undefined);
    const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);

    // Modal related states
    const [modal, setModal] = useState<boolean>(false);
    const [modalAmount, setModalAmount] = useState<Amount>(BN_ZERO);
    const modalTitle = useRef<InteractType>("Deposit");
    const [modalLoading, setModalLoading] = useState<boolean>(false);

    const refreshBalances = async () => {
        refreshDexBalances();
        refreshChainBalances();
    }

    useEffect(() => {
        const contract = new Contract();
        contract.allTokensWithInfo().then((tokens) => {
            setTokens(tokens);
            if (tokens.length > 0) {
                setSelectedToken(tokens[0]);
            }
            const cex = new CexService();
            cex.tokenPrices(tokens.map((token) => token.symbol)).then((prices) => {
                const map = new Map<TokenId, number>();
                prices.forEach((value, key) => {
                    const token = tokens.find((token) => token.symbol === key);
                    if (token !== undefined) {
                        map.set(token.id, value);
                    }
                });
                setTokenPrices(map);
            }).catch(errorHandler);
        });

        const ggx = new GGXWallet();
        ggx.getAccounts().then((accounts) => {
            setGGXAccounts(accounts);
            setSelectedAccount(ggx.pubkey());
        });
    }, []);

    useEffect(() => {
        refreshBalances()
    }, [selectedAccount])

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filter = (token: Token) => {
        return token.name.toLowerCase().includes(search.toLowerCase()) || token.symbol.toLowerCase().includes(search.toLowerCase())
            || token.network.toLowerCase().includes(search.toLowerCase());
    }

    const filteredTokens = tokens.filter((token) => filter(token));
    const isTokenNotSelected = selectedToken === undefined;

    const total = dexOwnedTokens.reduce<BN>((total, tokenId) => {
        const balance = dexBalances.get(tokenId);
        const price = tokenPrices.get(tokenId);
        if (balance === undefined || price === undefined) {
            return total;
        }
        return total.add(balance.mul(new BN(price)));
    }, BN_ZERO);

    const omModalSubmit = () => {
        if (isTokenNotSelected || modalAmount.eq(BN_ZERO)) {
            return;
        }
        const contract = new Contract();

        let method = modalTitle.current === "Deposit" ? contract.deposit : contract.withdraw;
        setModalLoading(true);

        method.call(contract, selectedToken.id, modalAmount, () => {
            refreshBalances();
            setModal(false);
        }).catch((error) => {
            console.log(error);
            setModal(false);
            errorHandler(error);
        })
    }

    const onModalOpen = (type: InteractType) => {
        if (isTokenNotSelected) {
            return;
        }
        modalTitle.current = type;
        setModalLoading(false);
        setModalAmount(BN_ZERO);
        setModal(true);
    }

    const connectWallet = () => {
        const ggx = new GGXWallet();
        ggx.getAccounts().then((accounts) => {
            setGGXAccounts(accounts);
            setSelectedAccount(ggx.pubkey());
        });
    }

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

        return {
            ...token,
            balance: balance ?? BN_ZERO,
            estimatedPrice: price ?? 0,
            url: `/svg/${token.symbol.toLowerCase()}.svg`
        }
    })

    const onTokenSelect = (token: Token) => {
        setSelectedToken(token);
    }

    const amountPrice = modalAmount.mul((selectedToken ? new BN(tokenPrices.get(selectedToken.id) ?? 0) : BN_ZERO));
    const selectedTokenBalance = selectedToken ? new BN(dexBalances.get(selectedToken.id) ?? 0) : BN_ZERO;

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl md:text-3xl">${total.toString()}</h1>
                <div className="flex md:flex-row flex-col">
                    <button onClick={() => onModalOpen("Deposit")} disabled={walletIsNotInitialized || isTokenNotSelected} className="disabled:opacity-50 md:text-base text-sm p-2 md:p-4 m-1 md:w-64 w-32 bg-bg-gr-2/80 rounded-2xl grow-on-hover glow-on-hover">Deposit {selectedToken?.name ?? ""}</button>
                    <button onClick={() => onModalOpen("Withdraw")} disabled={walletIsNotInitialized || isTokenNotSelected || selectedTokenBalance.lte(BN_ZERO)} className="disabled:opacity-50 md:text-base text-sm p-2 md:p-4 m-1 md:w-64 w-32 bg-bg-gr-2/80 rounded-2xl grow-on-hover glow-on-hover">Withdraw {selectedToken?.name ?? ""}</button>
                </div>
            </div>

            <div className="flex justify-between md:mt-10 mt-1 items-center">
                <input type="text" placeholder="Search..." onChange={onSearch} className="md:w-[30%] w-[45%] p-3 rounded-xl bg-bg-gr-2/20 text-slate-100" />
                <div className="w-[45%] md:w-[30%] md:max-w-96 max-w-48">
                    {
                        walletIsNotInitialized
                            ? <button onClick={connectWallet} className="text-center text-slate-100 secondary-gradient rounded-2xl text-wrap w-full h-full md:text-base text-sm p-3 m-1 grow-on-hover glow-on-hover">Connect the wallet</button>
                            : <Select<Account> name="Account" onChange={handleSelectChange} options={ggxAccounts} value={selectedAccount} className="w-full h-full" wrapperClassName="pt-1"
                                childFormatter={(account) => {
                                    return (<div className="w-full p-3 m-0 h-full text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                                        <span className="text-base">{account.name ? account.name : `Account ${ggxAccounts.findIndex((acc) => acc.address == account.address)}`}</span>
                                    </div>)
                                }}
                            />
                    }
                </div>
            </div>
            <TokenList className={`${walletIsNotInitialized ? "opacity-50" : "opacity-100"} w-full`} tokens={displayTokens} onClick={onTokenSelect} />

            <Modal modalTitle={`${modalTitle.current} ${selectedToken?.name ?? ""}`} isOpen={modal} onClose={() => setModal(false)}>
                <div className="flex flex-col w-full px-5">
                    <InputWithPriceInfo
                        name="Amount"
                        className="mt-1 rounded-2xl border pl-5 p-3 basis-1/4 bg-transparent w-full"
                        value={modalAmount.toString()}
                        onChange={(e) => setModalAmount(new BN(e.target.value))}
                        symbol={selectedToken?.name ?? ""}
                        price={amountPrice.toNumber()}
                    />
                    <div className="flex w-full justify-center">
                        <LoadingButton loading={modalLoading} disabled={modalAmount.eq(BN_ZERO)} className="disabled:opacity-50 text-lg md:w-1/2 mt-5 w-3/4 p-3 grow-on-hover glow-on-hover border border-white rounded-xl" onClick={omModalSubmit}>
                            <p>{modalTitle.current}</p>
                        </LoadingButton>
                    </div>
                </div>
            </Modal>
        </div >
    )
}

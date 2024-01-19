"use client"

import Spinner from "@/components/spinner";
import CexService from "@/services/cex";
import Contract from "@/services/contract";
import GGXWallet, { Account } from "@/services/ggx";
import { Token, Amount } from "@/types";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Select from "@/components/select";
import TokenList from "@/components/tokenList";
import Modal from "@/components/modal";
import LoadingButton from "@/components/loadButton";

type InteractType = "Deposit" | "Withdraw";

export default function Wallet() {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [ownedTokens, setOwnedTokens] = useState<Token[]>([]);
    const [balances, setBalances] = useState<Map<string, Amount>>(new Map<string, Amount>());
    const [search, setSearch] = useState<string>("");
    const [tokenPrices, setTokenPrices] = useState<Map<string, Amount>>(new Map<string, Amount>());
    const [ggxAccounts, setGGXAccounts] = useState<Account[]>([]);
    const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(undefined);
    const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);

    // Modal related states
    const [modal, setModal] = useState<boolean>(false);
    const [modalAmount, setModalAmount] = useState<Amount>(0);
    const modalTitle = useRef<InteractType>("Deposit");
    const [modalLoading, setModalLoading] = useState<boolean>(false);

    const refreshBalances = async () => {
        const contract = new Contract();
        const tokens = await contract.allTokensOfOwner();
        setBalances(new Map<string, Amount>());
        setOwnedTokens(tokens);
        const balancesPromises = tokens.map((token) => {
            return contract.balanceOf(token.id);
        });
        const balancesResults = await Promise.all(balancesPromises);
        const balances = new Map<string, Amount>();
        balancesResults.forEach((balance, index) => {
            balances.set(JSON.stringify(tokens[index].id), balance);
        });
        setBalances(balances);
    }

    useEffect(() => {
        const contract = new Contract();
        contract.allTokens().then((tokens) => {
            setTokens(tokens);
            const cex = new CexService();
            cex.tokenPrices(tokens.map((token) => token.symbol)).then((prices) => {
                const map = new Map<string, Amount>();
                prices.forEach((value, key) => {
                    const token = tokens.find((token) => token.symbol === key);
                    if (token !== undefined) {
                        map.set(JSON.stringify(token.id), value);
                    }
                });
                setTokenPrices(map);
            });
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

    const total = ownedTokens.reduce<number>((total, token) => {
        const token_id_str = JSON.stringify(token.id);
        const balance = balances.get(token_id_str);
        const price = tokenPrices.get(token_id_str);
        if (balance === undefined || price === undefined) {
            return total;
        }
        return total + balance * price;
    }, 0);

    const omModalSubmit = () => {
        if (isTokenNotSelected || modalAmount === 0) {
            return;
        }
        const contract = new Contract();

        let method = modalTitle.current === "Deposit" ? contract.deposit : contract.withdraw;
        setModalLoading(true);

        method.call(contract, selectedToken.id, modalAmount, () => {
            refreshBalances();
            onModalClose();
        });
    }

    const onModalOpen = (type: InteractType) => {
        if (isTokenNotSelected) {
            return;
        }
        modalTitle.current = type;
        setModal(true);
    }

    const onModalClose = () => {
        setModalLoading(false);
        setModalAmount(0);
        setModal(false);
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
        const token_id_str = JSON.stringify(token.id);
        const balance = balances.get(token_id_str);
        const price = tokenPrices.get(token_id_str);

        return {
            ...token,
            balance: balance ?? 0,
            estimatedPrice: price ?? 0,
            url: `/svg/${token.symbol}.svg`
        }
    })

    const onTokenSelect = (token: Token) => {
        setSelectedToken(token);
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl md:text-3xl">${total.toFixed(2)}</h1>
                <div className="flex md:flex-row flex-col">
                    <button onClick={() => onModalOpen("Deposit")} disabled={walletIsNotInitialized || isTokenNotSelected} className="disabled:opacity-50 md:text-base text-sm p-2 md:p-4 m-1 md:w-64 w-32 bg-bg-gr-2/80 rounded-2xl grow-on-hover glow-on-hover">Deposit {selectedToken?.name ?? ""}</button>
                    <button onClick={() => onModalOpen("Withdraw")} disabled={walletIsNotInitialized || isTokenNotSelected} className="disabled:opacity-50 md:text-base text-sm p-2 md:p-4 m-1 md:w-64 w-32 bg-bg-gr-2/80 rounded-2xl grow-on-hover glow-on-hover">Withdraw {selectedToken?.name ?? ""}</button>
                </div>
            </div>

            <div className="flex justify-between md:mt-10 mt-1 items-center">
                <input type="text" placeholder="Search..." onChange={onSearch} className="md:w-[30%] w-[45%] h-10 pl-3 rounded-xl bg-bg-gr-2/20 text-slate-100" />
                <div className="w-[45%] md:w-[30%] flex justify-end">
                    {
                        walletIsNotInitialized
                            ? <button onClick={connectWallet} className="text-center text-slate-100 secondary-gradient rounded-2xl text-wrap md:max-w-64 max-w-48 w-full h-full md:text-base text-sm p-2 md:p-4 m-1 grow-on-hover glow-on-hover">Connect the wallet</button>
                            : <Select<Account> onChange={handleSelectChange} options={ggxAccounts} value={selectedAccount} className="m-1 w-full h-full md:max-w-64 max-w-48"
                                childFormatter={(account) => {
                                    return (<div className="w-full md:p-2 p-1 m-0 h-full text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                                        <span className="text-base">{account.name ? account.name : `Account ${ggxAccounts.findIndex((acc) => acc.address == account.address)}`}</span>
                                    </div>)
                                }}
                            />
                    }
                </div>
            </div>
            {
                filteredTokens.length > 0 &&
                <TokenList className={`${walletIsNotInitialized ? "opacity-50" : "opacity-100"} w-full`} tokens={displayTokens} onClick={onTokenSelect} />
            }
            {
                tokens.length === 0 &&
                <div className="flex justify-center">
                    <div className="w-12">
                        <Spinner />
                    </div>
                </div>
            }

            <Modal modalTitle={`${modalTitle.current} ${selectedToken?.name ?? ""}`} isOpen={modal} onClose={onModalClose}>
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="md:w-1/2 w-3/4">
                        <p>{modalTitle.current} amount</p>
                        <div className="w-full relative pt-1">
                            <input type="number" value={modalAmount.toString()} onChange={(e) => setModalAmount(+Number(e.target.value))} className="h-10 pl-3 rounded-xl w-full bg-bg-gr-2/50 text-slate-100" placeholder="0.0" />
                        </div>
                    </div>
                    <LoadingButton loading={modalLoading} disabled={modalAmount === 0} className="disabled:opacity-50 text-lg md:w-1/2 mt-5 w-3/4 p-3 grow-on-hover glow-on-hover border border-white rounded-xl" onClick={omModalSubmit}>
                        <p>{modalTitle.current}</p>
                    </LoadingButton>
                </div>
            </Modal>
        </div >
    )
}

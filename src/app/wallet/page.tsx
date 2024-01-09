"use client"

import Spinner from "@/components/spinner";
import CexService from "@/services/cex";
import Contract from "@/services/contract";
import GGXWallet, { Account } from "@/services/ggx";
import { Token, TokenId, Amount } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import Select from "@/components/select";
import TokenList from "@/components/tokenList";

export default function Wallet() {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [ownedTokens, setOwnedTokens] = useState<Token[]>([]);
    const [balances, setBalance] = useState<Map<TokenId, Amount>>(new Map<TokenId, Amount>());
    const [search, setSearch] = useState<string>("");
    const [tokenPrices, setTokenPrices] = useState<Map<TokenId, Amount>>(new Map<TokenId, Amount>());
    const [ggxAccounts, setGGXAccounts] = useState<Account[]>([]);
    const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(undefined);

    // A hack to force a re-render
    const [update, setUpdate] = useState<boolean>(false);

    const refreshBalances = () => {
        const contract = new Contract();
        contract.allTokensOfOwner().then((tokens) => {
            setOwnedTokens(tokens);
        });
    }

    useEffect(() => {
        const contract = new Contract();
        contract.allTokens().then((tokens) => {
            setTokens(tokens);
        });
        refreshBalances();

        const ggx = new GGXWallet();
        ggx.getAccounts().then((accounts) => {
            setGGXAccounts(accounts);
            setSelectedAccount(ggx.pubkey());
        });
    }, []);

    useEffect(() => {
        const contract = new Contract();
        setBalance(new Map<TokenId, Amount>());
        for (const token of ownedTokens) {
            contract.balanceOf(token.id).then((balance) => {
                setBalance((balances) => {
                    balances.set(token.id, balance);
                    return balances;
                })
                setUpdate(!update);
            })
        }

        const cex = new CexService();
        cex.tokenPrices(ownedTokens.map((token) => token.symbol)).then((prices) => {
            const map = new Map<TokenId, Amount>();
            prices.forEach((value, key) => {
                const token = ownedTokens.find((token) => token.symbol === key);
                if (token !== undefined) {
                    map.set(token.id, value);
                }
            });
            setTokenPrices(map);
        });
    }, [ownedTokens, selectedAccount]);

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filter = (token: Token) => {
        return token.name.toLowerCase().includes(search.toLowerCase()) || token.symbol.toLowerCase().includes(search.toLowerCase())
            || token.network.toLowerCase().includes(search.toLowerCase());
    }

    const filteredTokens = tokens.filter((token) => filter(token));

    const total = ownedTokens.reduce<number>((total, token) => {
        const balance = balances.get(token.id);
        const price = tokenPrices.get(token.id);
        if (balance === undefined || price === undefined) {
            return total;
        }
        return total + balance * price;
    }, 0);

    const onDeposit = () => {
        const contract = new Contract();
        for (const token of filteredTokens) {
            contract.deposit(token.id, 10).then(() => {
            })
        }

        refreshBalances();
    };

    const connectWallet = () => {
        const ggx = new GGXWallet();
        ggx.getAccounts().then((accounts) => {
            setGGXAccounts(accounts);
            setSelectedAccount(ggx.pubkey());
        });
    }

    const onWithdraw = () => {
        // TODO
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
        const balance = balances.get(token.id);
        const price = tokenPrices.get(token.id);

        return {
            ...token,
            balance: balance ?? 0,
            estimatedPrice: price ?? 0,
            url: `/svg/${token.symbol}.svg`
        }
    })

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl ">${total.toFixed(2)}</h1>
                <div className="flex">
                    <button onClick={onDeposit} disabled={ggxAccounts.length === 0} className="disabled:opacity-50 md:text-base text-sm p-2 md:p-4 m-1 md:w-32 w-24 bg-bg-gr-2/80 rounded-2xl grow-on-hover glow-on-hover">Deposit</button>
                    <button onClick={onWithdraw} disabled={walletIsNotInitialized} className="disabled:opacity-50 md:text-base text-sm p-2 md:p-4 m-1 md:w-32 w-24 bg-bg-gr-2/80 rounded-2xl grow-on-hover glow-on-hover">Withdraw</button>
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
                <TokenList className={`${walletIsNotInitialized ? "opacity-50" : "opacity-100"} w-full`} tokens={displayTokens} />
            }
            {
                tokens.length === 0 &&
                <div className="flex justify-center">
                    <div className="w-12">
                        <Spinner />
                    </div>
                </div>
            }
        </div >
    )
}

"use client"

import Spinner from "@/components/spinner";
import CexService from "@/services/cex";
import Contract from "@/services/contract";
import { Token, TokenId, Amount } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";


export default function Wallet() {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [ownedTokens, setOwnedTokens] = useState<Token[]>([]);
    const [balances, setBalance] = useState<Map<TokenId, Amount>>(new Map<TokenId, Amount>());
    const [search, setSearch] = useState<string>("");
    const [tokenPrices, setTokenPrices] = useState<Map<TokenId, Amount>>(new Map<TokenId, Amount>());

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
    }, []);

    useEffect(() => {
        const contract = new Contract();
        for (let token of ownedTokens) {
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
    }, [ownedTokens]);

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
        for (let token of filteredTokens) {
            contract.deposit(token.id, 10).then(() => {
            })
        }

        refreshBalances();
    };

    const onWithdraw = () => {
        // TODO
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl ">${total.toFixed(2)}</h1>
                <div className="flex">
                    <button onClick={onDeposit} className="md:text-base text-sm p-2 md:p-4 m-1 md:w-32 w-24 bg-bg-gr-2/80 rounded-2xl grow-on-hover">Deposit</button>
                    <button onClick={onWithdraw} className="md:text-base text-sm p-2 md:p-4 m-1 md:w-32 w-24 bg-bg-gr-2/80 rounded-2xl grow-on-hover">Withdraw</button>
                </div>
            </div>


            <div className="flex justify-end md:mt-10 mt-1">
                <input type="text" placeholder="Search..." onChange={onSearch} className="w-full md:w-[40%] h-10 pl-3 rounded-xl bg-bg-gr-2/20 text-slate-100" />
            </div>
            {
                filteredTokens.length > 0 &&
                <table className="table-auto rounded-xl w-full border-separate border-spacing-y-2 [&>td]:px-6 [&>td]:py-20">
                    <thead>
                        <tr className="bg-bg-gr-2/80">
                            <th className="rounded-l-lg text-left pl-16">Asset</th>
                            <th>Balance</th>
                            <th className="rounded-r-lg">Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredTokens.map((token, index) => (
                                <tr key={index} className="text-center even:bg-bg-gr-2/80 odd:bg-bg-gr-2/20 [&>td]:px-6 [&>td]:py-1">
                                    <td className="rounded-l-lg">
                                        <div className="flex items-center w-full md:text-lg text-base">
                                            <img src={`/svg/${token.symbol}.svg`} className="w-10 h-10 my-1 mr-2" alt={`${token.name} icon`} />
                                            <p className="font-bold">{token.name}</p>
                                            <sup className="pl-1 opacity-80">{token.network}</sup>
                                        </div>
                                    </td>
                                    {
                                        (balances.get(token.id) || !ownedTokens.find((token1) => token.id === token1.id))
                                            ?
                                            <td>
                                                {balances.get(token.id) ?? 0} {`${token.symbol.toUpperCase()} `}
                                                <span className="text-sm opacity-50">
                                                    (${((balances.get(token.id) ?? 0) * (tokenPrices.get(token.id) ?? 0)).toFixed(2)})
                                                </span>
                                            </td>
                                            : <td className="w-10 h-10">
                                                <Spinner />
                                            </td>
                                    }

                                    <td className="rounded-r-lg">${(tokenPrices.get(token.id) ?? 0).toFixed(2)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
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

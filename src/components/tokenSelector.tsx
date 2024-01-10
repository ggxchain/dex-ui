
import { ChangeEvent, useEffect, useState } from "react";
import Spinner from "./spinner";
import Contract from "@/services/contract";
import { Token } from "@/types";
import CexService from "@/services/cex";
import Select from "./select";

interface TokenSelectorProps {
    token?: Token;
    amount: number;
    lockedAmount?: boolean;
    onChange: (tokenId: Token, amount: number) => void;
}

export default function TokenSelector({ token, amount, onChange, lockedAmount }: TokenSelectorProps) {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [price, setTokenPrice] = useState<number>(0);

    useEffect(() => {
        if (tokens.length === 0) {
            const contract = new Contract();
            contract.allTokens().then((tokens) => {
                setTokens(tokens);
                if (tokens.length > 0 && token === undefined) {
                    onChange(tokens[0], 0)
                }
            });
            setTokens(tokens);
        }
        if (tokens.length > 0 && token === undefined) {
            onChange(tokens[0], 0)
        }
    }, [token]);

    useEffect(() => {
        if (token === undefined) {
            return;
        }
        const cex = new CexService();
        cex.tokenPrices([token.symbol]).then((prices) => {
            setTokenPrice(prices.get(token.symbol) ?? 0);
        });

    }, [token]);

    if (token === undefined) {
        return (
            <div className="flex w-full justify-center">
                <div className="w-10 h-10">
                    <Spinner />
                </div>
            </div>
        )
    }

    const handleSelectChange = (e: Token) => {
        if (e === null) {
            return;
        }

        onChange(e, 0)
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 10000000) {
            return;
        }
        onChange(token, Number(e.target.value))
    };

    return (
        <div>
            <div className="flex items-center justify-between [&>*]:text-slate-100">
                <Select<Token>
                    value={token}
                    onChange={handleSelectChange}
                    options={tokens}
                    className="w-full h-full"
                    childFormatter={(token: Token) => {
                        return (
                            <div className="flex items-center text-slate-100 w-full grow-on-hover border-white md:text-lg text-base ">
                                <img src={`/svg/${token.symbol}.svg`} className="w-10 h-10 my-1 mr-2" alt={`${token.name} icon`} />
                                <p className="font-bold">{token.name}</p>
                                <sup className="pl-1 opacity-90">{token.network}</sup>
                            </div>
                        );
                    }}
                />
                <div className="h-full [&>*]:bg-transparent border no-wrap border-l-0 w-24 md:w-32 text-right p-2.5 md:p-1.5 pr-2 rounded-r-[1rem] flex flex-col md:text-base text-xs">
                    <input value={amount} step="2" className="w-full text-right" type="number" placeholder="0.00" disabled={lockedAmount} onChange={handleAmountChange} />
                    <p className="text-xs whitespace-nowrap">~= {((amount || 0.0) * price).toFixed(2)}$</p>
                </div>
            </div>
        </div>
    );
}

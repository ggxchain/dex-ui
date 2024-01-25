import { ChangeEvent, useEffect, useState } from "react";
import Spinner from "./spinner";
import Contract, { errorHandler } from "@/services/contract";
import { Token } from "@/types";
import CexService from "@/services/cex";
import Select from "./select";
import Image from "next/image";
import { Input } from "./input";

interface TokenSelectorProps {
    token?: TokenWithPrice;
    tokens: TokenWithPrice[];
    amount?: number;
    lockedAmount?: boolean;
    onChange: (tokenId: TokenWithPrice, amount: number) => void;
}

export type TokenWithPrice = Token & { price: number };

export function useTokens() {
    const [tokenWithPrices, setTokenWithPrices] = useState<TokenWithPrice[]>([]);

    const loadTokens = () => {
        const contract = new Contract();
        contract.allTokens().then((tokens: Token[]) => {
            const cex = new CexService();
            cex.tokenPrices(tokens.map((token) => token.symbol)).then((prices) => {
                const tokensWithPrice = tokens.map((token) => {
                    return {
                        ...token,
                        price: prices.get(token.symbol) ?? 0
                    }
                });
                setTokenWithPrices(tokensWithPrice);
            })
        }).catch(errorHandler)
    }

    return [tokenWithPrices, loadTokens] as const;
}

export default function TokenSelector({ token, amount, onChange, tokens, lockedAmount }: Readonly<TokenSelectorProps>) {
    useEffect(() => {
        if (tokens.length > 0 && token === undefined) {
            onChange(tokens[0], 0)
        }
    });

    if (token === undefined) {
        return (
            <div className="flex w-full justify-center">
                <div className="w-10 h-10">
                    <Spinner />
                </div>
            </div>
        )
    }

    const handleSelectChange = (e: TokenWithPrice) => {
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
                <Select<TokenWithPrice>
                    value={token}
                    onChange={handleSelectChange}
                    options={tokens}
                    className="w-full h-full"
                    childFormatter={(token: Token) => {
                        return (
                            <div className="flex items-center text-slate-100 w-full grow-on-hover border-white md:text-lg text-base ">
                                <Image width={0} height={0} src={`/svg/${token.symbol.toLowerCase()}.svg`} className="w-10 h-10 my-1 mr-2" alt={`${token.name} icon`} />
                                <p className="font-bold">{token.name}</p>
                                <sup className="pl-1 opacity-90">{token.network}</sup>
                            </div>
                        );
                    }}
                />
                <div className="h-full [&>*]:bg-transparent border no-wrap border-l-0 w-24 md:w-32 text-right p-2.5 md:p-1.5 pr-2 rounded-r-[1rem] flex flex-col md:text-base text-xs">
                    <Input name="Amount" value={amount} step="2" className="bg-transparent w-full text-right disabled:text-gray-400 disabled:cursor-not-allowed" type="number" placeholder="0.00" disabled={lockedAmount} onChange={handleAmountChange} />
                    <p className="text-xs whitespace-nowrap">~= {((amount ?? 0.0) * token.price).toFixed(2)}$</p>
                </div>
            </div>
        </div>
    );
}

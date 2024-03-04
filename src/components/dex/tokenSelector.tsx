import { ChangeEvent, useEffect, useState } from "react";
import Spinner from "../common/spinner";
import Contract, { errorHandler } from "@/services/api";
import { Token } from "@/types";
import CexService from "@/services/cex";
import SelectLight from "../common/select";
import Image from "next/image";
import { Input, InputWithPriceInfo } from "../common/input";

interface TokenSelectorProps {
    token?: TokenWithPrice;
    tokens: TokenWithPrice[];
    amount?: number;
    lockedAmount?: boolean;
    onChange: (tokenId: TokenWithPrice, amount: number) => void;
}

export type TokenWithPrice = Token & { price: number };

export function useTokens(contract: Contract) {
    const [tokenWithPrices, setTokenWithPrices] = useState<TokenWithPrice[]>([]);

    const loadTokens = () => {
        contract.allTokensWithInfo().then((tokens: Token[]) => {
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
        // The question here should we allow decimals or not.
        // My guess is not as it's not possible to work with decimals on chain.
        // So probably tokens will be more like satoshi/gwei/wei and not like eth/btc.
        onChange(token, Number(e.target.value))
    };

    const price = (amount ?? 0) * token.price;

    return (
        <div className="flex items-center justify-between[&>*]:text-GGx-light">
            <SelectLight<TokenWithPrice>
                value={token}
                onChange={handleSelectChange}
                options={tokens}
                className="w-full h-full"
                childFormatter={(token: Token) => {
                    return (
                        <div className="flex items-center text-GGx-light w-full border-white md:text-lg text-base grow-on-hover">
                            <Image width={0} height={0} src={`/svg/${token.symbol.toLowerCase()}.svg`} className="w-10 h-10 my-1 mr-2" alt={`${token.name} icon`} />
                            <p className="font-bold">{token.name}</p>
                            <sup className="pl-1 opacity-90">{token.network}</sup>
                        </div>
                    );
                }}
            />
            <InputWithPriceInfo wrapperClassName="basis-4/6" price={price} symbol={token.symbol} name="Amount" value={amount?.toString()} step="2" className="w-full border border-l-0 bg-transparent p-3.5 rounded-r-[1rem] text-left disabled:text-gray-400 disabled:cursor-not-allowed" type="number" placeholder="0.00" disabled={lockedAmount} onChange={handleAmountChange} />
        </div>
    );
}

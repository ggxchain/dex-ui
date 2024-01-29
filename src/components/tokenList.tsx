import { CALCULATION_PRECISION, CALCULATION_PRECISION_NUMBER } from "@/consts";
import TokenDecimals from "@/tokenDecimalsConverter";
import { Amount, Token } from "@/types";
import { BN_ZERO } from "@polkadot/util";
import Image from "next/image";

export interface ListElement extends Token {
    balance: Amount;
    onChainBalance?: Amount;
    estimatedPrice: number;
    url: string;
}

interface TokenListProperties {
    tokens: ListElement[];
    onClick?: (token: ListElement) => void;
    className?: string;
    selected?: ListElement;
    onChain?: boolean;
}

export default function TokenList({ tokens, onClick, className, selected, onChain }: Readonly<TokenListProperties>) {
    const handleClick = (token: ListElement) => {
        if (onClick !== undefined) {
            onClick(token);
        }
    }

    return (
        <table className={`table-fixed border-separate border-spacing-y-2 rounded-xl md:text-base text-sm [&>td]:px-6 [&>td]:py-20 ${className}`}>
            <thead>
                <tr className="bg-bg-gr-2/80">
                    <th className="rounded-l-lg text-left pl-16">Asset</th>
                    <th>Balance</th>
                    {
                        onChain &&
                        <th>On chain balance</th>
                    }
                    <th className="rounded-r-lg">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    tokens.length === 0 &&
                    <tr>
                        <td className="text-center w-=">No tokens found</td>
                    </tr>
                }

                {
                    tokens.map((token) => {
                        const isSelected = token.id === selected?.id;
                        const amountConverter = new TokenDecimals(token.decimals);

                        return (
                            <tr key={token.symbol} onClick={() => handleClick(token)} className={`text-center even:bg-bg-gr-2/80 odd:bg-bg-gr-2/20 [&>td]:px-6 [&>td]:py-1 rounded-xl ${isSelected ? "filter backdrop-brightness-125" : ""} ${onClick ? "glow-on-hover cursor-pointer" : ""}`}>
                                <td className="rounded-l-lg">
                                    <div className="flex items-center w-full">
                                        <Image width={0} height={0} src={token.url} className="md:w-10 md:h-10 w-5 h-5 my-1 mr-2" alt={`${token.name} icon`} />
                                        <p className="font-bold">{token.name}</p>
                                        <sup className="pl-1 opacity-80">{token.network}</sup>
                                    </div>
                                </td>
                                <td>
                                    <Balance symbol={token.symbol} balance={amountConverter.BNToFloat(token.balance)} estimatedPrice={token.estimatedPrice} />
                                </td>
                                {
                                    onChain &&
                                    <td>
                                        <Balance symbol={token.symbol} balance={amountConverter.BNToFloat(token.onChainBalance ?? BN_ZERO)} estimatedPrice={token.estimatedPrice} />
                                    </td>
                                }
                                <td className="rounded-r-lg">${token.estimatedPrice.toString()}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>)

}

interface BalanceProperties {
    balance: number;
    estimatedPrice: number;
    symbol: string;
}

function Balance({ balance, estimatedPrice, symbol }: BalanceProperties) {
    const estimatedPriceWithPrecision = balance * estimatedPrice;

    return (
        <div className="flex flex-col text-xs md:text-base text-center break-words">
            {
                <p className="mt-1">{balance.toString()} {`${symbol.toUpperCase()} `}</p>
            }

            <span className="opacity-50 mt-1">
                (${estimatedPriceWithPrecision.toFixed(2)})
            </span>

        </div>
    )
}


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
        <table className={`font-main table-fixed border-separate border-spacing-y-2 rounded-xl md:text-base text-sm mt-[25px] [&>td]:px-6 [&>td]:py-20 ${className}`}>
            <thead>
                <tr className="text-GGx-gray text-left [&>th]:py-2 [&>th]:border-GGx-gray [&>th]:border-b-[1px] [&>th]:px-6 [&>th]:text-[16px] [&>th]:font-medium">
                    <th>Asset</th>
                    <th>Balance</th>
                    {
                        onChain &&
                        <th>On chain balance</th>
                    }
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    tokens.length === 0 &&
                    <tr>
                        <td className="text-center">No tokens found</td>
                    </tr>
                }

                {
                    tokens.map((token) => {
                        const isSelected = token.id === selected?.id;
                        const amountConverter = new TokenDecimals(token.decimals);

                        return (
                            <tr key={token.symbol} onClick={() => handleClick(token)} className={`text-left font-medium text-[18px] text-GGx-light even:bg-GGx-black2 even:bg-opacity-70 [&>td]:px-6 [&>td]:py-1 ${isSelected ? "filter backdrop-brightness-125" : ""} ${onClick ? "glow-on-hover cursor-pointer" : ""}`}>
                                <td>
                                    <div className="flex items-center w-full">
                                        <Image width={0} height={0} src={token.url} className="md:w-6 md:h-6 w-5 h-5 my-1 mr-2" alt={`${token.name} icon`} />
                                        <p className="font-bold">{token.name}</p>
                                        <sup className="pl-1 font-normal text-[10px]">{token.network}</sup>
                                    </div>
                                </td>
                                <td>
                                    <Balance amountConverter={amountConverter} symbol={token.symbol} balance={token.balance} estimatedPrice={token.estimatedPrice} />
                                </td>
                                {
                                    onChain &&
                                    <td>
                                        <Balance amountConverter={amountConverter} symbol={token.symbol} balance={token.onChainBalance ?? BN_ZERO} estimatedPrice={token.estimatedPrice} />
                                    </td>
                                }
                                <td>${token.estimatedPrice.toString()}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>)

}

interface BalanceProperties {
    balance: Amount;
    estimatedPrice: number;
    symbol: string;
    amountConverter: TokenDecimals;
}

function Balance({ balance, estimatedPrice, symbol, amountConverter }: BalanceProperties) {
    const estimatedPriceWithPrecision = amountConverter.BNToFloat(balance) * estimatedPrice;

    return (
        <div className="text-[18px] font-medium text-left break-words">
            <p className="mt-1">{amountConverter.BNtoDisplay(balance, symbol)}
                <sup className="ml-1 font- text-[10px]">(${estimatedPriceWithPrecision.toFixed(2)})</sup>
            </p>
        </div>
    )
}


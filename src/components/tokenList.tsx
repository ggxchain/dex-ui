import { Token } from "@/types";

export interface ListElement extends Token {
    balance: number;
    estimatedPrice: number;
    url: string;
}

interface TokenListProperties {
    tokens: ListElement[];
    onClick?: (token: ListElement) => void;
    className?: string;
    selected?: ListElement;
}

export default function TokenList({ tokens, onClick, className, selected }: TokenListProperties) {
    const handleClick = (token: ListElement) => {
        if (onClick !== undefined) {
            onClick(token);
        }
    }

    return (
        <table className={`table-auto border-separate border-spacing-y-2 rounded-xl [&>td]:px-6 [&>td]:py-20 ${className}`}>
            <thead>
                <tr className="bg-bg-gr-2/80">
                    <th className="rounded-l-lg text-left pl-16">Asset</th>
                    <th>Balance</th>
                    <th className="rounded-r-lg">Price</th>
                </tr>
            </thead>
            <tbody>

                {
                    tokens.map((token) => {
                        const isSelected = token.id === selected?.id;

                        return (
                            <tr key={token.symbol} onClick={() => handleClick(token)} className={`text-center even:bg-bg-gr-2/80 odd:bg-bg-gr-2/20 [&>td]:px-6 [&>td]:py-1 rounded-xl ${isSelected ? "filter backdrop-brightness-125" : ""} ${onClick ? "glow-on-hover cursor-pointer" : ""}`}>
                                <td className="rounded-l-lg">
                                    <div className="flex items-center w-full md:text-lg text-base">
                                        <img src={token.url} className="w-10 h-10 my-1 mr-2" alt={`${token.name} icon`} />
                                        <p className="font-bold">{token.name}</p>
                                        <sup className="pl-1 opacity-80">{token.network}</sup>
                                    </div>
                                </td>
                                {
                                    <td>
                                        {token.balance} {`${token.symbol.toUpperCase()} `}
                                        <span className="text-sm opacity-50">
                                            (${(token.balance * token.estimatedPrice).toFixed(2)})
                                        </span>
                                    </td>
                                }
                                <td className="rounded-r-lg">${token.estimatedPrice.toFixed(2)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>)

}


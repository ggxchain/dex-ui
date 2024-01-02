
import { ChangeEvent, useState } from "react";
import ReactSelect, { OnChangeValue } from "react-select";

function mocked_tokens() {
    return [
        {
            "name": "USDT",
            "symbol": "usdt",
            "network": "ERC20",
        },
        {
            "name": "USDC",
            "symbol": "usdc",
            "network": "ERC20",
        },
        {
            "name": "ATOM",
            "symbol": "atom",
            "network": "Cosmos",
        },
        {
            "name": "ETH",
            "symbol": "eth",
            "network": "Ethereum",
        }
    ]
}

type Token = {
    name: string;
    symbol: string;
    network: string;
}

export default function TokenSelector() {

    const tokens = mocked_tokens();

    const [selectedCrypto, setSelectedCrypto] = useState<Token | null>(tokens[0] as Token);
    const [amount, setAmount] = useState<number>(0);

    const handleSelectChange = (e: OnChangeValue<Token, false>) => {
        setSelectedCrypto(e);
        // Reset amount when crypto is changed
        setAmount(0);
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    return (
        <div >
            <div className="flex items-center justify-between [&>*]:text-white">
                <ReactSelect
                    value={selectedCrypto}
                    onChange={handleSelectChange}
                    options={tokens}
                    className="h-full w-full"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 16
                    })}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'transparent',
                            borderRadius: '1rem'
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: '16px',
                            marginBottom: '1px',
                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'transparent',
                        }),
                    }}

                    formatOptionLabel={(token) => {
                        return (
                            <div className="flex items-center text-white w-full scale-95 hover:scale-100 transition-all transform-all duration-500 border-white">
                                <img src={`/svg/${token.symbol}.svg`} className="w-10 h-10 my-1 mr-2" alt={`${token.name} icon`} />
                                <p>{token.name}</p>
                                <sup className="pl-1 ">{token.network}</sup>
                            </div>
                        );
                    }}
                />



            </div>
        </div>
    );

}
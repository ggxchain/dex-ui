
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
    const [amount, setAmount] = useState<number | null>(null);

    const handleSelectChange = (e: OnChangeValue<Token, false>) => {
        setSelectedCrypto(e);
        // Reset amount when crypto is changed
        setAmount(0);
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 10000000) {
            return;
        }
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
                            borderRadius: '0px',
                            borderTopLeftRadius: '1rem',
                            borderBottomLeftRadius: '1rem'
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
                            <div className="flex items-center text-white w-full grow-on-hover border-white text-base sm:text-xs">
                                <img src={`/svg/${token.symbol}.svg`} className="md:w-10 md:h-10 w-6 h-6 my-1 mr-2" alt={`${token.name} icon`} />
                                <p>{token.name}</p>
                                <sup className="pl-1 ">{token.network}</sup>
                            </div>
                        );
                    }}
                />
                <div className="h-full [&>*]:bg-transparent border no-wrap border-l-0 w-24 md:w-32 text-right p-0.5 md:p-1.5 pr-2 rounded-r-[1rem] flex flex-col md:text-base text-xs">
                    <input step="2" className="w-full text-right" type="number" placeholder="0.00" onChange={handleAmountChange} />
                    <p className="text-xs whitespace-nowrap">~= {Math.round((amount || 0.0) * 10)}$</p>
                </div>
            </div>
        </div>
    );

}
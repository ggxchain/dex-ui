
import { ChangeEvent } from "react";
import ReactSelect, { OnChangeValue } from "react-select";

// Returns a list of tokens

function mocked_tokens(): Token[] {
    return [
        {
            "id": 1,
            "name": "USDT",
            "symbol": "usdt",
            "network": "ERC20",
        },
        {
            "id": 2,
            "name": "USDC",
            "symbol": "usdc",
            "network": "ERC20",
        },
        {
            "id": 3,
            "name": "ATOM",
            "symbol": "atom",
            "network": "Cosmos",
        },
        {
            "id": 4,
            "name": "ETH",
            "symbol": "eth",
            "network": "Ethereum",
        }
    ]
}

interface TokenSelectorProps {
    token: Token;
    amount: number
    onChange: (token_id: Token, amount: number) => void;
}

export default function TokenSelector({ token, amount, onChange }: TokenSelectorProps) {
    const tokens = mocked_tokens();

    if (token === undefined) {
        onChange(tokens[0], 0)
        return <svg aria-hidden="true" className="md:w-10 md:h-10 w-6 h-6 self-center text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
    }

    const handleSelectChange = (e: OnChangeValue<Token, false>) => {
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
        <div >
            <div className="flex items-center justify-between [&>*]:text-white">
                <ReactSelect
                    value={token}
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
                    <input value={amount} step="2" className="w-full text-right" type="number" placeholder="0.00" onChange={handleAmountChange} />
                    <p className="text-xs whitespace-nowrap">~= {Math.round((amount || 0.0) * 10)}$</p>
                </div>
            </div>
        </div>
    );

}

import { ChangeEvent, useEffect } from "react";
import ReactSelect, { OnChangeValue } from "react-select";
import Spinner from "./spinner";
import mocked_tokens from "@/mock";

interface TokenSelectorProps {
    token: Token;
    amount: number
    onChange: (token_id: Token, amount: number) => void;
}

export default function TokenSelector({ token, amount, onChange }: TokenSelectorProps) {
    const tokens = mocked_tokens();

    useEffect(() => {
        if (token === undefined) {
            onChange(tokens[0], 0)
        }
    }, [token]);

    if (token === undefined) {

        return <Spinner />
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
        <div>
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
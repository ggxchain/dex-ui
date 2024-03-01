"use client"

import { ReactNode } from "react";

import ReactSelect, { SingleValue } from "react-select";

interface SelectProps<Type> {
    value?: Type;
    onChange: (value: Type) => void;
    options: readonly Type[];
    childFormatter: (value: Type) => ReactNode;
    className?: string;
    name?: string;
    wrapperClassName?: string;
    disabled?: boolean;
}

export default function Select<Type>({ value, onChange, options, childFormatter, className, name, wrapperClassName, ...props }: Readonly<SelectProps<Type>>) {
    const disabled = props.disabled ?? false;
    const onChangeValue = (e: SingleValue<Type>) => {
        if (e === null) {
            return;
        }
        onChange(e as Type);
    }

    return (
        <div className={"relative w-full h-full ".concat(wrapperClassName ?? "")}>
            <ReactSelect
                isDisabled={disabled}
                instanceId={`react-select`}
                value={value}
                onChange={onChangeValue}
                options={options}
                className={className}
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
                        boxShadow: 'none',
                    }),
                    menuList: (baseStyles, state) => ({
                        ...baseStyles,
                    }),
                }}

                formatOptionLabel={childFormatter}
            />
            <p className="absolute top-1/4 left-2 -translate-y-1/2 text-[75%] opacity-75" style={{ lineHeight: "1", marginBlockStart: "0" }}>
                {name}
            </p>
        </div>
    )
}

export function SelectAccount<Type>({ value, onChange, options, childFormatter, className, name, wrapperClassName, ...props }: Readonly<SelectProps<Type>>) {
    const disabled = props.disabled ?? false;
    const onChangeValue = (e: SingleValue<Type>) => {
        if (e === null) {
            return;
        }
        onChange(e as Type);
    }

    return (
        <div className={"relative flex w-full h-full border-GGx-black2 border-2 rounded-[4px] ".concat(wrapperClassName ?? "")}>
            <div className="h-full p-4 text-[14px] text-GGx-gray">
                {name}
            </div>
            <ReactSelect
                isDisabled={disabled}
                instanceId={`react-select`}
                value={value}
                onChange={onChangeValue}
                options={options}
                className={className}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 16
                })}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: '#11100C',
                        borderColor: '#11100C',
                        borderRadius: '0px',
                    }),
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        borderRadius: '16px',
                        borderColor: '#11100C',
                        backgroundColor: '#11100C',
                    }),
                    menu: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: '#11100C',
                        backgroundColor: '#11100C',
                        boxShadow: 'none',
                    }),
                    menuList: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: '#11100C',
                        backgroundColor: '#11100C',
                        borderRadius: '0px',
                    }),
                }}

                formatOptionLabel={childFormatter}
            />
        </div>
    )
}

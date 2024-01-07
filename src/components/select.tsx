import { ReactNode } from "react";

import ReactSelect, { SingleValue } from "react-select";

interface SelectProps<Type> {
    value?: Type;
    onChange: (value: Type) => void;
    options: Type[];
    childFormatter: (value: Type) => ReactNode;
    className?: string;
}

export default function Select<Type>({ value, onChange, options, childFormatter, className }: SelectProps<Type>) {
    const onChangeValue = (e: SingleValue<Type>) => {
        if (e === null) {
            return;
        }
        onChange(e as Type);
    }

    return (
        <ReactSelect
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

            formatOptionLabel={(token) => {
                return childFormatter(token)
            }}
        />
    )
}
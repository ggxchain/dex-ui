"use client";

import type { ReactNode } from "react";

import ReactSelect, { type SingleValue } from "react-select";

interface SelectProps<Type> {
	value?: Type;
	onChange: (value: Type) => void;
	options: readonly Type[];
	childFormatter: (value: Type) => ReactNode;
	className?: string;
	disabled?: boolean;
}

export default function SelectLight<Type>({
	value,
	onChange,
	options,
	childFormatter,
	className,
	...props
}: Readonly<SelectProps<Type>>) {
	const disabled = props.disabled ?? false;
	const onChangeValue = (e: SingleValue<Type>) => {
		if (e === null) {
			return;
		}
		onChange(e as Type);
	};

	return (
		<ReactSelect
			isDisabled={disabled}
			instanceId={`react-select`}
			value={value}
			onChange={onChangeValue}
			options={options}
			className={className}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary: "#DFDDCD",
				},
				borderRadius: 16,
			})}
			styles={{
				control: (baseStyles, state) => ({
					...baseStyles,
					backgroundColor: "#DFDDCD",
					borderColor: "#78776D",
					borderRadius: "4px",
				}),
				option: (baseStyles, state) => ({
					...baseStyles,
					borderRadius: "16px",
					borderColor: "#78776D",
					backgroundColor: "#DFDDCD",
				}),
				menu: (baseStyles, state) => ({
					...baseStyles,
					borderColor: "#78776D",
					backgroundColor: "#DFDDCD",
					boxShadow: "none",
				}),
				menuList: (baseStyles, state) => ({
					...baseStyles,
					backgroundColor: "#DFDDCD",
					borderRadius: "0px",
				}),
			}}
			formatOptionLabel={childFormatter}
		/>
	);
}

export function SelectDark<Type>({
	value,
	onChange,
	options,
	childFormatter,
	className,
	...props
}: Readonly<SelectProps<Type>>) {
	const disabled = props.disabled ?? false;
	const onChangeValue = (e: SingleValue<Type>) => {
		if (e === null) {
			return;
		}
		onChange(e as Type);
	};

	return (
		<ReactSelect
			isDisabled={disabled}
			instanceId={`react-select`}
			value={value}
			onChange={onChangeValue}
			options={options}
			className={className}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary: "11100C",
				},
				borderRadius: 16,
			})}
			styles={{
				control: (baseStyles, state) => ({
					...baseStyles,
					backgroundColor: "#11100C",
					borderColor: "#78776D",
					borderRadius: "0px",
					borderTopLeftRadius: "4px",
					borderBottomLeftRadius: "4px",
				}),
				option: (baseStyles, state) => ({
					...baseStyles,
					borderRadius: "16px",
					borderColor: "#11100C",
					backgroundColor: "#11100C",
				}),
				menu: (baseStyles, state) => ({
					...baseStyles,
					borderColor: "#11100C",
					backgroundColor: "#11100C",
					boxShadow: "none",
				}),
				menuList: (baseStyles, state) => ({
					...baseStyles,
					borderColor: "#11100C",
					backgroundColor: "#11100C",
					borderRadius: "0px",
				}),
			}}
			formatOptionLabel={childFormatter}
		/>
	);
}

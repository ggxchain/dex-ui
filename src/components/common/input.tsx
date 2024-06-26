import type React from "react";
import { useEffect, useRef } from "react";

type InputProps = React.ComponentPropsWithRef<"input"> & {
	name?: string;
	isOpen?: boolean;
	wrapperClassName?: string;
};

export function Input({
	name,
	placeholder,
	wrapperClassName,
	className,
	isOpen = false,
	...props
}: InputProps) {
	const inputRef = useRef(null);

	useEffect(() => {
		if (isOpen && inputRef?.current) {
			(inputRef.current as HTMLElement)?.focus();
		}
	}, [isOpen]);

	const inputPlaceholder = placeholder ?? name;

	return (
		<div className={`w-full h-full ${wrapperClassName ?? ""}`}>
			{name && (
				<p
					className="text-GGx-gray text-[14px]"
					style={{ lineHeight: "1", marginBlockStart: "0" }}
				>
					{name}
				</p>
			)}
			<input
				{...props}
				ref={inputRef}
				placeholder={inputPlaceholder}
				value={props.value || ""}
				className={className}
				data-testid="Input"
			/>
		</div>
	);
}

type InputWithPriceInfoProps = InputProps & {
	symbol: string;
	amtValue: string;
	suffixStyle?: string;
};

export function InputWithPriceInfo(props: Readonly<InputWithPriceInfoProps>) {
	const value = props.value ?? 0;
	// We don't want to pass wrapperClassName to Input component
	const { symbol, amtValue, suffixStyle, ...forwardProps } = props;

	return (
		<div
			data-testid="InputWithPriceInfo"
			className={`relative w-full h-full flex flex-col ${
				props.wrapperClassName ?? ""
			}`}
		>
			<Input {...forwardProps} type="number" value={value.toString()} />
			<div
				className={`md:flex text-14px items-center space-x-1 absolute bottom-1/2 right-2 top-1/2 -translate-y-1/4 ${props.suffixStyle}`}
			>
				<p className="hidden md:block">{props.symbol}</p>
				<span className="text-xs sm:text-sm">({props.amtValue})</span>
			</div>
		</div>
	);
}

import { formatPrice } from "@/services/utils";

type InputProps = React.ComponentPropsWithRef<"input"> & {
	name?: string;
	wrapperClassName?: string;
};

export function Input({
	name,
	placeholder,
	wrapperClassName,
	className,
	...props
}: InputProps) {
	const inputPlaceholder = placeholder ?? name;

	return (
		<div className={`w-full h-full ${wrapperClassName ?? ""}`}>
			{name && (
				<p
					className={`text-GGx-gray text-[14px]`}
					style={{ lineHeight: "1", marginBlockStart: "0" }}
				>
					{name}
				</p>
			)}
			<input
				{...props}
				placeholder={inputPlaceholder}
				value={props.value || ""}
				className={className}
			/>
		</div>
	);
}

type InputWithPriceInfoProps = InputProps & {
	symbol: string;
	price: number;
	suffixStyle?: string;
};

export function InputWithPriceInfo(props: Readonly<InputWithPriceInfoProps>) {
	const value = props.value ?? 0;
	// We don't want to pass wrapperClassName to Input component
	const { symbol, price, suffixStyle, ...forwardProps } = props;

	return (
		<div className={`relative w-full h-full ${props.wrapperClassName ?? ""}`}>
			<Input {...forwardProps} type="number" value={value.toString()} />
			<div
				className={`flex text-14px items-center space-x-1 absolute bottom-1/2 right-2 top-1/2 -translate-y-1/4 ${props.suffixStyle}`}
			>
				<p className="hidden md:block">{props.symbol}</p>
				<span className="text-sm">(${formatPrice(props.price)})</span>
			</div>
		</div>
	);
}

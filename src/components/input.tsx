import assert from "assert";

type InputProps = React.ComponentPropsWithRef<'input'> & {
    name: string;
    wrapperClassName?: string;
};

export function Input({ name, placeholder, wrapperClassName, className, ...props }: InputProps) {
    const isValue = props.value !== undefined;
    const inputPlaceholder = placeholder ?? name;

    return (
        <div className={`relative w-full h-full ${wrapperClassName ?? ''}`}>
            {/* Apply className specifically to the input */}
            <input {...props} placeholder={inputPlaceholder} className={className} />
            <p className={`absolute top-1/4 left-2 -translate-y-1/2 text-[75%] opacity-75 ${isValue ? "" : "hidden"}`}
                style={{ lineHeight: "1", marginBlockStart: "0" }}>
                {name}
            </p>
        </div>
    );
}

type InputWithPriceInfoProps = InputProps & {
    symbol: string;
    price: number;
};

export function InputWithPriceInfo(props: Readonly<InputWithPriceInfoProps>) {
    assert(typeof props.value === "number")
    const value = props.value ?? 0;

    return (<div className="relative">
        <Input {...props}
            type="number"
            value={value.toString()}
        />
        <p className="absolute bottom-0 opacity-50 right-2 top-1/2 -translate-y-1/2">{props.symbol}{value >= 2 ? "s" : ""} <span className="text-sm">(${props.price.toFixed(2)})</span></p>
    </div>)
}

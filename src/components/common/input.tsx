type InputProps = React.ComponentPropsWithRef<'input'> & {
    name: string;
    wrapperClassName?: string;
};

export function Input({ name, placeholder, wrapperClassName, className, ...props }: InputProps) {
    const isValue = props.value !== undefined && props.value !== null && props.value !== "";
    const inputPlaceholder = placeholder ?? name;

    return (
        <div className={`relative w-full h-full ${wrapperClassName ?? ''}`}>
            <input {...props} placeholder={inputPlaceholder} value={props.value || ""} className={className} />
            <p className={`absolute top-1/4 left-2 -translate-y-1/2 text-[75%] ${isValue ? "opacity-75" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-300`}
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
    const value = props.value ?? 0;
    // We don't want to pass wrapperClassName to Input component
    const forwardProps = { ...props, wrapperClassName: '' };

    return (<div className={`relative w-full h-full ${props.wrapperClassName ?? ''}`} >
        <Input {...forwardProps}
            type="number"
            value={value.toString()}
        />
        <div className="flex items-center space-x-1 scale-80 md:scale-100 absolute bottom-0 opacity-50 right-2 top-1/2 -translate-y-1/2">
            <p className="hidden md:block">{props.symbol}</p>
            <span className="text-sm">(${props.price.toFixed(2)})</span>
        </div>
    </div>)
}
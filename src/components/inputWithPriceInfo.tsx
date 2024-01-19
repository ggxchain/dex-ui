import { ChangeEvent } from "react";

interface InputWithPriceInfoProps {
    value?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    price: number;
    symbol: string;
    className?: string;
}

export default function InputWithPriceInfo(props: InputWithPriceInfoProps) {
    const onChange = props.onChange ?? (() => { });
    const value = props.value ?? 0;

    return (<div className="relative">
        <input className={props.className}
            type="number"
            value={value.toString()}
            placeholder={props.placeholder}
            onChange={(e) => onChange(e)}
        />
        <p className="absolute bottom-0 opacity-50 right-2 top-1/2 -translate-y-1/2">{props.symbol}{value >= 2 ? "s" : ""} <span className="text-sm">(${props.price.toFixed(2)})</span></p>
    </div>)
}

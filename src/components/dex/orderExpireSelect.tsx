import React, { ChangeEvent, useMemo, useState } from 'react';
import { Input } from '../common/input';
import Select from '../common/select';

interface Props {
    onChange: (number: number, unit: Option) => void;
    number: number;
    unit: Option;
}

type Minutes = { string: "Minutes" }
type Hours = { string: "Hours" }
type Days = { string: "Days" }
type Option = Minutes | Hours | Days;

export function useExpire() {
    const [number, setNumber] = useState<number>(0);
    const [unit, setUnit] = useState<Option>({ string: "Minutes" });

    const onChange = (number: number, unit: Option) => {
        setNumber(number);
        setUnit(unit);
    }

    const convertToMillis = () => {
        switch (unit.string) {
            case "Minutes":
                return number * 60_000;
            case "Hours":
                return number * 3600_000;
            case "Days":
                return number * 86400_000;
        }
    }

    return [number, unit, convertToMillis, onChange] as const;

}

export default function OrderExpireSelect(props: Props) {
    const values: Option[] = useMemo(() => [{ string: "Minutes" }, { string: "Hours" }, { string: "Days" }], []);

    const onSelectChange = (value: Option) => {
        props.onChange(0, value);
    }

    const onInput = (value: ChangeEvent<HTMLInputElement>) => {
        props.onChange(parseInt(value.target.value), props.unit);
    }

    return (
        <div className="flex items-center justify-between [&>*]:text-slate-100">
            <Select<Option>
                value={props.unit}
                onChange={onSelectChange}
                options={values}
                wrapperClassName="w-full h-full"
                childFormatter={(option: Option) => {
                    return (
                        <div className="flex p-3 md:p-2.5 items-center text-slate-100 w-full border-white md:text-lg text-base grow-on-hover">
                            <p className="font-bold">{option.string}</p>
                        </div>
                    );
                }}
            />
            <Input wrapperClassName="basis-4/6" name={props.unit.string} value={props.number.toString()} className=" border border-l-0 bg-transparent p-3.5 rounded-r-[1rem] w-full text-left" type="number" onChange={onInput} />
        </div>
    );
};

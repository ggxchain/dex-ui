import React, { ChangeEvent, useMemo, useState } from 'react';
import { Input } from '../common/input';
import SelectLight, { SelectDark } from '../common/select';

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
        <div className="flex items-center justify-between [&>*]:text-GGx-light">
            <SelectDark<Option>
                value={props.unit}
                onChange={onSelectChange}
                options={values}
                className="w-full h-full"
                childFormatter={(option: Option) => {
                    return (
                        <div className="flex p-3 items-center text-GGx-light w-full border-white md:text-lg text-base grow-on-hover">
                            <p className="font-bold">{option.string}</p>
                        </div>
                    );
                }}
            />
            <Input wrapperClassName="basis-4/6" value={props.number.toString()} className="w-full bg-GGx-gray text-GGx-black2 px-[15px] py-[16px] rounded-r-[4px] border-GGx-gray border text-left " type="number" onChange={onInput} />
        </div>
    );
};

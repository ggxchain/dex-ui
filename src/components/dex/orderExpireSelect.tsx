import React, { type ChangeEvent, useMemo, useState } from "react";
import { Input } from "../common/input";
import SelectLight, { SelectDark } from "../common/select";
import { bn, strToBn } from "@/services/utils";

interface Props {
	onChange: (str: string, unit: Option) => void;
	expNum: string;
	unit: Option;
}

type Minutes = { value: "Minutes" };
type Hours = { value: "Hours" };
type Days = { value: "Days" };
type Option = Minutes | Hours | Days;

export function useExpire() {
	const [expNum, setExpNum] = useState<string>("0");
	const [unit, setUnit] = useState<Option>({ value: "Minutes" });

	const onChange = (str: string, unit: Option) => {
		setExpNum(str);
		setUnit(unit);
	};

	const convertToMillis = () => {
		switch (unit.value) {
			case "Minutes":
				return strToBn(expNum).mul(bn(60000));
			case "Hours":
				return strToBn(expNum).mul(bn(3600000));
			case "Days":
				return strToBn(expNum).mul(bn(86400000));
		}
	};

	return [expNum, unit, convertToMillis, onChange] as const;
}

export default function OrderExpireSelect(props: Props) {
	const values: Option[] = useMemo(
		() => [{ value: "Minutes" }, { value: "Hours" }, { value: "Days" }],
		[],
	);

	const onSelectChange = (value: Option) => {
		props.onChange("0", value);
	};

	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.target.value.replace(/^0+/, ""), props.unit);
	};

	return (
		<div
			data-testid="expireSelect"
			className="flex items-center justify-between [&>*]:text-GGx-light"
		>
			<SelectDark<Option>
				value={props.unit}
				onChange={onSelectChange}
				options={values}
				className="w-full h-full"
				childFormatter={(option: Option) => {
					return (
						<div className="flex p-3 items-center text-GGx-light w-full border-white md:text-lg text-base grow-on-hover">
							<p className="font-bold">{option.value}</p>
						</div>
					);
				}}
			/>
			<Input
				wrapperClassName="basis-4/6"
				value={props.expNum}
				className="w-full bg-GGx-gray text-GGx-black2 px-[15px] py-[16px] rounded-r-[4px] border-GGx-gray border text-left "
				type="string"
				onChange={onInput}
			/>
		</div>
	);
}

import {
	bn,
	checkBnStr,
	count_decimals,
	fixDP,
	strIntToBn,
} from "@/services/utils";
import { MAX_DP } from "@/settings";
import { type ChangeEvent, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Input } from "../common/input";
import { SelectDark } from "../common/select";

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
	const [expNum, setExpNum] = useState<string>("365000");
	const [unit, setUnit] = useState<Option>({ value: "Days" });

	const onChange = (str: string, unit: Option) => {
		setExpNum(str);
		setUnit(unit);
	};

	const convertToMillis = () => {
		switch (unit.value) {
			case "Minutes":
				return strIntToBn(expNum).mul(bn(60000));
			case "Hours":
				return strIntToBn(expNum).mul(bn(3600000));
			case "Days":
				return strIntToBn(expNum).mul(bn(86400000));
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
		let input = e.target.value.replace(/^0+/, "");
		const dpLen = count_decimals(input);
		if (dpLen > MAX_DP) {
			input = fixDP(input);
		}
		const { amount, isValid } = checkBnStr(input);
		if (!isValid) {
			toast.warn("amount invalid");
			return;
		}
		props.onChange(input, props.unit);
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

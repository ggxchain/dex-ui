import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import OrderExpireSelect, { useExpire } from "../orderExpireSelect";
import { bn } from "@/services/utils";

describe("OrderExpireSelect", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const onChangeMock = jest.fn();

	test("renders without error", () => {
		render(
			<OrderExpireSelect
				onChange={onChangeMock}
				expNum={"0"}
				unit={{ value: "Minutes" }}
			/>,
		);
		expect(screen.getByText("Minutes")).toBeInTheDocument();
	});

	test("calls onChange when select value changes", () => {
		render(
			<OrderExpireSelect
				onChange={onChangeMock}
				expNum={"0"}
				unit={{ value: "Minutes" }}
			/>,
		);

		const select = screen.getByText("Minutes").parentElement;
		fireEvent.keyDown(select!, { key: "ArrowDown" });
		const option = screen.getByText("Hours");
		fireEvent.click(option);

		expect(onChangeMock).toHaveBeenCalledWith("0", { value: "Hours" });
	});

	test("calls onChange when input value changes", () => {
		render(
			<OrderExpireSelect
				onChange={onChangeMock}
				expNum={"0"}
				unit={{ value: "Minutes" }}
			/>,
		);
		const input = screen.getByDisplayValue("0");

		fireEvent.change(input, { target: { value: "10" } });

		expect(onChangeMock).toHaveBeenCalledWith("10", { value: "Minutes" });
	});

	test("converts number and unit to milliseconds correctly", () => {
		const { result } = renderHook(() => useExpire());

		const convertToMillis = () => result.current[2]();
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const onChange = (number: number, unit: any) =>
			result.current[3](number.toString(), unit);
		expect(convertToMillis().toString()).toBe("0");

		act(() => onChange(5, { value: "Hours" }));
		expect(convertToMillis().toString()).toBe("18000000");

		act(() => onChange(2, { value: "Days" }));
		expect(convertToMillis().toString()).toBe("172800000");
	});
});

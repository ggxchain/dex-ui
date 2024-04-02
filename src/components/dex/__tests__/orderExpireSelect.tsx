import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import OrderExpireSelect, { useExpire } from "../orderExpireSelect";

describe("OrderExpireSelect", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const onChangeMock = jest.fn();

	test("renders without error", () => {
		render(
			<OrderExpireSelect
				onChange={onChangeMock}
				number={0}
				unit={{ string: "Minutes" }}
			/>,
		);
		expect(screen.getByText("Minutes")).toBeInTheDocument();
	});

	test("calls onChange when select value changes", () => {
		render(
			<OrderExpireSelect
				onChange={onChangeMock}
				number={0}
				unit={{ string: "Minutes" }}
			/>,
		);

		const select = screen.getByText("Minutes").parentElement;
		fireEvent.keyDown(select!, { key: "ArrowDown" });
		const option = screen.getByText("Hours");
		fireEvent.click(option);

		expect(onChangeMock).toHaveBeenCalledWith(0, { string: "Hours" });
	});

	test("calls onChange when input value changes", () => {
		render(
			<OrderExpireSelect
				onChange={onChangeMock}
				number={0}
				unit={{ string: "Minutes" }}
			/>,
		);
		const input = screen.getByDisplayValue("0");

		fireEvent.change(input, { target: { value: "10" } });

		expect(onChangeMock).toHaveBeenCalledWith(10, { string: "Minutes" });
	});

	test("converts number and unit to milliseconds correctly", () => {
		const { result } = renderHook(() => useExpire());

		const convertToMillis = () => result.current[2]();
		const onChange = (number: number, unit: any) =>
			result.current[3](number, unit);
		expect(convertToMillis()).toBe(0);

		act(() => onChange(5, { string: "Hours" }));
		expect(convertToMillis()).toBe(18000000);

		act(() => onChange(2, { string: "Days" }));
		expect(convertToMillis()).toBe(172800000);
	});
});

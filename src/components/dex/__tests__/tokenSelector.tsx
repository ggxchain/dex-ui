import { fireEvent, render, screen } from "@testing-library/react";
import { debug } from "jest-preview";
import TokenSelector, { type TokenWithPrice } from "../tokenSelector";

describe("TokenSelector", () => {
	const tokens: TokenWithPrice[] = [
		{
			id: 1,
			symbol: "ETH",
			name: "Ethereum",
			price: 3168.27,
			network: "ETH",
			decimals: 18,
		},
		{
			id: 2,
			symbol: "BTC",
			name: "Bitcoin",
			price: 63425.82,
			network: "BTC",
			decimals: 8,
		},
	];

	const onChangeMock = jest.fn();

	beforeEach(() => {
		onChangeMock.mockClear();
	});

	test("renders loading spinner when token is undefined", () => {
		render(<TokenSelector tokens={tokens} onChange={onChangeMock} amount="" />);
		const spinnerElement = screen.getByTestId("spinner");
		expect(spinnerElement).toBeInTheDocument();
	});

	test("renders token options when token is defined", () => {
		const selectedToken = tokens[0];
		render(
			<TokenSelector
				token={selectedToken}
				tokens={tokens}
				onChange={onChangeMock}
				amount=""
			/>,
		);

		// Token selector rendered
		expect(screen.getByTestId("tokenSelector")).toBeInTheDocument();

		// Verify that the selected token is displayed correctly
		expect(screen.getByText(selectedToken.name)).toBeInTheDocument();
	});

	test("calls onChange when token selection changes", () => {
		const selectedToken = tokens[0];
		render(
			<TokenSelector
				token={selectedToken}
				tokens={tokens}
				onChange={onChangeMock}
				amount=""
			/>,
		);

		const mySelectComponent = screen.getByTestId("tokenSelector");

		expect(mySelectComponent).toBeDefined();
		expect(mySelectComponent).not.toBeNull();
		expect(onChangeMock).toHaveBeenCalledTimes(0);

		fireEvent.keyDown(mySelectComponent.firstChild!, { key: "ArrowDown" });
		const option = screen.getByText("Bitcoin");
		fireEvent.click(option);
		const newSelectedToken = tokens[1];

		expect(onChangeMock).toHaveBeenCalledWith(newSelectedToken, "");
	});

	test("calls onChange when amount input changes", () => {
		const selectedToken = tokens[1];
		render(
			<TokenSelector
				token={selectedToken}
				tokens={tokens}
				onChange={onChangeMock}
				amount={"10"}
			/>,
		);
		const input = screen.getByDisplayValue("10");
		expect(input).toBeDefined();

		expect(screen.getByText(/634,258.00/)).toBeInTheDocument();

		fireEvent.change(input!, { target: { value: "99.12345678" } });
		expect(onChangeMock).toHaveBeenCalledWith(selectedToken, "99.12345678");

		fireEvent.change(input!, { target: { value: "10.1234" } });
		expect(onChangeMock).toHaveBeenCalledWith(selectedToken, "10.1234");
	});

	test("renders token price =  token price * amount", () => {
		const selectedToken = tokens[1];
		render(
			<TokenSelector
				token={selectedToken}
				tokens={tokens}
				onChange={onChangeMock}
				amount={"99.12345678"}
			/>,
		);
		const input = screen.getByDisplayValue("99.12345678");
		expect(input).toBeDefined();

		debug();
		//99.12345678×63425.82 = 6286986,52750606
		expect(screen.getByText(/6,286,986.00/)).toBeInTheDocument();
	});
});

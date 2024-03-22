import { render, screen, fireEvent } from "@testing-library/react";
import TokenSelector, { TokenWithPrice } from "../tokenSelector";

describe("TokenSelector", () => {
    const tokens: TokenWithPrice[] = [
        { id: 1, symbol: "ETH", name: "Ethereum", price: 2000, network: "ETH", decimals: 18 },
        { id: 2, symbol: "BTC", name: "Bitcoin", price: 50000, network: "BTC", decimals: 8 },
    ];

    const onChangeMock = jest.fn();

    beforeEach(() => {
        onChangeMock.mockClear();
    });

    test("renders loading spinner when token is undefined", () => {
        render(<TokenSelector tokens={tokens} onChange={onChangeMock} />);
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
            />
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
            />
        );


        const mySelectComponent = screen.getByTestId("tokenSelector");

        expect(mySelectComponent).toBeDefined();
        expect(mySelectComponent).not.toBeNull();
        expect(onChangeMock).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(mySelectComponent.firstChild!, { key: 'ArrowDown' });
        const option = screen.getByText('Bitcoin');
        fireEvent.click(option);
        const newSelectedToken = tokens[1];

        expect(onChangeMock).toHaveBeenCalledWith(newSelectedToken, 0);
    });

    test("calls onChange when amount input changes", () => {
        const selectedToken = tokens[0];
        render(
            <TokenSelector
                token={selectedToken}
                tokens={tokens}
                onChange={onChangeMock}
                amount={1}
            />
        );

        const input = screen.getByDisplayValue('1');
        expect(input).toBeDefined();


        fireEvent.change(input!, { target: { value: "10" } });

        expect(onChangeMock).toHaveBeenCalledWith(selectedToken, 10);
    });
});

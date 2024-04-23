import type { DetailedOrder } from "@/types";
import { describe, expect, jest, test } from "@jest/globals";
import { BN_ONE } from "@polkadot/util";
import { fireEvent, render, screen } from "@testing-library/react";
import OrderBook from "../orderBook";

describe("OrderBook", () => {
	const token1 = {
		id: 1,
		symbol: "ETH",
		name: "Ethereum",
		network: "ETH",
		decimals: 18,
	};
	const token2 = {
		id: 2,
		symbol: "BTC",
		name: "Bitcoin",
		network: "BTC",
		decimals: 8,
	};
	const orders: DetailedOrder[] = [
		{
			pubkey: "0x123",
			counter: 1,
			orderType: "BUY",
			pair: [1, 2],
			expiration: 100,
			amountOffered: BN_ONE,
			amoutRequested: BN_ONE,
			token1,
			token2,
		},
		{
			pubkey: "0x124",
			counter: 2,
			orderType: "SELL",
			pair: [1, 2],
			expiration: 100,
			amountOffered: BN_ONE,
			amoutRequested: BN_ONE,
			token1,
			token2,
		},
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("renders order book component", () => {
		render(<OrderBook onChange={jest.fn()} orders={[]} />);
	});

	test("renders without orders", () => {
		render(<OrderBook onChange={jest.fn()} orders={[]} />);
		expect(screen.getByText("Order book")).toBeInTheDocument();
		expect(screen.getByText("No asks found")).toBeInTheDocument();
		expect(screen.getByText("No bids found")).toBeInTheDocument();
	});

	test("renders with orders", () => {
		render(
			<OrderBook
				sellToken={token1}
				buyToken={token2}
				onChange={jest.fn()}
				orders={orders}
			/>,
		);
		expect(screen.getByText("Order book")).toBeInTheDocument();
		expect(screen.queryByText("No asks found")).toBeNull();
		expect(screen.queryByText("No bids found")).toBeNull();
	});

	test("calls onChange when a buy order is not selected", () => {
		const onChange = jest.fn();
		render(
			<OrderBook
				sellToken={token1}
				buyToken={token2}
				onChange={onChange}
				orders={orders}
			/>,
		);
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	test("on change shouldn't be called if orders is reverse", () => {
		const onChange = jest.fn();
		const ordersTmp: DetailedOrder[] = [
			{
				pubkey: "0x123",
				counter: 1,
				orderType: "SELL",
				pair: [1, 2],
				expiration: 100,
				amountOffered: BN_ONE,
				amoutRequested: BN_ONE,
				token1,
				token2,
			},
		];
		render(
			<OrderBook
				sellToken={token1}
				buyToken={token2}
				onChange={onChange}
				orders={ordersTmp}
			/>,
		);
		expect(onChange).toHaveBeenCalledTimes(0);
		expect(screen.getByText("No bids found")).toBeInTheDocument();
	});

	test("calls onChange when a buy order is clicked", () => {
		const onChange = jest.fn();
		const ordersTmp: DetailedOrder[] = [
			{
				pubkey: "0x123",
				counter: 1,
				orderType: "BUY",
				pair: [1, 2],
				expiration: 100,
				amountOffered: BN_ONE,
				amoutRequested: BN_ONE,
				token1,
				token2,
			},
			{
				pubkey: "0x123",
				counter: 2,
				orderType: "BUY",
				pair: [1, 2],
				expiration: 100,
				amountOffered: BN_ONE,
				amoutRequested: BN_ONE,
				token1,
				token2,
			},
		];

		render(
			<OrderBook
				sellToken={token1}
				buyToken={token2}
				onChange={onChange}
				orders={ordersTmp}
			/>,
		);
		expect(screen.getByText("No asks found")).toBeInTheDocument();

		const tr = screen.getAllByRole("row");
		fireEvent.click(tr[1]);
		expect(onChange).toHaveBeenCalledTimes(1);
		fireEvent.click(tr[0]);
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	test("can't click on the ask orders", () => {
		const onChange = jest.fn();
		const ordersTmp: DetailedOrder[] = [
			{
				pubkey: "0x123",
				counter: 1,
				orderType: "SELL",
				pair: [1, 2],
				expiration: 100,
				amountOffered: BN_ONE,
				amoutRequested: BN_ONE,
				token1,
				token2,
			},
			{
				pubkey: "0x123",
				counter: 2,
				orderType: "SELL",
				pair: [1, 2],
				expiration: 100,
				amountOffered: BN_ONE,
				amoutRequested: BN_ONE,
				token1,
				token2,
			},
		];
		render(
			<OrderBook
				sellToken={token1}
				buyToken={token2}
				onChange={onChange}
				orders={ordersTmp}
			/>,
		);

		expect(screen.getByText("No bids found")).toBeInTheDocument();

		const tr = screen.getAllByRole("row");
		fireEvent.click(tr[1]);
		expect(onChange).toHaveBeenCalledTimes(0);
	});
});

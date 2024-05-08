import { bn, bnE6, bnE18, lg } from "@/services/utils";
import type { DetailedOrder } from "@/types";
import { BN_MILLION, BN_ONE, BN_THOUSAND } from "@polkadot/util";
import { render, screen } from "@testing-library/react";
import { debug } from "jest-preview";
import OrdersList from "../orderList";

describe("OrdersList", () => {
	const orders: DetailedOrder[] = [
		{
			counter: 1,
			pair: [0, 1],
			token2: {
				id: 1,
				name: "USDT",
				symbol: "USDT",
				decimals: 6,
				network: "ETH",
			},
			token1: {
				id: 0,
				name: "ETH",
				symbol: "ETH",
				decimals: 18,
				network: "ETH",
			},
			amoutRequested: BN_ONE.mul(bnE6),
			amountOffered: BN_MILLION.mul(bn(100)).mul(bnE18),
			pubkey: "0x123",
			expiration: Date.now() + 10000,
			orderType: "SELL",
		},
		{
			counter: 2,
			pair: [0, 1],
			token2: {
				id: 1,
				name: "USDT",
				symbol: "USDT",
				decimals: 6,
				network: "ETH",
			},
			token1: {
				id: 0,
				name: "ETH",
				symbol: "ETH",
				decimals: 18,
				network: "ETH",
			},
			amoutRequested: BN_ONE.mul(bnE6),
			amountOffered: BN_THOUSAND.mul(bnE18),
			pubkey: "0x123",
			expiration: Date.now() + 10000,
			orderType: "SELL",
		},
		{
			counter: 3,
			pair: [0, 1],
			token2: {
				id: 1,
				name: "USDT",
				symbol: "USDT",
				decimals: 6,
				network: "ETH",
			},
			token1: {
				id: 0,
				name: "ETH",
				symbol: "ETH",
				decimals: 18,
				network: "ETH",
			},
			amoutRequested: BN_ONE.mul(bnE6),
			amountOffered: BN_ONE.mul(bnE18),
			pubkey: "0x123",
			expiration: Date.now() + 10000,
			orderType: "SELL",
		},
		{
			counter: 4,
			pair: [0, 1],
			token2: {
				id: 1,
				name: "USDT",
				symbol: "USDT",
				decimals: 6,
				network: "ETH",
			},
			token1: {
				id: 0,
				name: "ETH",
				symbol: "ETH",
				decimals: 18,
				network: "ETH",
			},
			amoutRequested: BN_THOUSAND.mul(bnE6),
			amountOffered: BN_ONE.mul(bnE18),
			pubkey: "0x123",
			expiration: Date.now() + 10000,
			orderType: "SELL",
		},
	];

	test("renders the order list correctly", () => {
		render(
			<OrdersList
				orders={orders}
				cancelOrder={jest.fn()}
				isInitialized={true}
			/>,
		);

		expect(screen.getByText("My orders")).toBeInTheDocument();

		expect(screen.getByText("Order")).toBeInTheDocument();
		expect(screen.getByText("Buy")).toBeInTheDocument();
		expect(screen.getByText("Price")).toBeInTheDocument();
		expect(screen.getByText("Sell")).toBeInTheDocument();
		expect(screen.getByText("Expire in")).toBeInTheDocument();
		expect(screen.getByText("Actions")).toBeInTheDocument();

		const elem = screen.getAllByRole("row");
		expect(elem.length).toBe(6); // 4 orders + header + ruler
		debug();
		//check prices
		expect(screen.getByText("0.00000001 USDT")).toBeInTheDocument();
		expect(screen.getByText("0.00100000 USDT")).toBeInTheDocument();
		expect(screen.getByText("1.00 USDT")).toBeInTheDocument();
		expect(screen.getByText("1000.00 USDT")).toBeInTheDocument();
	});

	test("empty order list", () => {
		render(
			<OrdersList orders={[]} cancelOrder={jest.fn()} isInitialized={true} />,
		);
		lg("orderlist test2");
		expect(screen.getByText("My orders")).toBeInTheDocument();
		expect(screen.getByText("No orders found")).toBeInTheDocument();
	});
});

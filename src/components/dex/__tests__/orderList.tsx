import { render, screen } from "@testing-library/react";
import OrdersList from "../orderList";
import { DetailedOrder } from "@/types";
import { BN_TEN } from "@polkadot/util";

describe("OrdersList", () => {
    const orders: DetailedOrder[] = [
        {
            counter: 1,
            pair: [0, 1],
            token1: { id: 0, name: "ETH", symbol: "ETH", decimals: 18, network: "ETH" },
            token2: { id: 1, name: "USDT", symbol: "ETH", decimals: 6, network: "ETH" },
            amoutRequested: BN_TEN,
            amountOffered: BN_TEN,
            pubkey: "0x123",
            expiration: Date.now() + 10000,
            orderType: "BUY",
        },
        {
            counter: 12,
            pair: [0, 1],
            token1: { id: 0, name: "ETH", symbol: "ETH", decimals: 18, network: "ETH" },
            token2: { id: 1, name: "USDT", symbol: "USDT", decimals: 6, network: "ETH" },
            amoutRequested: BN_TEN,
            amountOffered: BN_TEN,
            pubkey: "0x123",
            expiration: Date.now() + 10000,
            orderType: "SELL",
        },

    ];


    test("renders the order list correctly", () => {
        render(<OrdersList orders={orders} cancelOrder={jest.fn()} />);

        expect(screen.getByText("My orders")).toBeInTheDocument();

        expect(screen.getByText("Order")).toBeInTheDocument();
        expect(screen.getByText("Buy")).toBeInTheDocument();
        expect(screen.getByText("Price")).toBeInTheDocument();
        expect(screen.getByText("Sell")).toBeInTheDocument();
        expect(screen.getByText("Expire in")).toBeInTheDocument();
        expect(screen.getByText("Actions")).toBeInTheDocument();

        const elem = screen.getAllByRole("row");
        expect(elem.length).toBe(4); // 2 orders + header + ruler
    });

    test("empty order list", () => {
        render(<OrdersList orders={[]} cancelOrder={jest.fn()} />);
        expect(screen.getByText("My orders")).toBeInTheDocument();
        expect(screen.getByText("No orders found")).toBeInTheDocument();
    });

});

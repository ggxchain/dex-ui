import { render, screen, fireEvent } from "@testing-library/react";
import Dex from "@/app/dex/page"
import { BN_TEN } from "@polkadot/util";

import '@/__utils__/localstore.mock'
import mockedTokens from "@/mock";
import Contract from "@/services/api";
import { act } from "react-dom/test-utils";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    }
}));



jest.mock("../../services/cex", () => ({
    __esModule: true,
    default: class CexService {
        async tokenPrices(tokens: string[]): Promise<Map<string, number>> {
            return new Map<string, number>(tokens.map((token) => [token, 1]));
        }
    }
}));

describe("Dex", () => {
    beforeEach(() => {
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.localStorage.setItem('ggx-wallet-selected-account', JSON.stringify({ address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC" }));

        Contract.setMocked(true);

        const contract = new Contract();
        contract.deposit(0, BN_TEN.muln(2), () => { });
        contract.makeOrder([0, 1], BN_TEN, BN_TEN, "SELL", 1, () => { });
    });

    test("renders default component", async () => {
        await act(() => render(<Dex />));

        expect(screen.getByText("My orders")).toBeInTheDocument();
        expect(screen.getByText("Order book")).toBeInTheDocument();

        const elem = Array.prototype.slice.call(screen.getByText("My orders").parentElement?.querySelectorAll("tr"));
        expect(elem.length).toBe(2); // 1 orders + header

        expect(screen.getByText("No asks found")).toBeInTheDocument();
        expect(screen.getByText("No bids found")).toBeInTheDocument();
    });

    test("change token selector, enables bids", async () => {
        window.localStorage.setItem('ggx-wallet-selected-account', JSON.stringify({ address: "blahblah" }));
        await act(() => render(<Dex />));

        expect(screen.getByText("My orders")).toBeInTheDocument();
        expect(screen.getByText("No orders found")).toBeInTheDocument();
        expect(screen.getByText("Order book")).toBeInTheDocument();
        expect(screen.getByText("No asks found")).toBeInTheDocument();
        expect(screen.getByText("No bids found")).toBeInTheDocument();

        const tokenSelector = screen.getAllByTestId("tokenSelector")[1].firstChild!;
        fireEvent.keyDown(tokenSelector, { key: "ArrowDown" });
        const option = screen.getByText(mockedTokens()[1].symbol);
        await act(() => fireEvent.click(option));

        expect(screen.queryByText("No asks found")).toBeNull();
        expect(screen.queryByText("No bids found")).toBeInTheDocument();
    });

    test("change token selector, enables asks", async () => {
        window.localStorage.setItem('ggx-wallet-selected-account', JSON.stringify({ address: "blahblah" }));
        await act(() => render(<Dex />));

        expect(screen.getByText("My orders")).toBeInTheDocument();
        expect(screen.getByText("No orders found")).toBeInTheDocument();
        expect(screen.getByText("Order book")).toBeInTheDocument();
        expect(screen.getByText("No asks found")).toBeInTheDocument();
        expect(screen.getByText("No bids found")).toBeInTheDocument();

        const tokenSelector = screen.getAllByTestId("tokenSelector")[0].firstChild!;
        fireEvent.keyDown(tokenSelector, { key: "ArrowDown" });
        const option = screen.getByText(mockedTokens()[1].symbol);
        await act(() => fireEvent.click(option));

        expect(screen.queryByText("No bids found")).toBeNull();
        expect(screen.queryByText("No asks found")).toBeInTheDocument();
    });

    test("Taker has two forms", async () => {
        await act(() => render(<Dex />));
        let taker = screen.getByText("Taker order");
        expect(taker).toBeInTheDocument();
        act(() => fireEvent.click(taker));
        expect(Array.prototype.slice.call(screen.getAllByTestId("tokenSelector")).length).toBe(2);
        expect(screen.queryByTestId("expireSelect")).toBeNull();


        let maker = screen.getByText("Maker order");
        expect(maker).toBeInTheDocument();
        act(() => fireEvent.click(maker));
        expect(Array.prototype.slice.call(screen.getAllByTestId("tokenSelector")).length).toBe(2);
        expect(screen.getByTestId("expireSelect")).toBeInTheDocument();
    });

    test("Balance is displayed", async () => {
        await act(() => render(<Dex />));
        const available = screen.getByText("Available:");
        expect(available).toBeInTheDocument();
        const balance = available.getElementsByTagName("span")[0];
        expect(balance).toBeInTheDocument();
        expect(balance.textContent).toBe(" 0.00001 USDT");

        const selector = screen.getAllByTestId("tokenSelector")[0].firstChild!;
        fireEvent.keyDown(selector, { key: "ArrowDown" });
        const option = screen.getByText(mockedTokens()[1].symbol);
        await act(() => fireEvent.click(option));

        const balanceNew = available.getElementsByTagName("span")[0];
        expect(balanceNew).toBeInTheDocument();
        expect(balanceNew.textContent).toBe(" 0 BTC");
    });

    test("Clear form", async () => {
        await act(() => render(<Dex />));

        const selector = screen.getAllByTestId("tokenSelector")[0].firstChild!;
        fireEvent.keyDown(selector, { key: "ArrowDown" });
        const option = screen.getByText(mockedTokens()[1].symbol);
        await act(() => fireEvent.click(option));

        expect(screen.getByText(mockedTokens()[1].network)).toBeInTheDocument();

        const clear = screen.getByText("Clear");
        await act(() => fireEvent.click(clear));
    });
});

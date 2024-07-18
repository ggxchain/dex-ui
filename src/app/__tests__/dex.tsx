import Dex from "@/app/dex/page";
import { BN_ONE, BN_TEN } from "@polkadot/util";
import { fireEvent, render, screen } from "@testing-library/react";

import "@/__utils__/localstore.mock";
import mockedTokens from "@/mock";
import Contract from "@/services/api";
import GgxNetworkMock from "@/services/api/mock";
import { act } from "react-dom/test-utils";

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
		};
	},
}));

jest.mock("../../services/cex", () => ({
	__esModule: true,
	default: class CexService {
		async tokenPrices(tokens: string[]): Promise<Map<string, number>> {
			return new Map<string, number>(tokens.map((token) => [token, 1]));
		}
	},
}));

describe("Dex", () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.sessionStorage.clear();
		window.localStorage.setItem(
			"ggx-wallet-selected-account",
			JSON.stringify({
				address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC",
			}),
		);

		const mockapi = new GgxNetworkMock();
		const contract = new Contract(mockapi);
		contract.deposit(0, BN_TEN.muln(2), () => {});
		contract.makeOrder([0, 1], BN_TEN, BN_TEN, "SELL", BN_ONE, () => {});
	});

	test("renders default component", async () => {
		await act(() =>
			render(
				<Dex
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);

		expect(screen.getByText("My orders")).toBeInTheDocument();
		expect(screen.getByText("Order book")).toBeInTheDocument();

		const elem = Array.prototype.slice.call(
			screen.getByText("My orders").parentElement?.querySelectorAll("tr"),
		);
		expect(elem.length).toBe(3); // 1 orders + header + ruler
	});

	test("change token selector, enables bids", async () => {
		window.localStorage.setItem(
			"ggx-wallet-selected-account",
			JSON.stringify({ address: "blahblah" }),
		);
		await act(() =>
			render(
				<Dex
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);

		expect(screen.getByText("My orders")).toBeInTheDocument();
		expect(screen.getByText("No orders found")).toBeInTheDocument();
		expect(screen.getByText("Order book")).toBeInTheDocument();

		const tokenSelector = screen.getAllByTestId("tokenSelector")[1].firstChild!;
		await act(() => fireEvent.keyDown(tokenSelector, { key: "ArrowDown" }));
		const option = screen.getAllByText(mockedTokens()[1].symbol);
		await act(() => fireEvent.click(option[0]));

		expect(screen.queryByText("No asks found")).toBeNull();
		expect(screen.queryByText("No bids found")).toBeInTheDocument();
	});

	test("Balance is displayed", async () => {
		await act(() =>
			render(
				<Dex
					params={{ isMocked: true, slug: "" }}
					searchParams={{ pair: undefined }}
				/>,
			),
		);
		const available = await screen.findByTestId("available-label");
		expect(available).toBeInTheDocument();
		const balance = await screen.findByTestId("available-balance");
		expect(balance).toBeInTheDocument();
		expect(balance.textContent).toBe(" 0.000000000000001 USDT");

		const selector = screen.getAllByTestId("tokenSelector")[0].firstChild!;
		await act(() => fireEvent.keyDown(selector, { key: "ArrowDown" }));
		const option = screen.getAllByText(mockedTokens()[1].symbol);
		await act(() => fireEvent.click(option[0]));

		const balanceNew = await screen.findByTestId("available-balance");
		expect(balanceNew).toBeInTheDocument();
		expect(balanceNew.textContent).toBe(" 0.000000000000001 USDT");
	});
});

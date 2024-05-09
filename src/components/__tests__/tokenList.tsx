import { BN_TEN } from "@polkadot/util";
import { act, render, screen } from "@testing-library/react";
import TokenList, { type ListElement } from "../tokenList";

describe("OrdersList", () => {
	const tokens: ListElement[] = [
		{
			id: 0,
			name: "ETH",
			symbol: "ETH",
			network: "ETH",
			decimals: 18,
			balance: BN_TEN,
			estimatedPrice: 3196.47,
			url: "/svg/eth.svg",
			onChainBalance: BN_TEN,
		},
		{
			id: 1,
			name: "USDT",
			symbol: "USDT",
			network: "ETH",
			decimals: 6,
			balance: BN_TEN,
			estimatedPrice: 1.0001,
			url: "/svg/usdt.svg",
			onChainBalance: BN_TEN,
		},
		{
			id: 2,
			name: "USDC",
			symbol: "USDC",
			network: "ETH",
			decimals: 6,
			balance: BN_TEN,
			estimatedPrice: 0.9997,
			url: "/svg/usdc.svg",
			onChainBalance: BN_TEN,
		},
		{
			id: 3,
			name: "BNB",
			symbol: "BNB",
			network: "BNB Chain",
			decimals: 8,
			balance: BN_TEN,
			estimatedPrice: 601.87,
			url: "/svg/bnb.svg",
			onChainBalance: BN_TEN,
		},
		{
			id: 4,
			name: "Shiba Inu",
			symbol: "SHIB",
			network: "ETH",
			decimals: 18,
			balance: BN_TEN,
			estimatedPrice: 0.000026551234,
			url: "/svg/shiba.svg",
			onChainBalance: BN_TEN,
		},
		{
			id: 5,
			name: "Bitcoin",
			symbol: "BTC",
			network: "BTC",
			decimals: 8,
			balance: BN_TEN,
			estimatedPrice: 66291.53,
			url: "/svg/btc.svg",
			onChainBalance: BN_TEN,
		},
	];

	test("render empty token list", async () => {
		await act(() => render(<TokenList tokens={[]} />));
		setTimeout((done) => {
			expect(screen.getByText("No tokens found")).toBeInTheDocument();
			done();
		}, 2000);
	});

	test("render correctly without onchaindata", async () => {
		await act(() => render(<TokenList tokens={tokens} />));
		expect(screen.queryByText("No tokens found")).toBeNull();
		expect(screen.queryByText("On-chain balance")).toBeNull();
		expect(screen.getByAltText("ETH icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDT icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDC icon")).toBeInTheDocument();

		const rows = screen.getAllByRole("row");
		expect(rows.length).toBe(7); // 6 tokens + header
	});

	test("render correctly with onchaindata", async () => {
		await act(() => render(<TokenList tokens={tokens} onChain={true} />));
		expect(screen.queryByText("No tokens found")).toBeNull();
		expect(screen.getByText("On chain balance")).toBeInTheDocument();
		expect(screen.getByAltText("ETH icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDT icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDC icon")).toBeInTheDocument();

		const rows = screen.getAllByRole("row");
		expect(rows.length).toBe(7); // 6 tokens + header
	});

	test("render token amount correctly", async () => {
		const { getByRole, findAllByRole } = await act(() =>
			render(<TokenList tokens={tokens} onChain={true} isInitialized={true} />),
		);

		let box: HTMLElement;
		box = screen.getByTestId("price-ETH");
		expect(box.innerHTML).toBe("$3,196.47");
		box = screen.getByTestId("price-USDT");
		expect(box.innerHTML).toBe("$1.00");
		box = screen.getByTestId("price-USDC");
		expect(box.innerHTML).toBe("$0.9997");
		box = screen.getByTestId("price-BNB");
		expect(box.innerHTML).toBe("$601.87");
		box = screen.getByTestId("price-SHIB");
		expect(box.innerHTML).toBe("$0.00002655");
		box = screen.getByTestId("price-BTC");
		expect(box.innerHTML).toBe("$66,291.53");
	});
});

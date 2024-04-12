import { BN_TEN } from "@polkadot/util";
import { render, screen } from "@testing-library/react";
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
			estimatedPrice: 1000,
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
			estimatedPrice: 1,
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
			estimatedPrice: 1,
			url: "/svg/usdc.svg",
			onChainBalance: BN_TEN,
		},
	];

	test("render empty token list", async() => {
		render(<TokenList tokens={[]} />);
		setTimeout((done) => {
			expect(screen.getByText("No tokens found")).toBeInTheDocument()
			done();
		}, 2000);
	});

	test("render correctly without onchaindata", () => {
		render(<TokenList tokens={tokens} />);
		expect(screen.queryByText("No tokens found")).toBeNull();
		expect(screen.queryByText("On-chain balance")).toBeNull();
		expect(screen.getByAltText("ETH icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDT icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDC icon")).toBeInTheDocument();

		const rows = screen.getAllByRole("row");
		expect(rows.length).toBe(4); // 3 tokens + header
	});

	test("render correctly with onchaindata", () => {
		render(<TokenList tokens={tokens} onChain={true} />);
		expect(screen.queryByText("No tokens found")).toBeNull();
		expect(screen.getByText("On chain balance")).toBeInTheDocument();
		expect(screen.getByAltText("ETH icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDT icon")).toBeInTheDocument();
		expect(screen.getByAltText("USDC icon")).toBeInTheDocument();

		const rows = screen.getAllByRole("row");
		expect(rows.length).toBe(4); // 3 tokens + header
	});
});

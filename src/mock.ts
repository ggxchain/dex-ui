import type { Token } from "./types";

// Returns a list of tokens
export default function mockedTokens(): Token[] {
	return [
		{
			id: 0,
			name: "USDT",
			symbol: "USDT",
			network: "ERC20",
			decimals: 6,
		},
		{
			id: 1,
			name: "BTC",
			symbol: "BTC",
			network: "Bitcoin",
			decimals: 8,
		},
		{
			id: 2,
			name: "USDC",
			symbol: "USDC",
			network: "ERC20",
			decimals: 6,
		},
		{
			id: 3,
			name: "ATOM",
			symbol: "ATOM",
			network: "Cosmos",
			decimals: 6,
		},
		{
			id: 4,
			name: "ETH",
			symbol: "ETH",
			network: "Ethereum",
			decimals: 18,
		},
	];
}

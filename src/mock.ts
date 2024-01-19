import { Token } from "./types";

// Returns a list of tokens
export default function mockedTokens(): Token[] {
    return [
        {
            "id": { u64: 1 },
            "name": "USDT",
            "symbol": "usdt",
            "network": "ERC20",
        },
        {
            "id": { u128: 2 },
            "name": "BTC",
            "symbol": "btc",
            "network": "Bitcoin",
        },
        {
            "id": { u64: 3 },
            "name": "USDC",
            "symbol": "usdc",
            "network": "ERC20",
        },
        {
            "id": { u16: 9 },
            "name": "ATOM",
            "symbol": "atom",
            "network": "Cosmos",
        },
        {
            "id": { u64: 11 },
            "name": "ETH",
            "symbol": "eth",
            "network": "Ethereum",
        }
    ]
}

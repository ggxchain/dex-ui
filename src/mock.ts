import { Token } from "./types";

// Returns a list of tokens
export default function mockedTokens(): Token[] {
    return [
        {
            "id": 0,
            "name": "USDT",
            "symbol": "usdt",
            "network": "ERC20",
        },
        {
            "id": 1,
            "name": "BTC",
            "symbol": "btc",
            "network": "Bitcoin",
        },
        {
            "id": 2,
            "name": "USDC",
            "symbol": "usdc",
            "network": "ERC20",
        },
        {
            "id": 3,
            "name": "ATOM",
            "symbol": "atom",
            "network": "Cosmos",
        },
        {
            "id": 4,
            "name": "ETH",
            "symbol": "eth",
            "network": "Ethereum",
        }
    ]
}

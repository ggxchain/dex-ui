import { Token } from "./types";

// Returns a list of tokens
export default function mockedTokens(): Token[] {
    return [
        {
            "id": 1,
            "name": "USDT",
            "symbol": "usdt",
            "network": "ERC20",
        },
        {
            "id": 2,
            "name": "BTC",
            "symbol": "btc",
            "network": "Bitcoin",
        },
        {
            "id": 3,
            "name": "USDC",
            "symbol": "usdc",
            "network": "ERC20",
        },
        {
            "id": 4,
            "name": "ATOM",
            "symbol": "atom",
            "network": "Cosmos",
        },
        {
            "id": 5,
            "name": "ETH",
            "symbol": "eth",
            "network": "Ethereum",
        }
    ]
}

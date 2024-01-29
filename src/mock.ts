import { Token } from "./types";

// Returns a list of tokens
export default function mockedTokens(): Token[] {
    return [
        {
            "id": 0,
            "name": "USDT",
            "symbol": "usdt",
            "network": "ERC20",
            "decimals": 6,
        },
        {
            "id": 1,
            "name": "BTC",
            "symbol": "btc",
            "network": "Bitcoin",
            "decimals": 12,
        },
        {
            "id": 2,
            "name": "USDC",
            "symbol": "usdc",
            "network": "ERC20",
            "decimals": 6,
        },
        {
            "id": 3,
            "name": "ATOM",
            "symbol": "atom",
            "network": "Cosmos",
            "decimals": 6,
        },
        {
            "id": 4,
            "name": "ETH",
            "symbol": "eth",
            "network": "Ethereum",
            "decimals": 18,
        }
    ]
}

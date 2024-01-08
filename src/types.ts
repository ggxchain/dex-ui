import Pair from "./pair"

export type TokenId = number
export type Amount = number
export type PubKey = string
export type CounterId = number
export type OrderType = "Buy" | "Sell"

export type Token = {
    id: TokenId;
    name: string;
    symbol: string;
    network: string;
}

export type Order = {
    pubkey: PubKey;
    pair: Pair;
    counterId: CounterId;
    timestamp: number;
    orderType: OrderType
    amountOffered: Amount;
    amountDesired: Amount;
}

export type DetailedOrder = Order & {
    token1: Token;
    token2: Token;
}

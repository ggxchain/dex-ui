import Pair from "./pair"

type U8 = { u8: number };
type U16 = { u16: number };
type U32 = { u32: number };
type U64 = { u64: number };
type U128 = { u128: number };

export type TokenId = number;

export type Amount = number
export type PubKey = string
export type CounterId = number
export type OrderType = "BUY" | "SELL"

export type Token = {
    id: TokenId;
    name: string;
    symbol: string;
    network: string;
}

export type Order = {
    pubkey: PubKey;
    pair: Pair;
    counter: CounterId;
    timestamp: number;
    orderType: OrderType
    amountOffered: Amount;
    amoutRequested: Amount;
}

export type DetailedOrder = Order & {
    token1: Token;
    token2: Token;
}

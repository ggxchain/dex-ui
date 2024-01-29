import { BN } from "@polkadot/util";
import Pair from "./pair"

export type TokenId = number;

export type Amount = BN
export type PubKey = string
export type CounterId = number
export type OrderType = "BUY" | "SELL"

export type Token = {
    id: TokenId;
    name: string;
    symbol: string;
    network: string;
    decimals: number;
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

import { BN } from "@polkadot/util";
import Order from "./order";

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

export type DetailedOrder = Order & {
    token1: Token;
    token2: Token;
}

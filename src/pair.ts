import { OrderType, TokenId } from "./types";

type Pair = [TokenId, TokenId];

export default Pair;

export class PairUtils {
    static ownedToken(pair: Pair, orderType: OrderType): TokenId {
        return orderType === "BUY" ? pair[0] : pair[1];
    }

    static desiredToken(pair: Pair, orderType: OrderType): TokenId {
        return orderType === "BUY" ? pair[1] : pair[0];
    }

    static string(pair: Pair): string {
        return `${pair[0]}-${pair[1]}`;
    }
}

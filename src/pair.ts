import { OrderType, TokenId } from "./types";

type Pair = [TokenId, TokenId];

export default Pair;

export class PairUtils {
    static ownedToken(pair: Pair, orderType: OrderType): TokenId {
        return orderType === "SELL" ? pair[0] : pair[1];
    }

    static desiredToken(pair: Pair, orderType: OrderType): TokenId {
        return orderType === "SELL" ? pair[1] : pair[0];
    }

    static string(pair: Pair): string {
        return `${JSON.stringify(pair[0])}-${JSON.stringify(pair[1])}`;
    }

    static reverse(pair: Pair): Pair {
        return [pair[1], pair[0]];
    }
}

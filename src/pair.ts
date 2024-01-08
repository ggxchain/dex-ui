import { OrderType, TokenId } from "./types";

export default class Pair {
    tokenId1: TokenId;
    tokenId2: TokenId;
    orderType: OrderType;

    constructor(sell: TokenId, buy: TokenId) {
        if (sell < buy) {
            this.tokenId1 = sell;
            this.tokenId2 = buy;
            this.orderType = "Buy";
        } else {
            this.tokenId1 = buy;
            this.tokenId2 = sell;
            this.orderType = "Sell";
        }
    }

    // It's static cause we serialize it to json to save in session storage mock
    // and we can't save methods, only data
    static ownedToken(pair: Pair): TokenId {
        return pair.orderType === "Buy" ? pair.tokenId1 : pair.tokenId2;
    }

    static desiredToken(pair: Pair): TokenId {
        return pair.orderType === "Buy" ? pair.tokenId2 : pair.tokenId1;
    }

    static string(pair: Pair): string {
        return `${pair.tokenId1}-${pair.tokenId2}`;
    }
}

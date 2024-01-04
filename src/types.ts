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

export class Pair {
    tokenId1: TokenId;
    tokenId2: TokenId;
    orderType: OrderType;

    constructor(tokenId1: TokenId, tokenId2: TokenId) {
        if (tokenId1 < tokenId2) {
            this.tokenId1 = tokenId1;
            this.tokenId2 = tokenId2;
            this.orderType = "Buy";
        } else {
            this.tokenId1 = tokenId2;
            this.tokenId2 = tokenId1;
            this.orderType = "Sell";
        }
    }
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


type TokenId = number
type Amount = number
type PubKey = string
type CounterId = number
type OrderType = "Buy" | "Sell"

type Token = {
    id: TokenId;
    name: string;
    symbol: string;
    network: string;
}

class Pair {
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

type Order = {
    pubkey: PubKey;
    pair: Pair;
    counterId: CounterId;
    timestamp: number;
    orderType: OrderType
    amountOffered: Amount;
    amountDesired: Amount;
}

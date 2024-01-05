import mocked_tokens from "@/mock";
import GGXWallet from "./ggx";
import { Token, TokenId, CounterId, Order, Amount, Pair, PubKey } from "@/types";


export default class Contract {
    contract: ContractMock = new ContractMock();
    wallet: GGXWallet = new GGXWallet();

    constructor() { }

    async allTokens(): Promise<Token[]> {
        const tokens = [];
        var i = 0;
        while (true) {
            const tokenId = this.contract.tokenByIndex(i);
            if (tokenId === undefined) {
                break;
            }
            tokens.push(this.mapTokenIdToToken(tokenId));
            i++;
        }
        return Promise.resolve(tokens);
    }

    async allTokensOfOwner(): Promise<Token[]> {
        const tokens = [];
        var i = 0;
        while (true) {
            const tokenId = this.contract.ownersTokenByIndex(this.wallet.pubkey(), i);
            if (tokenId === undefined) {
                break;
            }
            tokens.push(this.mapTokenIdToToken(tokenId));
            i++;
        }
        return Promise.resolve(tokens);
    }

    async allOrders(pair: Pair): Promise<Order[]> {
        const orders = [];
        var i = 0;
        console.log(this);
        while (true) {
            const counterId = this.contract.pairOrderByIndex(pair, i);
            if (counterId === undefined) {
                break;
            }
            const order = this.contract.orderFor(counterId);
            if (order === undefined) {
                break;
            }
            orders.push(order);
            i++;
        }
        return Promise.resolve(orders);
    }


    // Probably, we would need to create a mapping for this on frontend.
    mapTokenIdToToken(tokenId: TokenId): Token {
        return mocked_tokens().find((value) => value.id === tokenId)!;
    }

    async balanceOf(tokenId: TokenId): Promise<Amount> {
        return Promise.resolve(this.contract.balanceOf(tokenId, this.wallet.pubkey()));
    }

    async deposit(tokenId: TokenId, amount: Amount) {
        this.contract.deposit(this.wallet.pubkey(), tokenId, amount);
    }

    async withdraw(tokenId: TokenId, amount: Amount) {
        this.contract.withdraw(this.wallet.pubkey(), tokenId, amount);
    }

    async cancelOrder(counterId: CounterId) {
        this.contract.cancelOrder(this.wallet.pubkey(), counterId);
    }

    async makeOrder(pair: Pair, amountOffered: Amount, amountDesired: Amount): Promise<CounterId> {
        return Promise.resolve(this.contract.makeOrder(this.wallet.pubkey(), pair, amountOffered, amountDesired))
    }
}

type TokenDepositMock = {
    tokenId: TokenId,
    amount: Amount
}

class ContractMock {
    deposits: Map<PubKey, TokenDepositMock[]> = new Map<PubKey, TokenDepositMock[]>();
    orders: Order[] = new Array<Order>();
    ordersByUser: Map<PubKey, CounterId[]> = new Map<PubKey, CounterId[]>();
    ordersByPair: Map<string, CounterId[]> = new Map<string, CounterId[]>();

    constructor() {
        const deposits = window.sessionStorage.getItem("contractDepositsMock");
        const orders = window.sessionStorage.getItem("contractOrdersMock");
        const ordersByUser = window.sessionStorage.getItem("contractOrdersByUserMock");
        const ordersByPair = window.sessionStorage.getItem("contractOrdersByPairMock");

        if (deposits !== null && orders !== null && ordersByUser !== null && ordersByPair !== null) {
            this.deposits = new Map(JSON.parse(deposits));
            this.orders = JSON.parse(orders);
            this.ordersByUser = new Map(JSON.parse(ordersByUser));
            this.ordersByPair = new Map(JSON.parse(ordersByPair));
        }
    }

    save() {
        window.sessionStorage.setItem("contractDepositsMock", JSON.stringify(Array.from(this.deposits.entries())));
        window.sessionStorage.setItem("contractOrdersMock", JSON.stringify(this.orders));
        window.sessionStorage.setItem("contractOrdersByUserMock", JSON.stringify(Array.from(this.ordersByUser.entries())));
        window.sessionStorage.setItem("contractOrdersByPairMock", JSON.stringify(Array.from(this.ordersByPair.entries())));
    }

    deposit(pubkey: PubKey, tokenId: TokenId, amount: Amount) {
        if (!this.deposits.has(pubkey)) {
            this.deposits.set(pubkey, new Array<TokenDepositMock>());
        }
        const deposit = this.deposits.get(pubkey);
        if (deposit === undefined) {
            //Should not happen as we initialized it above
            return;
        }
        const index = deposit.findIndex((value) => value.tokenId === tokenId);
        if (index !== -1) {
            deposit[index].amount += amount;
        } else {
            deposit.push({ tokenId: tokenId, amount });
        }
        this.save();
    }

    balanceOf(tokenId: number, account: string): number {
        const deposit = this.deposits.get(account);
        if (deposit === undefined) {
            return 0;
        }
        const index = deposit.findIndex((value) => value.tokenId === tokenId);
        if (index !== -1) {
            return deposit[index].amount;
        } else {
            return 0;
        }
    }

    tokenByIndex(index: number): TokenId | undefined {
        return mocked_tokens().at(index)?.id;
    }

    ownersTokenByIndex(pubkey: PubKey, index: number): TokenId | undefined {
        const deposit = this.deposits.get(pubkey);
        if (deposit === undefined) {
            return undefined;
        }
        return deposit.at(index)?.tokenId;
    }

    withdraw(pubkey: PubKey, tokenId: number, amount: number) {
        const deposit = this.deposits.get(pubkey);
        if (deposit === undefined) {
            return;
        }
        const index = deposit.findIndex((value) => value.tokenId === tokenId);
        if (index !== -1) {
            deposit[index].amount -= amount;
        }
        this.save();

    }

    orderFor(counterId: number): Order | undefined {
        return this.orders.find((value) => value.counterId === counterId);
    }

    pairOrderByIndex(pair: Pair, index: number): CounterId | undefined {
        const orders = this.ordersByPair.get(pair.string);
        if (orders === undefined) {
            return undefined;
        }
        return orders.at(index);
    }

    userOrderByIndex(pubkey: PubKey, index: number): CounterId | undefined {
        const orders = this.ordersByUser.get(pubkey);
        if (orders === undefined) {
            return undefined;
        }
        return orders.at(index);
    }

    makeOrder(pubkey: PubKey, pair: Pair, amountOffered: Amount, amountDesired: Amount): CounterId {
        const counterId = (this.orders.at(-1)?.counterId ?? 0) + 1;
        const order: Order = {
            pubkey,
            pair,
            counterId: counterId,
            timestamp: Date.now(),
            orderType: pair.orderType,
            amountOffered,
            amountDesired
        };
        this.orders.push(order);
        const ordersByUser = this.ordersByUser.get(pubkey);
        if (ordersByUser === undefined) {
            this.ordersByUser.set(pubkey, [counterId]);
        } else {
            ordersByUser.push(counterId);
        }

        const strPair = pair.string;
        const ordersByPair = this.ordersByPair.get(strPair);
        if (ordersByPair === undefined) {
            this.ordersByPair.set(strPair, [counterId]);
        } else {
            ordersByPair.push(counterId);
        }
        this.withdraw(pubkey, pair.ownedToken, amountOffered);
        this.matchOrders();
        this.save();

        return counterId;

    }

    cancelOrder(pubkey: PubKey, counterId: CounterId) {
        const orderId = this.orders.findIndex((value) => value.counterId === counterId);
        if (orderId === -1 || this.orders[orderId].pubkey !== pubkey) {
            return;
        }
        const order = this.orders[orderId];
        this.orders.splice(orderId, 1);

        const ordersByUser = this.ordersByUser.get(pubkey);
        const order_by_index = ordersByUser?.findIndex((value) => value === counterId);
        if (order_by_index !== undefined && order_by_index !== -1) {
            ordersByUser?.splice(order_by_index, 1);
        }

        const orderByPair = this.ordersByPair.get(order.pair.string);
        const orderByPair_index = orderByPair?.findIndex((value) => value === counterId);
        if (orderByPair_index !== undefined && orderByPair_index !== -1) {
            orderByPair?.splice(orderByPair_index, 1);
        }

        // Return tokens.
        this.deposit(pubkey, order.pair.ownedToken, order.amountOffered);

        this.save();

    }

    matchOrders() {
        this.ordersByPair.forEach((orders, _) => {
            const buyOrders = [];
            const sellOrders = [];

            for (const order of orders) {
                const order1 = this.orderFor(order);
                if (order1 === undefined) {
                    continue;
                }
                if (order1.orderType === "Buy") {
                    buyOrders.push(order1);
                } else {
                    sellOrders.push(order1);
                }
            }

            for (const buyOrder of buyOrders) {
                for (const sellOrder of sellOrders) {
                    if (simpleMatch(buyOrder, sellOrder)) {
                        // Transfer tokens
                        this.deposit(buyOrder.pubkey, buyOrder.pair.desiredToken, buyOrder.amountDesired);
                        this.deposit(sellOrder.pubkey, sellOrder.pair.desiredToken, sellOrder.amountDesired);

                        this.cancelOrder(buyOrder.pubkey, buyOrder.counterId);
                        this.cancelOrder(sellOrder.pubkey, sellOrder.counterId);

                        // We can break here because we know that there is only one possible match.
                        break;
                    }
                }
            }
        });
    }
}

function simpleMatch(order1: Order, order2: Order): boolean {
    return order1.amountOffered === order2.amountDesired && order1.amountDesired === order2.amountOffered && order1.orderType !== order2.orderType;
}

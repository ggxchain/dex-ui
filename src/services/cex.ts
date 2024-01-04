type Prices = Map<string, number>;

export default class CexService {
    async tokenPrice(token: string): Promise<number> {
        return Promise.resolve(Math.random() * 10);
    }

    async tokenPrices(tokens: string[]): Promise<Prices> {
        const prices = new Map<string, number>();
        tokens.forEach(token => prices.set(token, Math.random() * 10));
        return Promise.resolve(prices);
    }
}

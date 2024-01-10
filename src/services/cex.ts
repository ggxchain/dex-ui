type Prices = Map<string, number>;

const cryptoCompareFetcher = async (tokens: string[]): Promise<Prices> => {
    const tokenString = tokens.map((o) => o.toUpperCase()).join(",")

    const json = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tokenString}&tsyms=USD`)
        .then(res => res.json())
    const prices: Prices = new Map();
    for (const i of tokens) {
        const token = i.toUpperCase();
        if (json[token] === undefined || json[token]["USD"] === undefined) {
            console.error(`Failed to fetch price of ${token}`);
            continue;
        }
        prices.set(token, json[token.toUpperCase()]["USD"]);
    }
    return prices;
}

const TTL = 5 * 60 * 1000; // 5 minutes

export default class CexService {
    lastUpdated: number = 0;
    cache: Prices = new Map<string, number>();
    lastFetchedArray: string[] = [];

    constructor() {
        if (typeof window !== "undefined") {
            this.lastUpdated = parseInt(window.localStorage.getItem("prices.lastUpdated") ?? "0");
            this.cache = new Map(JSON.parse(window.localStorage.getItem("prices.cache") || "[]"));
            this.lastFetchedArray = JSON.parse(window.localStorage.getItem("prices.lastFetchedArray") || "[]");
        }
    }

    save() {
        if (typeof window !== "undefined") {
            window.localStorage.setItem("prices.lastUpdated", this.lastUpdated.toString());
            window.localStorage.setItem("prices.cache", JSON.stringify(Array.from(this.cache.entries())));
            window.localStorage.setItem("prices.lastFetchedArray", JSON.stringify(this.lastFetchedArray));
        }
    }

    async tokenPrices(tokens: string[]): Promise<Prices> {
        const now = new Date().getTime();
        if (tokens.every((o) => this.cache.has(o)) && now - this.lastUpdated < TTL) {
            return this.cache;
        } else {
            // We need combine the tokens that we already fetched and the new tokens to avoid spamming.
            const newTokens = tokens.filter((o) => !this.cache.has(o));
            const allTokens = [...this.lastFetchedArray, ...newTokens];
            const prices = await cryptoCompareFetcher(allTokens);
            this.lastUpdated = now;
            this.cache = prices;
            this.lastFetchedArray = allTokens;
            this.save();
        }
        return this.cache;
    }
}

import { EXCHANGE_PRICE_TTL } from "@/consts";

type Prices = Map<string, number>;

const cryptoCompareFetcher = async (tokens: string[]): Promise<Prices> => {
	const tokenString = tokens.map((o) => o.toUpperCase()).join(",");

	const json = await fetch(
		`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tokenString}&tsyms=USD`,
	).then((res) => res.json());
	const prices: Prices = new Map();
	for (const token of tokens) {
		const key = token.toUpperCase();
		if (!json[key]?.USD) {
			console.error(`Failed to fetch price of ${token}`);
			continue;
		}
		prices.set(token, json[key].USD);
	}
	return prices;
};

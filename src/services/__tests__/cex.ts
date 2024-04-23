/// <reference types="@polkadot/dev-test/globals.d.ts" />

import CexService from "../cex";

import "@/__utils__/localstore.mock";

import { EXCHANGE_PRICE_TTL } from "@/settings";

describe("CexService", () => {
	let cexService: CexService;

	beforeEach(() => {
		window.localStorage.clear();
		cexService = new CexService();
	});

	const mock = () => {
		window.localStorage.setItem("prices.lastUpdated", "123456");
		window.localStorage.setItem(
			"prices.cache",
			JSON.stringify([
				["btc", 10],
				["usdt", 20],
			]),
		);
		window.localStorage.setItem(
			"prices.lastFetchedArray",
			JSON.stringify(["btc", "usdt"]),
		);
	};

	it("should initialize with default values", () => {
		expect(cexService.lastUpdated).toBe(0);
		expect(cexService.cache.size).toBe(0);
		expect(cexService.lastFetchedArray.length).toBe(0);
	});

	it("should save and load data from localStorage", () => {
		// Set some test data in localStorage
		mock();

		// Create a new instance of CexService
		cexService = new CexService();

		// Verify that the data is loaded correctly
		expect(cexService.lastUpdated).toBe(123456);
		expect(cexService.cache.size).toBe(2);
		expect(cexService.cache.get("btc")).toBe(10);
		expect(cexService.cache.get("usdt")).toBe(20);
		expect(cexService.lastFetchedArray.length).toBe(2);
		expect(cexService.lastFetchedArray).toContain("btc");
		expect(cexService.lastFetchedArray).toContain("usdt");
	});

	it("should return cached prices if available and not expired", async () => {
		global.fetch = jest.fn().mockResolvedValue({});
		mock();
		const cexService = new CexService();
		cexService.lastUpdated = new Date().getTime() - 1000; // Set lastUpdated to 1 second ago

		// Call tokenPrices with existing tokens
		const prices = await cexService.tokenPrices(["btc", "usdt"]);

		// Verify that the cached prices are returned
		expect(prices.size).toBe(2);
		expect(prices.get("btc")).toBe(10);
		expect(prices.get("usdt")).toBe(20);
		expect(global.fetch).not.toHaveBeenCalled();
	});

	it("should fetch new prices for tokens not in cache", async () => {
		global.fetch = jest.fn().mockResolvedValue({
			json: () => ({
				BTC: { USD: 10 },
				USDT: { USD: 20 },
				TOKEN3: { USD: 30 },
				TOKEN4: { USD: 40 },
			}),
		});

		mock();
		const cexService = new CexService();
		// Set some test data in the cache
		cexService.lastUpdated = new Date().getTime() - 1000; // Set lastUpdated to 1 second ago

		// Call tokenPrices with existing and new tokens
		const prices = await cexService.tokenPrices([
			"btc",
			"usdt",
			"token3",
			"token4",
		]);

		// Verify that the new prices are fetched and stored in the cache
		expect(prices.size).toBe(4);
		expect(prices.get("btc")).toBe(10);
		expect(prices.get("usdt")).toBe(20);
		expect(prices.get("token3")).toBe(30);
		expect(prices.get("token4")).toBe(40);
	});

	it("should fetch new prices for tokens if experied", async () => {
		mock();
		const cexService = new CexService();
		global.fetch = jest.fn().mockResolvedValue({
			json: () => ({ BTC: { USD: 10 }, USDT: { USD: 20 } }),
		});
		cexService.lastUpdated = new Date().getTime() - EXCHANGE_PRICE_TTL - 1; // Set lastUpdated larger than EXCHANGE_PRICE_TTL

		// Call tokenPrices with existing tokens
		const prices = await cexService.tokenPrices(["btc", "usdt"]);

		// verify that we called fetch
		expect(global.fetch).toHaveBeenCalled();
	});
});

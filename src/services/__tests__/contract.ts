import Contract, { Errors } from "../api";

import "@/__utils__/localstore.mock";
import { BN_ONE, BN_ZERO } from "@polkadot/util";
import GgxNetworkMock from "../api/mock";

// We are going to test the GGx API using the mock implementation
// This set of tests will test input validation and error handling
describe("Contract", () => {
	let contract: Contract;

	beforeEach(() => {
		window.localStorage.clear();
		window.sessionStorage.clear();
		window.localStorage.setItem(
			"ggx-wallet-selected-account",
			JSON.stringify({
				address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC",
			}),
		);

		const mock = new GgxNetworkMock();
		contract = new Contract(mock);
	});

	const mockedTokenId = 0;

	it("should fail if user account is not selected", async () => {
		// We have to remove the account from local storage and reload the contract
		window.localStorage.removeItem("ggx-wallet-selected-account");
		contract = new Contract();

		await expect(
			contract.deposit(mockedTokenId, BN_ONE, () => {}),
		).rejects.toThrow(Errors.WalletIsNotConnected);
		await expect(
			contract.withdraw(mockedTokenId, BN_ONE, () => {}),
		).rejects.toThrow(Errors.WalletIsNotConnected);
		await expect(
			contract.makeOrder([0, 1], BN_ONE, BN_ONE, "BUY", BN_ONE, () => {}),
		).rejects.toThrow(Errors.WalletIsNotConnected);
		await expect(contract.takeOrder(0, () => {})).rejects.toThrow(
			Errors.WalletIsNotConnected,
		);
		await expect(contract.cancelOrder(0, () => {})).rejects.toThrow(
			Errors.WalletIsNotConnected,
		);
		await expect(contract.balanceOf(mockedTokenId)).rejects.toThrow(
			Errors.WalletIsNotConnected,
		);
		await expect(contract.allUserOrders()).rejects.toThrow(
			Errors.WalletIsNotConnected,
		);
	});

	it("should be valid token id", async () => {
		const invalidTokenId = 100000;
		await expect(
			contract.deposit(invalidTokenId, BN_ONE, () => {}),
		).rejects.toThrow(Errors.InvalidTokenId);
		await expect(
			contract.withdraw(invalidTokenId, BN_ONE, () => {}),
		).rejects.toThrow(Errors.InvalidTokenId);
		await expect(
			contract.makeOrder(
				[invalidTokenId, 1],
				BN_ONE,
				BN_ONE,
				"BUY",
				BN_ONE,
				() => {},
			),
		).rejects.toThrow(Errors.InvalidTokenId);
		await expect(
			contract.makeOrder(
				[0, invalidTokenId],
				BN_ONE,
				BN_ONE,
				"BUY",
				BN_ONE,
				() => {},
			),
		).rejects.toThrow(Errors.InvalidTokenId);
		await expect(contract.balanceOf(invalidTokenId)).rejects.toThrow(
			Errors.InvalidTokenId,
		);
		await expect(contract.allOrders([invalidTokenId, 1])).rejects.toThrow(
			Errors.InvalidTokenId,
		);
		await expect(contract.allOrders([1, invalidTokenId])).rejects.toThrow(
			Errors.InvalidTokenId,
		);
	});

	it("should fail to deposit if amount is === 0", async () => {
		await expect(
			contract.deposit(mockedTokenId, BN_ZERO, () => {}),
		).rejects.toThrow(Errors.AmountIsLessOrEqualToZero);
		await expect(
			contract.deposit(mockedTokenId, BN_ONE.neg(), () => {}),
		).rejects.toThrow(Errors.AmountIsLessOrEqualToZero);

		// Success case
		await expect(
			contract.deposit(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();
	});

	it("should fail to withdraw if amount is <= 0", async () => {
		await expect(
			contract.withdraw(mockedTokenId, BN_ZERO, () => {}),
		).rejects.toThrow(Errors.AmountIsLessOrEqualToZero);
		await expect(
			contract.withdraw(mockedTokenId, BN_ONE.neg(), () => {}),
		).rejects.toThrow(Errors.AmountIsLessOrEqualToZero);

		// Success case
		// We need to deposit first
		await expect(
			contract.deposit(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();
		await expect(
			contract.withdraw(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();
	});

	it("should fail to withdraw if not enough balance", async () => {
		await expect(
			contract.withdraw(mockedTokenId, BN_ONE, () => {}),
		).rejects.toThrow(Errors.NotEnoughBalance);

		// Success case
		// We need to deposit first
		await contract.deposit(mockedTokenId, BN_ONE, () => {});
		await expect(
			contract.withdraw(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();
	});

	it("should fail to makeOrder if amountOffered is <= 0 || amountRequested <= 0", async () => {
		await expect(
			contract.makeOrder([0, 1], BN_ONE, BN_ONE.neg(), "BUY", BN_ONE, () => {}),
		).rejects.toThrow(Errors.AmountIsLessOrEqualToZero);
		await expect(
			contract.makeOrder([0, 1], BN_ZERO, BN_ONE, "SELL", BN_ONE, () => {}),
		).rejects.toThrow(Errors.AmountIsLessOrEqualToZero);

		// Success case
		await expect(
			contract.deposit(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();
		await expect(
			contract.makeOrder([0, 1], BN_ONE, BN_ONE, "SELL", BN_ONE, () => {}),
		).resolves.not.toThrow();
	});

	it("should fail to makeOrder if balance is not enough to cover make order", async () => {
		// SELL order
		await expect(
			contract.makeOrder(
				[mockedTokenId, 1],
				BN_ONE,
				BN_ONE,
				"SELL",
				BN_ONE,
				() => {},
			),
		).rejects.toThrow(Errors.NotEnoughBalance);

		// Success case
		// We need to deposit first
		await expect(
			contract.deposit(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();

		await expect(
			contract.makeOrder(
				[mockedTokenId, 1],
				BN_ONE,
				BN_ONE,
				"SELL",
				BN_ONE,
				() => {},
			),
		).resolves.not.toThrow();

		// BUY order
		await expect(
			contract.makeOrder(
				[0, mockedTokenId],
				BN_ONE,
				BN_ONE,
				"BUY",
				BN_ONE,
				() => {},
			),
		).rejects.toThrow(Errors.NotEnoughBalance);

		// Success case
		// We need to deposit first
		await expect(
			contract.deposit(mockedTokenId, BN_ONE, () => {}),
		).resolves.not.toThrow();
		await expect(
			contract.makeOrder(
				[0, mockedTokenId],
				BN_ONE,
				BN_ONE,
				"BUY",
				BN_ONE,
				() => {},
			),
		).resolves.not.toThrow();
	});

	it("should cache token info", async () => {
		await expect(contract.allTokensWithInfo()).resolves.not.toThrow();
		expect(contract.tokenCache.size).toBeGreaterThan(0);
		expect(contract.tokenList.length).toBe(contract.tokenCache.size);
	});
});

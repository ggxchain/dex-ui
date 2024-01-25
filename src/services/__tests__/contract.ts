
import Contract, { Errors } from '../contract';

import '@/__utils__/localstore.mock'

// We are going to test the GGx API using the mock implementation
// This set of tests will test input validation and error handling
describe('Contract', () => {
    let contract: Contract;

    beforeEach(() => {
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.localStorage.setItem('ggx-wallet-selected-account', JSON.stringify({ address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC" }));

        contract = new Contract();

        if (!contract.isMocked()) {
            contract.changeContract();
        }
    });

    const mockedTokenId = 0

    it('should fail if user account is not selected', async () => {
        // We have to remove the account from local storage and reload the contract
        window.localStorage.removeItem('ggx-wallet-selected-account');
        contract = new Contract();

        await expect(contract.deposit(mockedTokenId, 1, () => { })).rejects.toThrow(Errors.WalletIsNotConnected)
        await expect(contract.withdraw(mockedTokenId, 1, () => { })).rejects.toThrow(Errors.WalletIsNotConnected)
        await expect(contract.makeOrder([0, 1], 1, 1, "BUY", () => { })).rejects.toThrow(Errors.WalletIsNotConnected)
        await expect(contract.takeOrder(0, () => { })).rejects.toThrow(Errors.WalletIsNotConnected)
        await expect(contract.cancelOrder(0, () => { })).rejects.toThrow(Errors.WalletIsNotConnected)
        await expect(contract.balanceOf(mockedTokenId)).rejects.toThrow(Errors.WalletIsNotConnected)
        await expect(contract.allUserOrders()).rejects.toThrow(Errors.WalletIsNotConnected)
    })

    it('should be valid token id', async () => {
        const invalidTokenId = 100000;
        await expect(contract.deposit(invalidTokenId, 1, () => { })).rejects.toThrow(Errors.InvalidTokenId)
        await expect(contract.withdraw(invalidTokenId, 1, () => { })).rejects.toThrow(Errors.InvalidTokenId)
        await expect(contract.makeOrder([invalidTokenId, 1], 1, 1, "BUY", () => { })).rejects.toThrow(Errors.InvalidTokenId)
        await expect(contract.makeOrder([0, invalidTokenId], 1, 1, "BUY", () => { })).rejects.toThrow(Errors.InvalidTokenId)
        await expect(contract.balanceOf(invalidTokenId)).rejects.toThrow(Errors.InvalidTokenId)
        await expect(contract.allOrders([invalidTokenId, 1])).rejects.toThrow(Errors.InvalidTokenId)
        await expect(contract.allOrders([1, invalidTokenId])).rejects.toThrow(Errors.InvalidTokenId)
    });

    it('should fail to deposit if amount is <= 0', async () => {
        await expect(contract.deposit(mockedTokenId, 0, () => { })).rejects.toThrow(Errors.AmountIsLessOrEqualToZero)
        await expect(contract.deposit(mockedTokenId, -1, () => { })).rejects.toThrow(Errors.AmountIsLessOrEqualToZero)

        // Success case
        await expect(contract.deposit(mockedTokenId, 1, () => { })).resolves.not.toThrow()
    });

    it('should fail to withdraw if amount is <= 0', async () => {
        await expect(contract.withdraw(mockedTokenId, 0, () => { })).rejects.toThrow(Errors.AmountIsLessOrEqualToZero)
        await expect(contract.withdraw(mockedTokenId, -1, () => { })).rejects.toThrow(Errors.AmountIsLessOrEqualToZero)

        // Success case
        // We need to deposit first
        await expect(contract.deposit(mockedTokenId, 1, () => { })).resolves.not.toThrow()
        await expect(contract.withdraw(mockedTokenId, 1, () => { })).resolves.not.toThrow()
    });

    it('should fail to withdraw if not enough balance', async () => {
        await expect(contract.withdraw(mockedTokenId, 1, () => { })).rejects.toThrow(Errors.NotEnoughBalance)

        // Success case
        // We need to deposit first
        await contract.deposit(mockedTokenId, 1, () => { })
        await expect(contract.withdraw(mockedTokenId, 1, () => { })).resolves.not.toThrow()
    });

    it('should fail to makeOrder if amountOffered is <= 0 || amountRequested <= 0', async () => {
        await expect(contract.makeOrder([0, 1], 1, -1, "BUY", () => { })).rejects.toThrow(Errors.AmountIsLessOrEqualToZero)
        await expect(contract.makeOrder([0, 1], 0, 1, "SELL", () => { })).rejects.toThrow(Errors.AmountIsLessOrEqualToZero)

        // Success case
        await expect(contract.deposit(mockedTokenId, 1, () => { })).resolves.not.toThrow()
        await expect(contract.makeOrder([0, 1], 1, 1, "SELL", () => { })).resolves.not.toThrow()
    });

    it('should fail to makeOrder if balance is not enough to cover make order', async () => {
        // SELL order
        await expect(contract.makeOrder([mockedTokenId, 1], 1, 1, "SELL", () => { })).rejects.toThrow(Errors.NotEnoughBalance)

        // Success case
        // We need to deposit first
        await expect(contract.deposit(mockedTokenId, 1, () => { })).resolves.not.toThrow()

        await expect(contract.makeOrder([mockedTokenId, 1], 1, 1, "SELL", () => { })).resolves.not.toThrow()


        // BUY order
        await expect(contract.makeOrder([0, mockedTokenId], 1, 1, "BUY", () => { })).rejects.toThrow(Errors.NotEnoughBalance)

        // Success case
        // We need to deposit first
        await expect(contract.deposit(mockedTokenId, 1, () => { })).resolves.not.toThrow()
        await expect(contract.makeOrder([0, mockedTokenId], 1, 1, "BUY", () => { })).resolves.not.toThrow()

    });

    it('should cache token info', async () => {
        await expect(contract.allTokens()).resolves.not.toThrow()
        expect(contract.tokenCache.size).toBeGreaterThan(0)
        expect(contract.tokenList.length).toBe(contract.tokenCache.size)
    });

});

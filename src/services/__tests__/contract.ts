/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TextEncoder, TextDecoder } from 'util';
import GGxContract from '../contract/ggx';


describe('Contract', () => {
    let contract: GGxContract;

    beforeEach(() => {
        window.localStorage.clear();
        contract = new GGxContract();

        window.localStorage.setItem('ggx-wallet-selected-account', JSON.stringify({ address: "5G4Ug9EPQHqk5iJGjUFHeLHYCvX4JRPVrtxxFPmwuk9wj8GC" }));
    });

    afterEach(() => {
        contract.api?.disconnect();

    });

    const mockedTokenId = { u64: 0 }


    it('should successfully create deposit transaction', async () => {
        require('@polkadot/dev-test/browser');

        const callback = jest.fn();

        const deposit = await contract.deposit(mockedTokenId, 1, callback);


        expect(callback).toHaveBeenCalled();
    })

    // it('should fail on <= 0 depisits', async () => {
    //     const callback = jest.fn();
    //     const deposit = await contract.deposit(mockedTokenId, 0, callback);

    // })
});

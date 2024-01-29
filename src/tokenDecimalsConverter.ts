import assert from 'assert';
import BN from 'bn.js';
import { CALCULATION_PRECISION } from './consts';

export default class TokenDecimals {
    private decimalPlaces: number;

    constructor(decimalPlaces: number) {
        this.decimalPlaces = decimalPlaces;
    }

    static normalizedTokenDecimals(decimals1: number, decimals2: number): TokenDecimals {
        const decimalPlaces = Math.max(decimals1, decimals2);
        return new TokenDecimals(decimalPlaces);
    }

    floatToBN(value: number): BN {
        const multiplier = new BN(10).pow(new BN(this.decimalPlaces));

        const result = new BN(value).mul(multiplier);
        return result;
    }

    BNToFloat(value: BN): number {
        const multiplier = new BN(10).pow(new BN(this.decimalPlaces));
        const integer = value.div(multiplier);
        const fractional = value.mod(multiplier);

        return Number(`${integer}.${fractional.toString().padStart(this.decimalPlaces, '0')}`);
    }

    normalize(value: BN, oldDecimals: number): BN {
        assert(oldDecimals <= this.decimalPlaces, 'Cannot normalize to a higher precision');
        const multiplier = new BN(10).pow(new BN(this.decimalPlaces - oldDecimals));
        return value.mul(multiplier);
    }

    denormalize(value: BN, oldDecimals: number): BN {
        const multiplier = new BN(10).pow(new BN(this.decimalPlaces - oldDecimals));
        return value.div(multiplier);
    }

    divWithPrecision(value1: BN, value2: BN): number {
        const o = new TokenDecimals(this.decimalPlaces + CALCULATION_PRECISION);
        const value1Normalized = o.normalize(value1, this.decimalPlaces);
        return value1Normalized.div(value2).toNumber() / (10 ** CALCULATION_PRECISION)
    }
}

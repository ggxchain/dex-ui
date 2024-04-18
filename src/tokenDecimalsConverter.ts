import assert from "assert";
import { BN_ONE, BN_TEN } from "@polkadot/util";
import BN from "bn.js";
import { CALCULATION_PRECISION } from "./consts";
import { bn } from "./services/utils";

export default class TokenDecimals {
	private decimalPlaces: number;

	constructor(decimalPlaces: number) {
		this.decimalPlaces = decimalPlaces;
	}

	static normalizedTokenDecimals(
		decimals1: number,
		decimals2: number,
	): TokenDecimals {
		const decimalPlaces = Math.max(decimals1, decimals2);
		return new TokenDecimals(decimalPlaces);
	}

	floatToBN(value: number): BN {
		const multiplier = new BN(10).pow(new BN(this.decimalPlaces));
		const integer = Math.floor(value);
		const fractional = value - integer;

		// It's safe to work with up to 3 decimal places. Later float number too messy.
		// TODO: maybe it's better to avoid convertation in input fields and use BNs with selector of decimal places
		const min = Math.min(8, this.decimalPlaces);
		const fractionalMultiplied = new BN(Math.ceil(fractional * 10 ** min));
		const fractionalBN =
			this.decimalPlaces - min > 0
				? fractionalMultiplied.mul(BN_TEN.pow(new BN(this.decimalPlaces - min)))
				: fractionalMultiplied;

		return multiplier.mul(bn(integer)).add(fractionalBN);
	}

	BNToFloat(value: BN): number {
		const multiplier = new BN(10).pow(new BN(this.decimalPlaces));
		const integer = value.div(multiplier);
		const fractional = value.mod(multiplier);

		if (fractional.isZero()) {
			return integer.toNumber();
		}

		return Number(`${integer}.${fractional.toString(10, this.decimalPlaces)}`);
	}

	BNtoDisplay(value: BN, symbol: string): string {
		const multiplier = new BN(10).pow(new BN(this.decimalPlaces));
		const integer = value.div(multiplier);

		let prefix = "";
		let extraPrecision = 0;
		if (integer.div(bn(1_000_000_000)).gt(BN_ONE)) {
			prefix = "B";
			extraPrecision = 9;
		} else if (integer.div(bn(1_000_000)).gt(BN_ONE)) {
			prefix = "M";
			extraPrecision = 6;
		} else if (integer.div(bn(1_000)).gt(BN_ONE)) {
			prefix = "K";
			extraPrecision = 3;
		}
		const converter = new TokenDecimals(this.decimalPlaces + extraPrecision);
		const result = converter.BNToFloat(value);

		return `${result} ${prefix}${symbol}`;
	}

	normalize(value: BN, oldDecimals: number): BN {
		assert(
			oldDecimals <= this.decimalPlaces,
			"Cannot normalize to a higher precision",
		);
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
		return (
			value1Normalized.div(value2).div(bn(10).pow(bn(CALCULATION_PRECISION))).toNumber() 
		);//
	}
}

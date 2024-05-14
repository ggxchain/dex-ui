import assert from "assert";
import {
	type BN,
	BN_BILLION,
	BN_MILLION,
	BN_ONE,
	BN_TEN,
	BN_THOUSAND,
} from "@polkadot/util";
import {
	bn,
	count_decimals,
	fixDP,
	removeTrailingZeros,
	strFloatToBN,
} from "./services/utils";
import { CALCULATION_PRECISION, MAX_DP } from "./settings";

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

	//catch error
	strFloatToBN(str: string): BN {
		return strFloatToBN(str, this.decimalPlaces);
	}

	BNToFloat(value: BN): string {
		const multiplier = BN_TEN.pow(bn(this.decimalPlaces));
		const integer = value.div(multiplier);
		const fractional = value.mod(multiplier);

		if (fractional.isZero()) {
			return integer.toString();
		}

		return `${integer}.${fractional.toString(10, this.decimalPlaces)}`;
	}

	BNtoDisplay(value: BN, symbol: string): string {
		const multiplier = BN_TEN.pow(bn(this.decimalPlaces));
		const integer = value.div(multiplier);

		let prefix = "";
		let extraPrecision = 0;
		if (integer.div(BN_BILLION).gt(BN_ONE)) {
			prefix = "B";
			extraPrecision = 9;
		} else if (integer.div(BN_MILLION).gt(BN_ONE)) {
			prefix = "M";
			extraPrecision = 6;
		} else if (integer.div(BN_THOUSAND).gt(BN_ONE)) {
			prefix = "K";
			extraPrecision = 3;
		}
		const converter = new TokenDecimals(this.decimalPlaces + extraPrecision);
		let result = converter.BNToFloat(value);

		const dpLen = count_decimals(result);
		if (dpLen > MAX_DP) {
			result = fixDP(result);
		}
		const resultClean = removeTrailingZeros(result);
		return `${resultClean} ${prefix}${symbol}`;
	}

	normalize(value: BN, oldDecimals: number): BN {
		assert(
			oldDecimals <= this.decimalPlaces,
			"Cannot normalize to a higher precision",
		);
		const multiplier = BN_TEN.pow(bn(this.decimalPlaces - oldDecimals));
		return value.mul(multiplier);
	}

	denormalize(value: BN, oldDecimals: number): BN {
		const multiplier = BN_TEN.pow(bn(this.decimalPlaces - oldDecimals));
		return value.div(multiplier);
	}

	divWithPrecision(value1: BN, value2: BN): number {
		const o = new TokenDecimals(this.decimalPlaces + CALCULATION_PRECISION);
		const value1Normalized = o.normalize(value1, this.decimalPlaces);
		return value1Normalized
			.div(value2)
			.div(BN_TEN.pow(bn(CALCULATION_PRECISION)))
			.toNumber(); //
	}
}

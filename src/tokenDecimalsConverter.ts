import assert from "assert";
import { BN, BN_ONE, BN_ZERO } from "@polkadot/util";
import { bn, count_decimals, fixDP, strFloatToBN } from "./services/utils";
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

	strToBN(str: string): BN {
		try {
			return strFloatToBN(str, this.decimalPlaces);
		} catch (err) {
			console.warn(err);
			return BN_ZERO;
		}
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
		let result = `${converter.BNToFloat(value)}`;

		const dpLen = count_decimals(result);
		if (dpLen > MAX_DP) {
			result = fixDP(result);
		}
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
		return value1Normalized
			.div(value2)
			.div(bn(10).pow(bn(CALCULATION_PRECISION)))
			.toNumber(); //
	}
}

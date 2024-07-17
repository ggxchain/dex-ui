import assert from "assert";
import {
	type BN,
	BN_BILLION,
	BN_MILLION,
	BN_ONE,
	BN_TEN,
	BN_THOUSAND,
} from "@polkadot/util";
import { fromWei } from "web3-utils";
import { bn, formatter, strFloatToBN } from "./services/utils";
import { CALCULATION_PRECISION } from "./settings";

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

	BNToFloat(value: BN): number {
		const multiplier = BN_TEN.pow(bn(this.decimalPlaces));
		const integer = value.div(multiplier);
		const fractional = value.mod(multiplier);

		if (fractional.isZero()) {
			return Number(integer.toString());
		}

		return Number(`${integer}.${fractional.toString(10, this.decimalPlaces)}`);
	}
	NumbertoDisplay(value: number): string {
		return `${formatter(0, "token").format(value, "")}`;
	}
	BNtoDisplay(value: BN, symbol: string): string {
		const fromWeiValue = fromWei(value as unknown as bigint, "ether");
		const parsedValue = Number.parseFloat(fromWeiValue);
		if (parsedValue === 0) {
			return `0 ${symbol}`;
		}
		if (Number.parseFloat(fromWei(value as unknown as bigint, "ether")) < 1) {
			return `${fromWeiValue} ${symbol}`;
		}

		const multiplier = BN_TEN.pow(bn(this.decimalPlaces));
		const integer = value.div(multiplier);

		let extraPrecision = 0;
		if (integer.div(BN_BILLION).gt(BN_ONE)) {
			extraPrecision = 0;
		} else if (integer.div(BN_MILLION).gt(BN_ONE)) {
			extraPrecision = 0;
		} else if (integer.div(BN_THOUSAND).gt(BN_ONE)) {
			extraPrecision = 0;
		}

		return `${formatter(extraPrecision, "token").format(
			fromWei(value as unknown as bigint, "ether"),
			"",
		)} ${symbol}`;
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

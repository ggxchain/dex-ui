import { BN, BN_TEN } from "@polkadot/util";

export function displayNumberWithPrecision(number: BN, precision: number, displayDigits: number | undefined = undefined): string {
    const toDisplay = displayDigits ?? precision;
    const { div, mod } = number.divmod(BN_TEN.pow(new BN(precision)));
    const integerPart = div.toString();
    const fractionalPart = mod.toString().padEnd(precision, "0").slice(0, toDisplay);
    return `${integerPart}.${fractionalPart}`;
}

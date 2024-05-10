import { MAX_DP, maxNumericInput } from "@/settings";
import {
	BN,
	BN_BILLION,
	BN_MILLION,
	BN_ONE,
	BN_TEN,
	BN_THOUSAND,
	BN_ZERO,
} from "@polkadot/util";
import BigNumber from "bignumber.js";

export const lg = console.log;
export const bn = (n: number | string | number[]) => new BN(n);

export const bnE6 = BN_TEN.pow(bn(6));
export const bnE8 = BN_TEN.pow(bn(8));
export const bnE9 = BN_TEN.pow(bn(9));
export const bnE15 = BN_TEN.pow(bn(15));
export const bnE18 = BN_TEN.pow(bn(18));
export const bnMaxDp = BN_TEN.pow(bn(MAX_DP));
export const maxNumericInputBn = bn(maxNumericInput);

export const bnOne = new BigNumber(1);
export const bigZero = new BigNumber(0);
export const bigOne = new BigNumber(1);
export const bigTEN = new BigNumber(10);

export const strToBn = (str: string): BN => {
	const integer: number = Number.parseInt(str);
	if (Number.isNaN(integer)) {
		console.error("convertStr input invalid");
		return BN_ZERO;
	}
	return bn(integer);
};

/**Price Representation Rules:
- DAI price uses 8 dp
- if price >= 1, use default 2 dp. This includes USDT and USDC: 1.00xy => 1.00, OR use 4 dp 0.999x
- if price < 1, use 4 significant figures(except 5 for DOGE, TRX)
*/
export const bnFormat = (n: BigNumber, minimumFractionDigits = 8) => {
	if (n.gte(bnOne)) return n.toFixed(2);
	return n.toFixed(minimumFractionDigits);
};

export const formatter = (mfd = 2, currencyName = "usd") => {
	let formatter: any;
	switch (currencyName) {
		case "usd":
			formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
				minimumFractionDigits: mfd,
				//maximumSignificantDigits: 3
			});
			break;
		default:
			formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			});
	}
	return formatter;
};
export const count_decimals = (str: string) => {
	const dpPart = str.split(".")[1] || [];
	return dpPart.length;
};
export const fixDP = (str: string, dp = MAX_DP) => {
	if (str === ".") return "0.00";
	const arr = str.split(".");
	if (str.charAt(0) === ".") return `0.${arr[1].substring(0, dp)}`;

	if (str.slice(-1) === "." || arr.length === 1)
		return `${arr[0]}.+${"0".repeat(dp)}`;
	return `${arr[0]}.${arr[1].substring(0, dp)}`;
};
export const formatPrice = (n: number, symbol = "na") => {
	if (["dai"].includes(symbol.toLowerCase())) {
		return formatter(8).format(n);
	}
	if (["doge", "trx"].includes(symbol.toLowerCase())) {
		return formatter(5).format(n);
	}
	if (n > 1) {
		return formatter().format(n);
	}
	if (n === 1) {
		return "$1.00";
	}
	if (n === 0) {
		return "$0.00";
	}
	return `$${sigFig(n, 4)}`;
};
export const sigFig = (n: number, sig: number) => {
	const mult = 10 ** (sig - Math.floor(Math.log(n) / Math.LN10) - 1);
	return `${Math.round(n * mult) / mult}`;
};
export const checkBnStr = (str: string) => {
	let amount = BN_ZERO;
	const out = { amount, isValid: false };
	try {
		amount = strFloatToBN(str, MAX_DP);
	} catch (err) {
		console.warn(err);
		return out;
	}
	if (amount.lt(BN_ZERO)) {
		console.warn("amount should not be less than zero");
		return out;
	}
	if (amount.div(bnMaxDp).gt(maxNumericInputBn)) {
		console.warn("amount should be less than max numeric input");
		return out;
	}
	return { amount, isValid: true };
};
export const checkBigStr = (str: string) => {
	let amount = BigNumber(0);
	const out = { amount, isValid: false };
	try {
		const float = Number.parseFloat(str.replace(/[^\d.-]/g, ""));
		amount = BigNumber(float);
	} catch (err) {
		console.warn(err);
		return out;
	}
	if (amount.lt(bigZero)) {
		console.warn("amount should not be less than zero");
		return out;
	}
	if (amount.gt(BigNumber(maxNumericInput))) {
		console.warn("amount should be less than max numeric input");
		return out;
	}
	return { amount, isValid: true };
};

export const splitStrFloat = (str: string): { int: string; dec: string } => {
	let out = { int: "0", dec: "0" };
	const arr = str.split(".");
	if (arr.length > 2) {
		throw new Error("invalid input");
	}
	if (arr[0].match(/[^$,.\d]/)) {
		throw new Error("integer part contains non digits");
	}
	if (arr.length === 2 && arr[1].match(/[^$,.\d]/)) {
		throw new Error("decimal part contains non digits");
	}
	switch (str) {
		case "":
		case ".":
			break;

		default:
			if (arr[0] === "") arr[0] = "0";
			if (arr[1]) {
				out = { int: arr[0], dec: arr[1] };
			} else {
				out = { int: arr[0], dec: "0" };
			}
	}
	return out;
};
//pad the input decimal digits to `width` length
export const padDigits = (input: string, width = MAX_DP, padchar = "0") => {
	let str = input;
	if (str.length > width) str = str.substring(0, width);
	while (str.length < width) {
		str += padchar;
	}
	return str;
};
export const strToNum = (input: string) => {
	const num = Number(input);
	if (Number.isNaN(num)) {
		console.error("Number(str) failed. input:", input);
		return 0;
	}
	return num;
};
export const numFloatToBN = (num: number, pow: number): BN => {
	const int = Math.trunc(num);
	const decimal = (num % 1).toFixed(pow);
	const decimalBn = bn(Number(decimal) * 10 ** pow);
	const multiplier = BN_TEN.pow(bn(pow));
	//lg('numFloatToBN:', int, decimal, decimalBn.toString())
	return bn(int).mul(multiplier).add(decimalBn);
};
//catch error from splitStrFloat
export const strFloatToBN = (str: string, pow = MAX_DP): BN => {
	//lg("strFloatToBN input:", str, ", pow:", pow);
	const { int, dec } = splitStrFloat(str);
	//lg("int:", int, ", dec:", dec);
	const raisedDecimal = padDigits(dec, pow);
	//lg("integer:", int, "raisedDecimal:", raisedDecimal);
	const raisedDecimalBn = bn(raisedDecimal);
	const multiplier = BN_TEN.pow(bn(pow));

	//lg("raisedDecimalBn:", raisedDecimalBn.toString());
	return bn(int).mul(multiplier).add(raisedDecimalBn);
};
export const strIntToBn = (str: string): BN => {
	const integer: number = Number.parseInt(str);
	if (Number.isNaN(integer)) {
		console.error("convertStr input invalid");
		return BN_ZERO;
	}
	return bn(integer);
};
export const BNToFloat = (value: BN, dp: number): number => {
	const multiplier = BN_TEN.pow(bn(dp));
	const integer = value.div(multiplier);
	const fractional = value.mod(multiplier);

	if (fractional.isZero()) {
		return integer.toNumber();
	}
	return Number(`${integer}.${fractional.toString(10, dp)}`);
};
export const BNtoDisplay = (value: BN, symbol = "USD"): string => {
	const integer = value; //.div(BN_HUNDRED);
	let prefix = "";
	let moreDp = 0;
	if (integer.div(BN_BILLION).gte(BN_ONE)) {
		prefix = "B";
		moreDp = 9;
	} else if (integer.div(BN_MILLION).gte(BN_ONE)) {
		prefix = "M";
		moreDp = 6;
	} else if (integer.div(BN_THOUSAND).gte(BN_ONE)) {
		prefix = "K";
		moreDp = 3;
	}
	let result = `${BNToFloat(value, moreDp)}`;

	const dpLen = count_decimals(result);
	if (dpLen > MAX_DP) {
		result = fixDP(result);
	}
	return `${result} ${prefix}${symbol}`;
};
/** interfaces/lookup.ts
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
*/
export const translateErrorMesg = (error: string | undefined) => {
	if (error === undefined) return "Error_Is_Undefined";
	const errorObj = JSON.parse(error);
	let errEasy = "";
	switch (errorObj.token || errorObj.arithmetic) {
		case "FundsUnavailable":
			errEasy = "User's fund is not enough";
			break;
		case "OnlyProvider":
			errEasy = "only provider are authorized";
			break;
		case "BelowMinimum":
			errEasy = "amount is below minimum";
			break;
		case "CannotCreate":
			errEasy = "cannot create token";
			break;
		case "UnknownAsset":
			errEasy = "asset is unknown";
			break;
		case "Frozen":
			errEasy = "token is frozen";
			break;
		case "Unsupported":
			errEasy = "unsupported";
			break;
		case "CannotCreateHold":
			errEasy = "cannot create hold";
			break;
		case "NotExpendable":
			errEasy = "not expendable";
			break;
		case "Blocked":
			errEasy = "blocked";
			break;
		case "Underflow":
			errEasy = "cannot deposit/withdraw more than what you have";
			break;
		case "Overflow":
			errEasy = "cannot make the result balance over the math limit";
			break;
		case "DivisionByZero":
			errEasy = "cannot divide something by zero";
			break;
		case "SpRuntimeModuleError":
			errEasy = "module error";
			break;
		case "SpRuntimeTokenError":
			errEasy = "token error";
			break;
		case "SpRuntimeTransactionalError":
			errEasy = "transactional error";
			break;
		case "Null":
			errEasy = "null";
			break;
		case "LimitReached":
			errEasy = "LimitReached";
			break;
		case "NoLayer":
			errEasy = "NoLayer";
			break;
		default:
			errEasy = errorObj.token;
	}
	return errEasy;
};

export const delayFunc = (delay: number): Promise<boolean> =>
	new Promise((resolve, reject) =>
		setTimeout(() => {
			//lg("delay:", delay)
			resolve(true); //or reject()
		}, delay),
	);

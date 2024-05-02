import { MAX_DP, maxNumericInput } from "@/settings";
import { BN, BN_TEN, BN_ZERO } from "@polkadot/util";

import BigNumber from "bignumber.js";
export const bnOne = new BigNumber(1);

export const lg = console.log;
export const bn = (n: number | string | number[]) => new BN(n);
export const bn18 = BN_TEN.pow(bn(18));
export const bn15 = BN_TEN.pow(bn(15));
export const bn9 = BN_TEN.pow(bn(9));
export const bnE6 = BN_TEN.pow(bn(6));
export const bnE8 = BN_TEN.pow(bn(8));
export const bnE18 = BN_TEN.pow(bn(18));
export const maxNumericInputBn = bn(maxNumericInput);

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
		amount = strFloatToBN(str, 0);
	} catch (err) {
		console.warn(err);
		return out;
	}
	if (amount.lt(BN_ZERO)) {
		console.warn("amount should not be less than zero");
		return out;
	}
	if (amount.gt(maxNumericInputBn)) {
		console.warn("amount should be less than max numeric input");
		return out;
	}
	return { amount, isValid: true };
};

export const splitStrFloat = (str: string): { int: string; dec: string } => {
	let out = { int: "0", dec: "0" };
	const arr = str.split(".");
	//lg('arr:', arr)
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
export const fixDigits = (input: string, width = MAX_DP, padchar = "0") => {
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
//catch error from splitStrFloat
export const strFloatToBN = (str: string, dp = 8): BN => {
	//lg("strFloatToBN input:", str, ', dp:', dp);
	const dpBn = bn(dp);
	const { int, dec } = splitStrFloat(str);
	const decimal = fixDigits(dec);
	//lg("integer:", int, "decimal:");
	const decimalBn = bn(decimal);
	const multiplier = BN_TEN.pow(dpBn);

	const min = Math.min(8, dp);
	let fractionalBN: BN;
	if (dp >= 8) {
		fractionalBN = decimalBn.mul(BN_TEN.pow(bn(dp - min)));
	} else {
		fractionalBN = decimalBn.div(bn(8 - dp));
	}
	return bn(int).mul(multiplier).add(fractionalBN);
};
export const strIntToBn = (str: string): BN => {
	const integer: number = Number.parseInt(str);
	if (Number.isNaN(integer)) {
		console.error("convertStr input invalid");
		return BN_ZERO;
	}
	return bn(integer);
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

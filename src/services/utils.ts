import { MAX_DP, maxNumericInput } from "@/settings";
import { BN, BN_ZERO } from "@polkadot/util";

export const lg = console.log;
export const bn = (n: number | string | number[]) => new BN(n);

export const strToBn = (str: string): BN => {
	const integer: number = Number.parseInt(str);
	if (Number.isNaN(integer)) {
		console.error("convertStr input invalid");
		return BN_ZERO;
	}
	return bn(integer);
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
export const checkNumInput = (input: string): boolean => {
	const num = Number(input);
	return Number.isNaN(num) || num < 0 || num > maxNumericInput;
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

import type { TokenId } from "./types";

type Pair = [TokenId, TokenId];

export default Pair;

export const PairUtils = {
	string(pair: Pair): string {
		return `${JSON.stringify(pair[0])}-${JSON.stringify(pair[1])}`;
	},

	reverse(pair: Pair): Pair {
		return [pair[1], pair[0]];
	},
};

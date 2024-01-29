import { TokenId } from "./types";

type Pair = [TokenId, TokenId];

export default Pair;

export class PairUtils {
    static string(pair: Pair): string {
        return `${JSON.stringify(pair[0])}-${JSON.stringify(pair[1])}`;
    }

    static reverse(pair: Pair): Pair {
        return [pair[1], pair[0]];
    }
}

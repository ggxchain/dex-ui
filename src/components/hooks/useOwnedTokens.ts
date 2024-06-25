import type Contract from "@/services/api";
import { errorHandler } from "@/services/api";
import type { Amount, TokenId } from "@/types";
import { BN_ZERO } from "@polkadot/util";
import { useState } from "react";

type FetchUserTokenId = () => Promise<TokenId[]>;
type FetchBalance = (tokenId: TokenId) => Promise<Amount>;

export const useOwnedTokens = (
	fetchUserTokens: FetchUserTokenId,
	fetchUserBalance: FetchBalance,
	contract: Contract,
) => {
	const [tokens, setTokens] = useState<TokenId[]>([]);
	const [balances, setBalances] = useState<Map<TokenId, Amount>>(
		new Map<TokenId, Amount>(),
	);

	const refreshBalances = async () => {
		const tokens = await fetchUserTokens.call(contract).catch(errorHandler);
		if (tokens === undefined) {
			return;
		}
		setTokens(tokens);
		setBalances(new Map<TokenId, Amount>());
		const balancesPromises = tokens.map((token) => {
			return fetchUserBalance.call(contract, token).catch(errorHandler);
		});
		const balancesResults = await Promise.all(balancesPromises);
		const balances = new Map<TokenId, Amount>();
		balancesResults.forEach((balance, index) => {
			balances.set(tokens[index], balance ?? BN_ZERO);
		});
		setBalances(balances);
	};

	return [tokens, balances, refreshBalances] as const;
};

import type Contract from "@/services/api";
import { errorHandler } from "@/services/api";
import CexService from "@/services/cex";
import type { Token } from "@/types";
import Image from "next/image";
import { type ChangeEvent, useEffect, useState } from "react";
import { InputWithPriceInfo } from "../common/input";
import { SelectDark } from "../common/select";
import Spinner from "../common/spinner";
import { bn, count_decimals, fixDP } from "@/services/utils";
import { BN_ZERO, type BN } from "@polkadot/util";
import { MAX_DP } from "@/consts";

interface TokenSelectorProps {
	token?: TokenWithPrice;
	tokens: TokenWithPrice[];
	amount?: number;
	lockedAmount?: boolean;
	onChange: (tokenId: TokenWithPrice, amount: string) => void;
}

export type TokenWithPrice = Token & { price: number };

export function useTokens(contract: Contract) {
	const [tokenWithPrices, setTokenWithPrices] = useState<TokenWithPrice[]>([]);

	const loadTokens = () => {
		contract
			.allTokensWithInfo()
			.then((tokens: Token[]) => {
				const cex = new CexService();
				cex.tokenPrices(tokens.map((token) => token.symbol)).then((prices) => {
					const tokensWithPrice = tokens.map((token) => {
						return {
							...token,
							price: prices.get(token.symbol) ?? 0,
						};
					});
					setTokenWithPrices(tokensWithPrice);
				});
			})
			.catch(errorHandler);
	};

	return [tokenWithPrices, loadTokens] as const;
}

export default function TokenSelector({
	token,
	amount,
	onChange,
	tokens,
	lockedAmount,
}: Readonly<TokenSelectorProps>) {
	useEffect(() => {
		if (tokens.length > 0 && token === undefined) {
			onChange(tokens[0], '0');
		}
	});

	if (token === undefined) {
		return (
			<div data-testid="spinner" className="flex w-full justify-center">
				<div className="w-10 h-10">
					<Spinner />
				</div>
			</div>
		);
	}

	const handleSelectChange = (e: TokenWithPrice) => {
		if (e === null) {
			return;
		}

		onChange(e, '0');
	};

	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value;
		const num = Number(input);
		if(Number.isNaN(input) || input.trim() === "" || num <= 0 || num > 10000000) return;
		
		const dpLen = count_decimals(input)
		if(dpLen > MAX_DP) {
			input = fixDP(input)
		}
		// The question here should we allow decimals or not.
		// My guess is not as it's not possible to work with decimals on chain.
		// So probably tokens will be more like satoshi/gwei/wei and not like eth/btc.
		onChange(token, input);
	};

	const price = (amount ?? 0) * token.price;

	return (
		<div
			data-testid="tokenSelector"
			className="flex items-center justify-between[&>*]:text-GGx-light"
		>
			<SelectDark<TokenWithPrice>
				value={token}
				onChange={handleSelectChange}
				options={tokens}
				className="w-full h-full"
				childFormatter={(token: Token) => {
					return (
						<div className="flex items-center text-GGx-light w-full border-GGx-gray md:text-lg text-base px-[10px] py-[10px]">
							<Image
								width={0}
								height={0}
								src={`/svg/${token.symbol.toLowerCase()}.svg`}
								className="w-[32px] h-[32px] mr-2"
								alt={`${token.name} icon`}
							/>
							<p className="font-bold">{token.name}</p>
							<sup className="pl-1 opacity-90">{token.network}</sup>
						</div>
					);
				}}
			/>
			<InputWithPriceInfo
				symbol=""
				wrapperClassName="basis-4/6"
				price={price}
				value={amount?.toString()}
				suffixStyle="text-GGx-black2"
				step="2"
				className="w-full bg-GGx-gray text-GGx-black2 px-[15px] py-[16px] rounded-r-[4px] border-GGx-gray border text-left disabled:cursor-not-allowed"
				type="number"
				placeholder="0.00"
				disabled={lockedAmount}
				onChange={handleAmountChange}
			/>
		</div>
	);
}

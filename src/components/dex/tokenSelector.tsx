import type Contract from "@/services/api";
import { errorHandler } from "@/services/api";
import CexService from "@/services/cex";
import {
	BNtoDisplay,
	bn,
	lg,
	numFloatToBN,
	strFloatToBN,
} from "@/services/utils";
import { MAX_DP, PRICE_DP } from "@/settings";
import type { Token } from "@/types";
import { BN_TEN, BN_ZERO } from "@polkadot/util";
import Image from "next/image";
import { type ChangeEvent, useEffect, useState } from "react";
import { InputWithPriceInfo } from "../common/input";
import { SelectDark } from "../common/select";
import Spinner from "../common/spinner";

interface TokenSelectorProps {
	token?: TokenWithPrice;
	tokens: TokenWithPrice[];
	amount: string;
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
		//lg('tokenSelector', token, amount, tokens, lockedAmount)
		if (tokens.length > 0 && token === undefined) {
			onChange(tokens[0], "");
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
		onChange(e, "");
	};

	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(token, e.target.value);
	};

	let valueBn = BN_ZERO;
	const amountBn = strFloatToBN(amount, MAX_DP);
	const multiplerAmt = BN_TEN.pow(bn(MAX_DP));
	const multiplerPrice = BN_TEN.pow(bn(PRICE_DP));
	const priceBn = numFloatToBN(token.price, PRICE_DP);
	try {
		valueBn = amountBn.mul(priceBn).div(multiplerPrice).div(multiplerAmt);
	} catch (err) {
		console.error("price calculation failed.", err);
	}
	lg("TokenSelector valueBn", valueBn.toString());
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
				value={amount}
				amtValue={BNtoDisplay(valueBn)}
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

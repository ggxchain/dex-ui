import { big, bnToBig, formatPrice } from "@/services/utils";
import TokenDecimals from "@/tokenDecimalsConverter";
import type { Amount, Token } from "@/types";
import { BN_ZERO } from "@polkadot/util";
import type BigNumber from "bignumber.js";
import Image from "next/image";
import Spinner from "./common/spinner";

export interface ListElement extends Token {
	balance: Amount;
	onChainBalance?: Amount;
	estimatedPrice: number;
	url: string;
}

interface TokenListProperties {
	tokens: ListElement[];
	onClick?: (token: ListElement) => void;
	className?: string;
	selected?: ListElement;
	onChain?: boolean;
	isInitialized?: boolean;
}

export default function TokenList({
	tokens,
	onClick,
	className,
	selected,
	onChain,
	isInitialized,
}: Readonly<TokenListProperties>) {
	const handleClick = (token: ListElement) => {
		if (onClick !== undefined) {
			onClick(token);
		}
	};

	return (
		<table
			className={`font-main table-fixed border-separate border-spacing-y-2 rounded-xl md:text-base text-sm mt-[25px] [&>td]:px-6 [&>td]:py-20 ${className}`}
		>
			<thead>
				<tr className="text-GGx-gray text-left [&>th]:py-2 [&>th]:border-GGx-gray [&>th]:border-b-[1px] [&>th]:px-6 [&>th]:text-[16px] [&>th]:font-medium">
					<th>Asset</th>
					<th>Balance</th>
					{onChain && <th>On chain balance</th>}
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{!isInitialized && tokens.length === 0 ? (
					<tr>
						<td>
							<div className="flex w-full justify-center">
								<div className="w-20 h-20 mt-5">
									<Spinner />
								</div>
							</div>
						</td>
					</tr>
				) : null}

				{isInitialized && tokens.length === 0 ? (
					<tr>
						<td className="text-center">No tokens found</td>
					</tr>
				) : null}

				{tokens.map((token) => {
					const isSelected = token.id === selected?.id;
					const amountConverter = new TokenDecimals(token.decimals);

					return (
						<tr
							key={token.symbol}
							onClick={() => handleClick(token)}
							className={`text-left font-medium text-[18px] text-GGx-light even:bg-GGx-black2 even:bg-opacity-70 [&>td]:px-6 [&>td]:py-1 ${
								isSelected ? "filter backdrop-brightness-125" : ""
							} ${onClick ? "glow-on-hover cursor-pointer" : ""}`}
						>
							<td>
								<div className="flex flex-col md:flex-row items-center w-full">
									<Image
										width={0}
										height={0}
										src={token.url}
										className="md:w-6 md:h-6 w-5 h-5 my-1 mr-2"
										alt={`${token.name} icon`}
									/>
									<TokenDetail
										tokenName={token.name}
										tokenNetwork={token.network}
									/>
								</div>
							</td>
							<td>
								<Balance
									balance={bnToBig(token.balance)}
									decimal={token.decimals}
									estimatedPrice={token.estimatedPrice}
									toDisplay={amountConverter.BNtoDisplay(
										token.balance,
										token.symbol,
									)}
								/>
							</td>
							{onChain && (
								<td>
									<Balance
										balance={bnToBig(token.onChainBalance)}
										decimal={token.decimals}
										estimatedPrice={token.estimatedPrice}
										toDisplay={amountConverter.BNtoDisplay(
											token.onChainBalance ?? BN_ZERO,
											token.symbol,
										)}
									/>
								</td>
							)}
							<td data-testid={`price-${token.symbol}`}>
								{formatPrice(big(token.estimatedPrice))}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

interface BalanceProperties {
	balance: BigNumber;
	decimal: number;
	estimatedPrice: number;
	toDisplay: string;
}

function Balance({
	balance,
	decimal,
	estimatedPrice,
	toDisplay,
}: BalanceProperties) {
	const estimatedPriceWithPrecision = balance
		.shiftedBy(-1 * decimal)
		.multipliedBy(estimatedPrice);

	return (
		<div className="text-[18px] font-medium text-left break-words">
			<p className="mt-1">
				{toDisplay}
				<sup className="ml-1 font- text-[10px]">
					({formatPrice(estimatedPriceWithPrecision)})
				</sup>
			</p>
		</div>
	);
}
interface TokenDetailInterface {
	tokenName: string;
	tokenNetwork: string;
}
const TokenDetail = ({ tokenName, tokenNetwork }: TokenDetailInterface) => {
	return (
		<>
			<p className="font-bold">
				{tokenName}
				<sup className="pl-1 font-normal text-[10px]">{tokenNetwork}</sup>
			</p>
		</>
	);
};

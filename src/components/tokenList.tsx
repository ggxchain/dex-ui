import { formatPrice } from "@/services/utils";
import TokenDecimals from "@/tokenDecimalsConverter";
import type { Amount, Token } from "@/types";
import { BN, BN_ZERO } from "@polkadot/util";
import Image from "next/image";
import { useState } from "react";
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
	onDeposit?: (token: ListElement) => void;
	onWithdraw?: (token: ListElement) => void;
	depositDisabled?: boolean;
	withdrawDisabled?: boolean;
	dexBalances?: Map<number, BN>;
	showDepositWithdraw?: boolean;
}

export default function TokenList({
	tokens,
	onClick,
	className,
	selected,
	onChain,
	isInitialized,
	onDeposit,
	onWithdraw,
	depositDisabled,
	withdrawDisabled,
	dexBalances,
	showDepositWithdraw = false,
}: Readonly<TokenListProperties>) {
	const [errorIcon, setErrorIcon] = useState<Map<number, boolean>>(new Map());

	const handleClick = (token: ListElement) => {
		if (onClick !== undefined) {
			onClick(token);
		}
	};
	const colSpan = showDepositWithdraw ? (!onChain ? 4 : 5) : 3;
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
					{showDepositWithdraw ? <th></th> : ""}
				</tr>
			</thead>
			<tbody>
				{!isInitialized && tokens.length === 0 ? (
					<tr>
						<td colSpan={colSpan}>
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
						<td colSpan={colSpan} className="text-center">
							No tokens found
						</td>
					</tr>
				) : null}

				{tokens.map((token, index) => {
					const _isSelected = token.id === selected?.id;
					const amountConverter = new TokenDecimals(token.decimals);

					const tokenBalance = dexBalances
						? new BN(dexBalances.get(token.id) ?? new BN(0))
						: new BN(0);

					const withdrawBtnDisable =
						(showDepositWithdraw &&
							(withdrawDisabled || tokenBalance.lte(BN_ZERO))) ||
						0;

					return (
						<tr
							key={token.symbol}
							onClick={() => handleClick(token)}
							className={`text-left font-medium text-[18px] text-GGx-light  [&>td]:px-6 [&>td]:py-1 even:bg-GGx-black2 even:bg-opacity-70 ${
								onClick ? "glow-on-hover cursor-pointer" : ""
							}`}
						>
							<td>
								<div className="flex flex-col md:flex-row items-center w-full">
									{errorIcon.get(index) ? (
										<Image
											width={0}
											height={0}
											src={"/svg/ggxt.svg"}
											className="opacity-35 md:w-6 md:h-6 w-5 h-5 my-1 mr-2"
											alt={`${token.name} icon`}
										/>
									) : (
										<Image
											width={0}
											height={0}
											onError={() => {
												setErrorIcon(
													(errorIcons) => new Map(errorIcons.set(index, true)),
												);
											}}
											src={token.url}
											className="md:w-6 md:h-6 w-5 h-5 my-1 mr-2"
											alt={`${token.name} icon`}
										/>
									)}

									<TokenDetail
										tokenName={token.name}
										tokenNetwork={token.network}
									/>
								</div>
							</td>
							<td>
								<Balance
									amountConverter={amountConverter}
									symbol={token.symbol}
									balance={token.balance}
									estimatedPrice={token.estimatedPrice}
								/>
							</td>
							{onChain && (
								<td>
									<Balance
										amountConverter={amountConverter}
										symbol={token.symbol}
										balance={token.onChainBalance ?? BN_ZERO}
										estimatedPrice={token.estimatedPrice}
									/>
								</td>
							)}
							<td data-testid={`price-${token.symbol}`}>
								{formatPrice(token.estimatedPrice)}
							</td>
							{showDepositWithdraw ? (
								<td>
									<span
										data-testid={`deposit-${token.symbol}`}
										onClick={() => !depositDisabled && onDeposit?.(token)}
										className={`font-thin cursor-pointer text-GGx-light underline  ${
											depositDisabled && "cursor-not-allowed opacity-35"
										}`}
									>
										Deposit
									</span>
									<span
										className={"font-thin  ml-2 mr-2 text-GGx-light opacity-35"}
									>
										|
									</span>
									<span
										data-testid={`withdraw-${token.symbol}`}
										onClick={() => !withdrawBtnDisable && onWithdraw?.(token)}
										className={`font-thin cursor-pointer text-GGx-light underline ${
											withdrawBtnDisable && "cursor-not-allowed opacity-35"
										}`}
									>
										Withdraw
									</span>
								</td>
							) : (
								""
							)}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

interface BalanceProperties {
	balance: Amount;
	estimatedPrice: number;
	symbol: string;
	amountConverter: TokenDecimals;
}

function Balance({
	balance,
	estimatedPrice,
	symbol,
	amountConverter,
}: BalanceProperties) {
	const estimatedPriceWithPrecision =
		amountConverter.BNToFloat(balance) * estimatedPrice;

	return (
		<div className="text-[18px] font-medium text-left break-words">
			<p className="mt-1">
				{amountConverter.BNtoDisplay(balance, symbol)}
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

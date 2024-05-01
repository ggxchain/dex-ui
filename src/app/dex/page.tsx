"use client";

import { GrayButton, YellowButton } from "@/components/common/button";
import Ruler, { GrayRuler } from "@/components/common/ruler";
import OrderBook, { useOrderBookOrders } from "@/components/dex/orderBook";
import OrderExpireSelect, {
	useExpire,
} from "@/components/dex/orderExpireSelect";
import OrdersList, { useUserOrders } from "@/components/dex/orderList";
import TokenSelector, {
	type TokenWithPrice,
	useTokens,
} from "@/components/dex/tokenSelector";
import type Order from "@/order";
import type Pair from "@/pair";
import Contract, { errorHandler } from "@/services/api";
import GGXWallet from "@/services/ggx";
import { count_decimals, fixDP, formatPrice, lg } from "@/services/utils";
import { MAX_DP } from "@/settings";
import TokenDecimals from "@/tokenDecimalsConverter";
import type { Amount, DetailedOrder } from "@/types";
import { BN, BN_ZERO } from "@polkadot/util";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Loading from "./loading";

type TokenData = TokenWithPrice & {
	amount: Amount;
};

export default function Dex() {
	let mesg = "";
	const milisecPerYear = new BN(31536000).mul(new BN(1000));
	const contractRef = useRef<Contract>(new Contract());
	const [isMaker, setIsMaker] = useState<boolean>(false);
	const [sellAmountStr, setSellAmountStr] = useState("");
	const [buyAmountStr, setbuyAmountStr] = useState("");
	const [sell, setSell] = useState<TokenData>();
	const [buy, setBuy] = useState<TokenData>();
	const [availableBalanceNormalized, setAvailableBalanceNormalized] =
		useState<Amount>(BN_ZERO);
	const [order, setOrder] = useState<Order>();
	const [tokens, loadTokens] = useTokens(contractRef.current);
	const [userOrders, updateUserOrders] = useUserOrders(contractRef.current);
	const [expireNumber, expireUnit, convertToMillis, setExpiration] =
		useExpire();
	const isConnected = useRef<boolean>();
	const [isInitialized, setIsInitialized] = useState(false);

	const orderBookOrders = useOrderBookOrders(buy, sell, contractRef.current);

	const router = useRouter();
	const amountConverter = TokenDecimals.normalizedTokenDecimals(
		sell?.decimals ?? 1,
		buy?.decimals ?? 1,
	);

	useEffect(() => {
		const wallet = new GGXWallet();
		isConnected.current = wallet.pubkey() !== undefined;
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		updateUserOrders();
		loadTokens();
		setIsInitialized(true);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (sell !== undefined) {
			const contract = contractRef.current;
			contract
				.balanceOf(sell.id)
				.then((balance) => {
					setAvailableBalanceNormalized(
						amountConverter.normalize(balance, sell.decimals),
					);
				})
				.catch(errorHandler);
		}
	}, [sell, buy]);

	const onClear = () => {
		setSell(undefined);
		setBuy(undefined);
		setOrder(undefined);
		setAvailableBalanceNormalized(BN_ZERO);
		setExpiration("0", { value: "Minutes" });
	};

	const onLogin = () => {
		router.push("/wallet");
	};

	const isTaker = !isMaker;
	const isTokenNotSelected = sell === undefined || buy === undefined;
	const isTokenSame = sell?.symbol === buy?.symbol;
	const isWalletNotConnected = !isConnected.current;
	const isOrderNotChosen = order === undefined;

	const orderRequested = amountConverter.normalize(
		order?.amoutRequested ?? BN_ZERO,
		sell?.decimals ?? 1,
	);
	const orderOffered = amountConverter.normalize(
		order?.amountOffered ?? BN_ZERO,
		buy?.decimals ?? 1,
	);

	const sellAmount = !isTokenNotSelected
		? isMaker
			? amountConverter.strFloatToBN(sellAmountStr)
			: orderRequested
		: BN_ZERO; //sell.amount
	const buyAmount = !isTokenNotSelected
		? isMaker
			? amountConverter.strFloatToBN(buyAmountStr)
			: orderOffered
		: BN_ZERO; //buy.amount

	const isSellAmountZero = sellAmount.eq(BN_ZERO);
	const isUserBalanceNotEnough =
		!isWalletNotConnected && availableBalanceNormalized.lt(sellAmount);
	const isAmountZero = isSellAmountZero || buyAmount.eq(BN_ZERO);
	const isExpirationZero = isMaker && expireNumber === "0";

	const rate =
		!isTokenNotSelected && !buyAmount.eq(BN_ZERO) && !sellAmount.eq(BN_ZERO)
			? amountConverter.divWithPrecision(buyAmount, sellAmount)
			: 0;

	const isFormHasErrors =
		isExpirationZero ||
		isTokenNotSelected ||
		isTokenSame ||
		isAmountZero ||
		isWalletNotConnected ||
		isUserBalanceNotEnough ||
		(isTaker && isOrderNotChosen);

	const onSwap = () => {
		if (sellAmount.lte(BN_ZERO)) {
			mesg = "Sell amount should be greater than zero";
			console.warn(mesg);
			toast.warn(mesg);
			return;
		}
		if (buyAmount.lte(BN_ZERO)) {
			mesg = "Buy amount should be greater than zero";
			console.warn(mesg);
			toast.warn(mesg);
			return;
		}
		if (isFormHasErrors) {
			console.error("onSwap(): form has errors:", isAmountZero);
			return;
		}
		const pair = [sell.id, buy.id] as Pair;
		const contract = contractRef.current;
		const callback = () => {
			updateUserOrders();
			onClear();
		};

		if (isMaker) {
			// Basically, we need to send the amount of tokens that we want to sell but we need to convert it to the decimals of the token.
			const sellTokenAmount = amountConverter.denormalize(
				sellAmount,
				sell.decimals,
			);
			const buyTokenAmount = amountConverter.denormalize(
				buyAmount,
				buy.decimals,
			);
			const milisec = convertToMillis();
			if (milisec.gt(milisecPerYear)) {
				mesg = "cannot be greater than 1 year";
				console.warn(mesg);
				toast.warn(mesg);
				return;
			}
			contract
				.makeOrder(
					pair,
					sellTokenAmount,
					buyTokenAmount,
					"SELL",
					milisec,
					callback,
				)
				.catch(errorHandler);
		} else if (!isOrderNotChosen) {
			contract.takeOrder(order.counter, callback).catch(errorHandler);
		}
	};

	const onOrderChange = (order: Order) => {
		setOrder(order);
	};
	const onSellChange = (token: TokenWithPrice, inputStr: string) => {
		if (token.id !== sell?.id) {
			setOrder(undefined);
		}
		let input = inputStr;
		const dpLen = count_decimals(inputStr);
		if (dpLen > MAX_DP) {
			input = fixDP(inputStr);
		}
		let amtBn = BN_ZERO;
		try {
			amtBn = amountConverter.strFloatToBN(input);
		} catch (err) {
			console.warn(err);
			toast.warn("sell amount invalid");
			return;
		}
		setSellAmountStr(input);
		setSell({ ...token, amount: amtBn });
	};

	const onBuyChange = (token: TokenWithPrice, inputStr: string) => {
		lg("onBuyChange", inputStr);
		if (token.id !== buy?.id) {
			setOrder(undefined);
		}

		let input = inputStr;
		const dpLen = count_decimals(inputStr);
		if (dpLen > MAX_DP) {
			input = fixDP(inputStr);
		}
		let amtBn = BN_ZERO;
		try {
			amtBn = amountConverter.strFloatToBN(input);
		} catch (err) {
			console.warn(err);
			toast.warn("buy amount invalid");
			return;
		}
		setbuyAmountStr(input);
		setBuy({ ...token, amount: amtBn });
	};

	const onCancelOrder = (order: DetailedOrder) => {
		contractRef.current
			.cancelOrder(order.counter, () => {
				updateUserOrders();
			})
			.catch(errorHandler);
	};

	const buyPriceRate = rate * (buy?.price ?? 0);

	// 1/rate
	const reverseRate = rate > 0 ? 1 / rate : 0;
	const sellPriceRate = reverseRate * (sell?.price ?? 0);

	const buyPrice = amountConverter.BNToFloat(buyAmount) * sellPriceRate;
	const sellPrice = amountConverter.BNToFloat(sellAmount) * buyPriceRate;

	const comparedToMarket =
		!isTokenNotSelected && !isAmountZero && buyPrice > 0
			? ((sellPrice - buyPrice) * 100) / buyPrice
			: 0;

	return (
		<div className="text-GGx-gray flex flex-col w-full items-center">
			<div className="flex flex-col w-full">
				<div className="flex text-xl justify-between text-[30px] pb-[10px]">
					<button onClick={() => setIsMaker(false)} type="button">
						<p className={isTaker ? "text-GGx-yellow" : "text-GGx-gray"}>
							Taker order
						</p>
					</button>
					<button onClick={() => setIsMaker(true)} type="button">
						<p className={isMaker ? "text-GGx-yellow" : "text-GGx-gray"}>
							Maker order
						</p>
					</button>
				</div>

				<Ruler />

				<div className="flex flex-col xl:flex-row w-full">
					<div className="flex flex-col rounded-3xl secondary-gradient mt-5 basis-3/5">
						<div className="flex justify-between text-[18px]">
							<p className="font-medium">Sell</p>
							<div className="flex">
								<p>
									Available:
									<span className="font-bold">
										{" "}
										{amountConverter.BNtoDisplay(
											availableBalanceNormalized,
											sell?.symbol ?? "",
										)}
									</span>
								</p>
							</div>
						</div>
						<TokenSelector
							token={sell}
							tokens={tokens}
							lockedAmount={isTaker}
							amount={sellAmountStr}
							onChange={onSellChange}
						/>
						<div className="flex flex-col text-xs text-GGx-yellow">
							{isUserBalanceNotEnough && !isTokenNotSelected && (
								<div className="flex text-xs items-center mt-1 justify-between">
									<p className="w-4/5">
										The balance is not enough to make this swap
									</p>
									{isMaker && ( // Taker can't regulate the amount of the order.
										<button
											type="button"
											className="ml-2 p-1 rounded-2xl border grow-on-hover"
											onClick={() =>
												setSell({ ...sell, amount: availableBalanceNormalized })
											}
										>
											Set max
										</button>
									)}
								</div>
							)}
							{isTokenSame && !isAmountZero && (
								<div className="flex text-xs items-center mt-1 justify-between">
									<p>Token for buy/sell should not be the same</p>
								</div>
							)}
						</div>
						<p className="text-[18px] font-medium mt-5">Buy</p>
						<TokenSelector
							token={buy}
							tokens={tokens}
							lockedAmount={isTaker}
							amount={buyAmountStr}
							onChange={onBuyChange}
						/>

						{isMaker && (
							<div>
								<p className="text-[18px] font-medium mt-5">Expiration</p>
								<OrderExpireSelect
									expNum={expireNumber}
									unit={expireUnit}
									onChange={setExpiration}
								/>
							</div>
						)}

						<div className="pt-[18px]">
							<GrayRuler />

							<div className="flex justify-between pt-[10px]">
								<p className="font-semibold">RATE:</p>
								{rate > 0 && !isTokenNotSelected && !isTokenSame ? (
									<div className="flex flex-col text-GGx-light">
										<p className="font-semibold">
											1 {sell.name} = {formatPrice(rate)} {buy.name} ≈ $
											{formatPrice(buyPriceRate)}
										</p>
										<p className="text-base text-right text-GGx-gray">
											1 {buy.name} = {formatPrice(reverseRate)} {sell.name} ≈ $
											{formatPrice(sellPriceRate)}
										</p>
									</div>
								) : (
									<p className="text-GGx-light">0.00</p>
								)}
							</div>

							<div className="flex justify-between ">
								<p className="font-semibold">COMPARED TO CEX:</p>
								<p
									className={`${
										comparedToMarket < 0
											? "text-GGx-red"
											: comparedToMarket > 0
												? "text-GGx-green"
												: ""
									}`}
								>
									{formatPrice(Math.abs(comparedToMarket))}%
								</p>
							</div>

							<div className="flex justify-between">
								<p className="font-semibold">TOTAL FEE:</p>
								<p>0.00</p>
							</div>

							<div className="w-full mt-5 mb-5">
								<GrayRuler />
							</div>

							<div className="flex w-3/5 gap-4 pt-[18px]">
								{isWalletNotConnected ? (
									<YellowButton onClick={onLogin}>Connect wallet</YellowButton>
								) : (
									<YellowButton disabled={isFormHasErrors} onClick={onSwap}>
										{isTaker ? "Take order" : "Make order"}
									</YellowButton>
								)}
								<GrayButton className="basis-1/5" onClick={onClear}>
									Clear
								</GrayButton>
							</div>
						</div>
					</div>

					<Suspense fallback={<Loading />}>
						<div className="md:has-[table]:py-12 md:py-5 pl-5 basis-2/5">
							<OrderBook
								orders={orderBookOrders}
								buyToken={buy}
								sellToken={sell}
								onChange={onOrderChange}
								selectedOrder={order}
							/>
						</div>
					</Suspense>
				</div>
			</div>

			<Suspense fallback={<Loading />}>
				<div className="py-[75px] w-full ">
					<OrdersList
						orders={userOrders}
						cancelOrder={onCancelOrder}
						isInitialized={isInitialized}
					/>
				</div>
			</Suspense>
		</div>
	);
}

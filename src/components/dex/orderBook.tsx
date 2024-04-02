import type Order from "@/order";
import { OrderUtils } from "@/order";
import type Pair from "@/pair";
import type Contract from "@/services/api";
import { errorHandler } from "@/services/api";
import TokenDecimals from "@/tokenDecimalsConverter";
import type { Amount, DetailedOrder, Token } from "@/types";
import { BN_ZERO } from "@polkadot/util";
import { useEffect, useMemo, useState } from "react";
import { GrayRuler } from "../common/ruler";

export interface OrderBookProps {
	buyToken?: Token;
	sellToken?: Token;
	selectedOrder?: Order;
	onChange: (order: Order) => void;
	orders: DetailedOrder[];
}

export type NormalizedOrder = DetailedOrder & {
	amountRequestedNormalized: Amount;
	amountOfferedNormalized: Amount;
};

export function useOrderBookOrders(
	buyToken: Token | undefined,
	sellToken: Token | undefined,
	contract: Contract,
) {
	const [orders, setOrders] = useState<DetailedOrder[]>([]);

	useEffect(() => {
		if (buyToken === undefined || sellToken === undefined) {
			return;
		}
		const tokenPair = [sellToken.id, buyToken.id] as Pair;
		contract
			.allOrders(tokenPair)
			.then((orders) => {
				setOrders(orders);
			})
			.catch(errorHandler);
	}, [buyToken, sellToken]);

	return orders;
}

export default function OrderBook({
	buyToken,
	sellToken,
	selectedOrder,
	onChange,
	orders,
}: Readonly<OrderBookProps>) {
	const amountConverter = TokenDecimals.normalizedTokenDecimals(
		sellToken?.decimals ?? 8,
		buyToken?.decimals ?? 8,
	);
	const sortCmp = (a: NormalizedOrder, b: NormalizedOrder) => {
		const aPrice = amountConverter.divWithPrecision(
			a.amountRequestedNormalized,
			a.amountOfferedNormalized,
		);
		const bPrice = amountConverter.divWithPrecision(
			b.amountRequestedNormalized,
			b.amountOfferedNormalized,
		);
		return aPrice - bPrice;
	};

	const normalizedOrders = useMemo<NormalizedOrder[]>(
		() =>
			orders.map((order: DetailedOrder) => {
				const [desiredToken, ownedToken] =
					OrderUtils.desiredToken(order) === order.pair[0]
						? [order.token1, order.token2]
						: [order.token2, order.token1];
				return {
					...order,
					amountRequestedNormalized: amountConverter.normalize(
						order.amoutRequested,
						desiredToken.decimals,
					),
					amountOfferedNormalized: amountConverter.normalize(
						order.amountOffered,
						ownedToken.decimals,
					),
				};
			}),
		[orders],
	);

	const buyOrders = useMemo<NormalizedOrder[]>(
		() =>
			normalizedOrders
				.filter((order: Order) => order.orderType === "BUY")
				.sort((a, b) => sortCmp(a, b)),
		[normalizedOrders],
	);
	const sellOrders = useMemo<NormalizedOrder[]>(
		() =>
			normalizedOrders
				.filter((order: Order) => order.orderType !== "BUY")
				.sort((a, b) => sortCmp(b, a)),
		[normalizedOrders],
	);

	useEffect(() => {
		if (buyOrders.length > 0) {
			onChange(buyOrders[0]);
		}
	}, [normalizedOrders]);

	const buyTotalVolume = useMemo<Amount>(
		() =>
			buyOrders.reduce((acc, order) => order.amoutRequested.add(acc), BN_ZERO),
		[buyOrders],
	);
	const sellTotalVolume = useMemo<Amount>(
		() =>
			sellOrders.reduce((acc, order) => order.amountOffered.add(acc), BN_ZERO),
		[sellOrders],
	);

	return (
		<div className="flex flex-col border-GGx-gray border rounded-[4px] px-[26px] py-[22px]">
			<p className="text-[24px] text-GGx-gray w-full text-left">Order book</p>
			<table className="table-fixed mt-2 md:mt-5 overflow-auto">
				<thead>
					<tr className="text-GGx-gray">
						<th className="text-left ">
							Price{" "}
							<span className="italic font-semibold uppercase">
								{buyToken?.symbol ?? ""}
							</span>
						</th>
						<th className="text-left">
							Volume{" "}
							<span className="italic font-semibold uppercase">
								{sellToken?.symbol ?? ""}
							</span>
						</th>
					</tr>
				</thead>

				<tbody>
					<tr className="relative w-full h-[18px]">
						<td>
							<div className="absolute h-full w-[85%] top-1/2 -translate-y-1/2 left-0">
								<GrayRuler />
							</div>
							<div className="absolute right-0 top-1/2 -translate-y-1/2 font-telegraf  text-[10px] py-[4px] px-[8px] border-[0.5px] rounded-[4px] text-GGx-light border-GGx-gray bg-GGx-red/50">
								{" "}
								Asks
							</div>
						</td>
					</tr>

					{sellOrders.length === 0 ? (
						<tr>
							<td className="text-GGx-red">No asks found</td>
						</tr>
					) : (
						sellOrders.map((order) => {
							const orderPrice = amountConverter.divWithPrecision(
								order.amountRequestedNormalized,
								order.amountOfferedNormalized,
							);
							return (
								<tr
									key={order.counter}
									className="relative w-full text-GGx-red"
								>
									<td className="text-left font-medium text-GGx-red">
										{orderPrice.toFixed(9)}
									</td>
									<td className="text-left">
										<span className="text-GGx-light font-medium bg-GGx-red/50 rounded-[4px] px-[6px]">
											{amountConverter.BNtoDisplay(
												order.amountOfferedNormalized,
												"",
											)}
										</span>
									</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
			<table className="table-auto mt-2 md:mt-5 overflow-auto">
				<thead className="relative">
					<tr>
						<th className="text-left">
							Price{" "}
							<span className="italic font-semibold uppercase">
								{buyToken?.symbol ?? ""}
							</span>
						</th>
						<th className="text-left">
							Volume{" "}
							<span className="italic font-semibold uppercase">
								{sellToken?.symbol ?? ""}
							</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="relative w-full h-[18px]">
						<td>
							<div className="absolute h-full w-[85%] top-1/2 -translate-y-1/2 left-0">
								<GrayRuler />
							</div>
							<div className="absolute right-0 top-1/2 -translate-y-1/2 font-telegraf  text-[10px] py-[4px] px-[8px] border-[0.5px] rounded-[4px] text-GGx-light border-GGx-gray bg-GGx-green/50">
								{" "}
								Bids
							</div>
						</td>
					</tr>
					{buyOrders.length === 0 ? (
						<tr>
							<td className="text-GGx-green">No bids found</td>
						</tr>
					) : (
						buyOrders.map((order) => {
							const selected = order.counter === selectedOrder?.counter;
							const orderPrice = amountConverter.divWithPrecision(
								order.amountOfferedNormalized,
								order.amountRequestedNormalized,
							);
							return (
								<tr
									key={order.counter}
									className={`relative w-full cursor-pointer glow-on-hover rounded-l-md ${selected} `}
									onClick={() => onChange(order)}
								>
									<td className="relative text-left font-medium text-GGx-green">
										{selected && <p className="absolute h-full left-0">↠</p>}
										<p className="pl-3">{orderPrice.toFixed(9)}</p>
									</td>
									<td className="text-left">
										<span className="text-GGx-light font-medium bg-GGx-green/50 rounded-[4px] px-[6px]">
											{amountConverter.BNtoDisplay(
												order.amountRequestedNormalized,
												"",
											)}
										</span>
									</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
}

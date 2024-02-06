import Order, { OrderUtils } from "@/order";
import Pair from "@/pair";
import Contract, { errorHandler } from "@/services/contract";
import TokenDecimals from "@/tokenDecimalsConverter";
import { Amount, DetailedOrder, Token } from "@/types";
import { BN_ZERO } from "@polkadot/util";
import { useEffect, useMemo, useState } from "react";

export interface OrderBookProps {
    buyToken: Token;
    sellToken: Token;
    selectedOrder?: Order;
    onChange: (order: Order) => void;
    orders: DetailedOrder[];
}

export type NormalizedOrder = DetailedOrder & {
    amountRequestedNormalized: Amount;
    amountOfferedNormalized: Amount;
}

export function useOrderBookOrders(buyToken: Token | undefined, sellToken: Token | undefined, contract: Contract) {
    const [orders, setOrders] = useState<DetailedOrder[]>([]);

    useEffect(() => {
        if (buyToken === undefined || sellToken === undefined) {
            return;
        }
        const tokenPair = [sellToken.id, buyToken.id] as Pair;
        contract.allOrders(tokenPair).then((orders) => {
            setOrders(orders);
        }).catch(errorHandler);
    }, [buyToken, sellToken]);

    return orders;

}

export default function OrderBook({ buyToken, sellToken, selectedOrder, onChange, orders }: Readonly<OrderBookProps>) {
    const amountConverter = TokenDecimals.normalizedTokenDecimals(sellToken.decimals, buyToken.decimals);
    const sortCmp = (a: NormalizedOrder, b: NormalizedOrder) => {
        const aPrice = amountConverter.divWithPrecision(a.amountRequestedNormalized, a.amountOfferedNormalized);
        const bPrice = amountConverter.divWithPrecision(b.amountRequestedNormalized, b.amountOfferedNormalized);
        return aPrice - bPrice;
    }

    const normalizedOrders = useMemo<NormalizedOrder[]>(() => orders.map((order: DetailedOrder) => {
        const [desiredToken, ownedToken] = OrderUtils.desiredToken(order) === order.pair[0] ? [order.token1, order.token2] : [order.token2, order.token1];
        return {
            ...order,
            amountRequestedNormalized: amountConverter.normalize(order.amoutRequested, desiredToken.decimals),
            amountOfferedNormalized: amountConverter.normalize(order.amountOffered, ownedToken.decimals),
        }
    }), [orders]);

    const buyOrders = useMemo<NormalizedOrder[]>(() => normalizedOrders.filter((order: Order) => order.orderType === "BUY").sort((a, b) => sortCmp(a, b)), [normalizedOrders]);
    const sellOrders = useMemo<NormalizedOrder[]>(() => normalizedOrders.filter((order: Order) => order.orderType !== "BUY").sort((a, b) => sortCmp(b, a)), [normalizedOrders]);

    useEffect(() => {
        if (buyOrders.length > 0) {
            onChange(buyOrders[0]);
        }
    }, [buyOrders])

    const buyTotalVolume = useMemo<Amount>(() => buyOrders.reduce((acc, order) => order.amoutRequested.add(acc), BN_ZERO), [buyOrders]);
    const sellTotalVolume = useMemo<Amount>(() => sellOrders.reduce((acc, order) => order.amountOffered.add(acc), BN_ZERO), [sellOrders]);

    return (
        <div className="flex flex-col text-xs">
            <p className="text-base w-full text-center">Order book</p>
            <table className="table-auto mt-2 md:mt-5 overflow-auto">
                <thead>
                    <tr>
                        <th className="text-left pl-4">Price <span className="italic font-semibold uppercase">{buyToken.symbol}</span></th>
                        <th className="text-right">Volume <span className="italic font-semibold uppercase">{sellToken.symbol}</span></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="font-bold">Asks</td>
                    </tr>
                    {
                        sellOrders.length === 0
                            ? <tr><td className="text-red-600">No asks found</td></tr>
                            : sellOrders.map((order) => {
                                const orderPrice = amountConverter.divWithPrecision(order.amountRequestedNormalized, order.amountOfferedNormalized);
                                // It's safe to not normalize the volume as it compared agains same denominator.
                                const percent = order.amountOffered.muln(100).div(sellTotalVolume).toNumber();
                                return (
                                    <tr key={order.counter} className="relative w-full text-red-600">
                                        <td className="p-1 pl-4 text-left font-bold">{orderPrice.toFixed(9)}</td>
                                        <td className="p-1 text-right text-white font-bold">
                                            {amountConverter.BNToFloat(order.amountOfferedNormalized).toFixed(9)}
                                            <div style={{ width: `${Math.round(percent)}%` }} className="absolute bg-red-500/45 rounded-l-md h-full right-0 top-0 bottom-0"></div>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                    <tr>
                        <td className="font-bold mt-5">Bids</td>
                    </tr>
                    {
                        buyOrders.length === 0
                            ? <tr><td className="text-green-500">No bids found</td></tr>
                            : buyOrders.map((order) => {
                                const selected = order.counter === selectedOrder?.counter;
                                const percent = order.amoutRequested.muln(100).div(buyTotalVolume).toNumber();
                                const orderPrice = amountConverter.divWithPrecision(order.amountOfferedNormalized, order.amountRequestedNormalized);
                                return (
                                    <tr key={order.counter} className={`relative w-full cursor-pointer glow-on-hover rounded-l-md text-green-500 ${selected} `} onClick={() => onChange(order)}>
                                        <td className="p-1 relative text-left font-bold">
                                            {selected && <p className="absolute h-full left-0">↠</p>}
                                            <p className="pl-3">
                                                {orderPrice.toFixed(9)}
                                            </p>
                                        </td>
                                        <td className="p-1 text-right text-white font-bold">
                                            {amountConverter.BNToFloat(order.amountRequestedNormalized).toFixed(9)}
                                            <div style={{ width: `${Math.round(percent)}%` }} className="absolute bg-green-500/45 rounded-l-md h-full right-0 top-0 bottom-0"></div>
                                        </td>

                                    </tr>
                                )
                            })
                    }
                </tbody >
            </table >
        </div >
    );
}

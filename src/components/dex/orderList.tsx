import { OrderUtils } from "@/order";
import Contract, { errorHandler } from "@/services/contract";
import TokenDecimals from "@/tokenDecimalsConverter";
import { DetailedOrder } from "@/types";
import { useState } from "react";

export const useUserOrders = (contract: Contract) => {
    const [orders, setOrders] = useState<DetailedOrder[]>([]);

    const updateOrders = () => {
        contract.allUserOrders().then((orders: DetailedOrder[]) => {
            setOrders(orders);
        }).catch(errorHandler);
    }

    return [orders, updateOrders] as const;
}

interface UserOrderProps {
    orders: DetailedOrder[];
    cancelOrder: (order: DetailedOrder) => void;
}

export default function OrdersList({ orders, cancelOrder }: Readonly<UserOrderProps>) {
    return <div className="w-full h-full flex flex-col p-5 text-xs md:text-base">
        <p className="md:text-xl text-base text-center w-full">My orders</p>
        <table className="table-fixed mt-2 md:mt-5 border-separate md:border-spacing-y-2 border-spacing-y-1 [&>td]:px-6 [&>td]:py-20`">
            <thead>
                <tr className="bg-bg-gr-2/80 p-1">
                    <th className="text-center rounded-l-xl">Buy</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Sell</th>
                    <th className="text-center rounded-r-xl">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.length === 0
                        ? <tr><td className="text-slate-100 opacity-50 text-center">No orders found</td></tr>
                        : orders.map((order) => {
                            const ownedToken = OrderUtils.ownedToken(order) === order.pair[0] ? order.token1 : order.token2;
                            const desiredToken = OrderUtils.desiredToken(order) === order.pair[0] ? order.token1 : order.token2;
                            const amountConverter = TokenDecimals.normalizedTokenDecimals(desiredToken.decimals, ownedToken.decimals);
                            const requested = amountConverter.normalize(order.amoutRequested, desiredToken.decimals);
                            const offered = amountConverter.normalize(order.amountOffered, ownedToken.decimals);
                            const price = amountConverter.divWithPrecision(requested, offered);
                            return (
                                <tr key={order.counter} className="h-full w-full even:bg-bg-gr-2/80 odd:bg-bg-gr-2/20">

                                    {/*Buy*/}
                                    <td className="p-1 text-center rounded-l-xl">
                                        {amountConverter.BNToFloat(requested).toFixed(9)} {desiredToken.name}
                                    </td>
                                    {/*Price*/}
                                    <td className="p-1 text-center">{price.toFixed(9)} {desiredToken.name}</td>

                                    <td className="p-1 text-center text-white">
                                        {amountConverter.BNToFloat(offered).toFixed(9)} {ownedToken.name}
                                    </td>
                                    <td className="rounded-r-xl">
                                        <button onClick={() => cancelOrder(order)} className="md:p-1 p-[0.125rem] w-full grow-on-hover glow-on-hover rounded-xl border">Cancel</button>
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    </div>
}

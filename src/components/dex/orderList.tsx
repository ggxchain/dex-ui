import { OrderUtils } from "@/order";
import Contract, { errorHandler } from "@/services/api";
import TokenDecimals from "@/tokenDecimalsConverter";
import { DetailedOrder } from "@/types";
import { useEffect, useState } from "react";

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
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        // TODO: JS timers slow down when you leave the page, and in a few hours they became not accurate at all.
        // Ideally, we could reset the interval at some periods of time and check it.
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [orders])

    return <div className="w-full h-full flex flex-col p-5 text-xs md:text-base">
        <p className="md:text-xl text-base text-center w-full">My orders</p>
        <table className="table-fixed mt-2 md:mt-5 border-separate md:border-spacing-y-2 border-spacing-y-1 [&>td]:px-6 [&>td]:py-20`">
            <thead>
                <tr className="bg-bg-gr-2/80 p-1">
                    <th className="text-center rounded-l-xl">Buy</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Sell</th>
                    <th className="text-center">Expire in</th>
                    <th className="text-center rounded-r-xl">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.length === 0
                        ? <tr><td className="text-GGx-light opacity-50 text-center">No orders found</td></tr>
                        : orders.map((order) => {
                            const ownedToken = OrderUtils.ownedToken(order) === order.pair[0] ? order.token1 : order.token2;
                            const desiredToken = OrderUtils.desiredToken(order) === order.pair[0] ? order.token1 : order.token2;
                            const amountConverter = TokenDecimals.normalizedTokenDecimals(desiredToken.decimals, ownedToken.decimals);
                            const requested = amountConverter.normalize(order.amoutRequested, desiredToken.decimals);
                            const offered = amountConverter.normalize(order.amountOffered, ownedToken.decimals);
                            const price = amountConverter.divWithPrecision(requested, offered);

                            const expiration = order.expiration - now;
                            const expiredText = expiration < 0 ? 'Expired' : expirationFormat(expiration);
                            return (
                                <tr key={order.counter} className="h-full w-full even:bg-bg-gr-2/80 odd:bg-bg-gr-2/20">

                                    {/*Buy*/}
                                    <td className="p-1 text-center rounded-l-xl">
                                        {amountConverter.BNtoDisplay(requested, desiredToken.symbol)}
                                    </td>
                                    {/*Price*/}
                                    <td className="p-1 text-center">{price.toFixed(9)} {desiredToken.symbol}</td>

                                    <td className="p-1 text-center text-white">
                                        {amountConverter.BNtoDisplay(offered, ownedToken.symbol)}
                                    </td>
                                    <td className="p-1 text-center">
                                        {expiredText}
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
    </div >
}

function expirationFormat(timeLeft: number) {
    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    let result = '';
    if (days > 0) {
        result += `${days} Days `;
    }
    if (hours > 0) {
        result += `${hours} Hours `;
    }
    if (minutes > 0) {
        result += `${minutes} Minutes `;
    }
    result += `${seconds} Seconds `;
    return result;
}

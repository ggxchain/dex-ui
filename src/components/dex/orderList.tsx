import { OrderUtils } from "@/order";
import Contract, { errorHandler } from "@/services/api";
import TokenDecimals from "@/tokenDecimalsConverter";
import { DetailedOrder } from "@/types";
import { useEffect, useState } from "react";
import Ruler, { GrayRuler } from "../common/ruler";
import Image from "next/image";
import Close from "../common/close";

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

    return <div className="w-full h-full flex flex-col text-xs md:text-base">
        <p className="md:text-[30px] text-base w-full text-GGx-yellow pb-[16px]">My orders</p>
        <Ruler />
        <table className="table-fixed mt-2 md:mt-5 border-separate md:border-spacing-y-2 border-spacing-y-1 [&>td]:px-6 [&>td]:py-20`">
            <thead>
                <tr className="[&>th]:text-left [&>th]:text-[16px] [&th]:text-GGx-gray p-1">
                    <th className="pl-10">Order</th>
                    <th >Buy</th>
                    <th >Price</th>
                    <th >Sell</th>
                    <th >Expire in</th>
                    <th >Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="relative w-full h-[18px]">
                    <td>
                        <div className="absolute top-0 w-full">
                            <GrayRuler />
                        </div>
                    </td>
                </tr>

                {
                    orders.length === 0
                        ? <tr><td className="text-GGx-light text-[18px] font-medium text-left">No orders found</td></tr>
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
                                <tr key={order.counter} className="h-full w-full [&>td]:h-[23px] [&>td]:py-[20px] [&>td]:font-medium [&>td]:text-[18px] [&>td]:text-GGx-light [&>td]:text-left odd:bg-GGx-black2/70">
                                    <td className="flex pl-10">
                                        <Image alt='Sell' width={0} height={0} className="w-[24px] h-[24px] mr-2" src={`/svg/${ownedToken.symbol.toLowerCase()}.svg`} />
                                        <span>{'>'}</span>
                                        <Image alt='Buy' width={0} height={0} className="w-[24px] h-[24px] ml-2" src={`/svg/${desiredToken.symbol.toLowerCase()}.svg`} />

                                    </td>

                                    {/*Buy*/}
                                    <td className="text-left">
                                        {amountConverter.BNtoDisplay(requested, desiredToken.symbol)}
                                        <sup className="pl-1 text-[10px] font-telegraf">{desiredToken.network}</sup>
                                    </td>
                                    {/*Price*/}
                                    <td className="text-left">{price.toFixed(9)} {desiredToken.symbol}</td>

                                    <td className="text-left">
                                        {amountConverter.BNtoDisplay(offered, ownedToken.symbol)}
                                        <sup className="pl-1 text-[10px] font-telegraf">{ownedToken.network}</sup>
                                    </td>
                                    <td className="text-left">
                                        {expiredText}
                                    </td>
                                    <td className="rounded-r-xl">
                                        <button onClick={() => cancelOrder(order)} className="flex items-center text-GGx-yellow">
                                            <div className="w-[24px] mr-3">
                                                <Close color="#EAD158" />
                                            </div>
                                            <p className="p-0">Cancel</p>
                                        </button>
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

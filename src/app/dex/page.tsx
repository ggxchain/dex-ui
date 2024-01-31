
"use client"

import { useEffect, useRef, useState } from "react";
import Contract, { errorHandler } from "@/services/contract";
import GGXWallet from "@/services/ggx";
import Ruler from "@/components/ruler";
import { Amount, DetailedOrder, Token } from "@/types";
import TokenSelector, { TokenWithPrice, useTokens } from "@/components/tokenSelector";
import Pair from "@/pair";
import { useRouter } from "next/navigation";
import { BN_ZERO } from "@polkadot/util";
import TokenDecimals from "@/tokenDecimalsConverter";
import Order, { OrderUtils } from "@/order";

type TokenData = TokenWithPrice & {
  amount: Amount;
}

export default function Dex() {
  const [isMaker, setIsMaker] = useState<boolean>(false);
  const [sell, setSell] = useState<TokenData>();
  const [buy, setBuy] = useState<TokenData>();
  const [availableBalanceNormalized, setAvailableBalanceNormalized] = useState<Amount>(BN_ZERO);
  const [order, setOrder] = useState<Order>();
  const [tokens, loadTokens] = useTokens();
  const [userOrders, updateUserOrders] = useUserOrders();
  const isConnected = useRef<boolean>();

  const router = useRouter();
  const amountConverter = TokenDecimals.normalizedTokenDecimals(sell?.decimals ?? 1, buy?.decimals ?? 1)

  useEffect(() => {
    const wallet = new GGXWallet();
    isConnected.current = wallet.pubkey() !== undefined;
  })

  useEffect(() => {
    updateUserOrders();
    loadTokens();
  }, []);

  useEffect(() => {
    if (sell !== undefined) {
      const contract = new Contract();
      contract.balanceOf(sell.id).then((balance) => {
        setAvailableBalanceNormalized(amountConverter.normalize(balance, sell.decimals));
      }).catch(errorHandler)
    }
  }, [sell, buy]);

  const onClear = () => {
    setSell(undefined);
    setBuy(undefined);
    setOrder(undefined);
  }

  const onLogin = () => {
    router.push("/wallet");
  }


  const isTaker = !isMaker;
  const isTokenNotSelected = sell === undefined || buy === undefined;
  const isTokenSame = sell?.symbol === buy?.symbol;
  const isWalletNotConnected = !isConnected.current;
  const isOrderNotChosen = order === undefined;

  const orderRequested = amountConverter.normalize(order?.amoutRequested ?? BN_ZERO, sell?.decimals ?? 1);
  const orderOffered = amountConverter.normalize(order?.amountOffered ?? BN_ZERO, buy?.decimals ?? 1);

  const sellAmount = isMaker && !isTokenNotSelected
    ? sell.amount
    : orderRequested;

  const buyAmount = isMaker && !isTokenNotSelected
    ? buy.amount
    : orderOffered

  const isSellAmountZero = sellAmount.eq(BN_ZERO);
  const isUserBalanceNotEnough = !isWalletNotConnected && availableBalanceNormalized.lt(sellAmount);
  const isAmountZero = isSellAmountZero || buyAmount.eq(BN_ZERO);

  const rate = !isTokenNotSelected && !buyAmount.eq(BN_ZERO)
    ? amountConverter.divWithPrecision(buyAmount, sellAmount)
    : 0;

  const isFormHasErrors = isTokenNotSelected || isTokenSame || isAmountZero || isWalletNotConnected || isUserBalanceNotEnough || (isTaker && isOrderNotChosen);

  const onSwap = () => {
    if (isFormHasErrors) {
      return;
    }
    const pair = [sell.id, buy.id] as Pair;
    const contract = new Contract();
    const callback = () => {
      updateUserOrders();
      onClear();
    };

    if (isMaker) {
      // Basically, we need to send the amount of tokens that we want to sell but we need to convert it to the decimals of the token.
      const sellTokenAmount = amountConverter.denormalize(sellAmount, sell.decimals);
      const buyTokenAmount = amountConverter.denormalize(buyAmount, buy.decimals);
      contract.makeOrder(pair, sellTokenAmount, buyTokenAmount, "SELL", callback).catch(errorHandler);
    } else if (!isOrderNotChosen) {
      contract.takeOrder(order.counter, callback).catch(errorHandler);
    }
  }

  const onOrderChange = (order: Order) => {
    setOrder(order);
  };

  const onSellChange = (token: TokenWithPrice, amount: number) => {
    if (token.id != sell?.id) {
      setOrder(undefined);
    }
    setSell({ ...token, amount: amountConverter.floatToBN(amount) });
  }

  const onBuyChange = (token: TokenWithPrice, amount: number) => {
    if (token.id != buy?.id) {
      setOrder(undefined);
    }
    setBuy({ ...token, amount: amountConverter.floatToBN(amount) });
  }


  const buyPriceRate = rate * (buy?.price ?? 0);

  // 1/rate
  const reverseRate = rate > 0 ? 1 / rate : 0;
  const sellPriceRate = reverseRate * (sell?.price ?? 0);

  const buyPrice = amountConverter.BNToFloat(buyAmount) * sellPriceRate;
  const sellPrice = amountConverter.BNToFloat(sellAmount) * buyPriceRate;

  const comparedToMarket = !isTokenNotSelected && !isAmountZero && buyPrice > 0
    ? (sellPrice - buyPrice) * 100 / buyPrice
    : 0;

  return (
    <div className="text-slate-100 flex flex-col w-full items-center">
      <div className="flex w-full justify-center md:flex-row flex-col">
        <div className="flex flex-col md:w-[70%] w-full max-w-[600px]">
          <div className="flex text-md justify-between">
            <button onClick={() => setIsMaker(false)}>
              <p className={isMaker ? "text-slate-500" : ""}>Taker order</p>
            </button>
            <button onClick={() => setIsMaker(true)}>
              <p className={isMaker ? "" : "text-slate-500"}>Maker order</p>
            </button>
          </div>

          <Ruler />

          <div className="flex w-full flex-col rounded-3xl secondary-gradient p-5 mt-5">
            <div className="flex justify-between text-sm">
              <p>Sell</p>
              <div className="flex">
                <p className="text-opacity-75 font-thin">Available for swaps:</p>
                <p className="font-normal mx-5">{amountConverter.BNToFloat(availableBalanceNormalized)}</p>
              </div>
            </div>
            <TokenSelector token={sell} tokens={tokens} lockedAmount={isTaker} amount={amountConverter.BNToFloat(sellAmount)} onChange={onSellChange} />
            <div className="flex flex-col text-xs text-orange-300">
              {
                isUserBalanceNotEnough && !isTokenNotSelected &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p className="w-4/5">The balance is not enough to make this swap</p>
                  {
                    isMaker && // Taker can't regulate the amount of the order.
                    <button className="ml-2 p-1 rounded-2xl border grow-on-hover" onClick={() => setSell({ ...sell, amount: availableBalanceNormalized })}>Set max</button>
                  }
                </div>
              }
              {isTokenSame && !isAmountZero &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p>Token for buy/sell should not be the same</p>
                </div>
              }
            </div>

            <p className="text-sm mt-2">Buy</p>
            <TokenSelector token={buy} tokens={tokens} lockedAmount={isTaker} amount={amountConverter.BNToFloat(buyAmount)} onChange={onBuyChange} />

            <Ruler />

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Rate:</p>
                {rate > 0 && !isTokenNotSelected && !isTokenSame
                  ? <div className="flex flex-col">
                    <p className="font-semibold">
                      1 {sell.name} = {rate.toFixed(3)} {buy.name} ≈ ${buyPriceRate.toFixed(2)}
                    </p>
                    <p className="text-xs text-right opacity-75">
                      1 {buy.name} = {reverseRate.toFixed(3)} {sell.name} ≈ ${sellPriceRate.toFixed(2)}
                    </p>
                  </div>
                  : <p>0.00</p>
                }
              </div>

              <div className="flex justify-between ">
                <p className="font-semibold">Compared to CEx:</p>
                <p className={`${comparedToMarket < 0 ? "text-red-500" : comparedToMarket > 0 ? "text-green-500" : ""}`}>{Math.abs(comparedToMarket).toFixed(1)}%</p>
              </div>

              <div className="flex justify-between">
                <p className="font-semibold">Total fee:</p>
                <p>0.00</p>
              </div>

              <div className="flex justify-around mt-5">
                <button className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover glow-on-hover" onClick={onClear}>Clear</button>
                {
                  isWalletNotConnected
                    ? <button className="basis-3/4 rounded-2xl border p-2 m-2 grow-on-hover" onClick={onLogin}>Connect wallet</button>
                    : <button className="basis-3/4 rounded-2xl border p-2 m-2 enabled:grow-on-hover enabled:glow-on-hover disabled:opacity-50" disabled={isFormHasErrors} onClick={onSwap}>{isTaker ? "Take order" : "Make order"}</button>
                }
              </div>
            </div>
          </div>
          <OrdersList orders={userOrders} cancelOrder={() => updateUserOrders()} />
        </div>
        {
          isTaker && !isTokenNotSelected && !isTokenSame &&
          <div className="md:has-[table]:py-14 md:py-5 px-5 md:has-[table]:w-[30%] has-[table]:w-full">
            <OrderBook buyToken={buy} sellToken={sell} onChange={onOrderChange} selectedOrder={order} />
          </div>
        }
      </div>

    </div>
  )
}

interface OrderBookProps {
  buyToken: Token;
  sellToken: Token;
  selectedOrder?: Order;
  onChange: (order: Order) => void;
}

type NormalizedOrder = DetailedOrder & {
  amountRequestedNormalized: Amount;
  amountOfferedNormalized: Amount;
}

function OrderBook({ buyToken, sellToken, selectedOrder, onChange }: Readonly<OrderBookProps>) {
  const [orders, setOrders] = useState<NormalizedOrder[]>([]);

  const amountConverter = TokenDecimals.normalizedTokenDecimals(sellToken.decimals, buyToken.decimals);
  const sortCmp = (a: NormalizedOrder, b: NormalizedOrder) => {
    const aPrice = amountConverter.divWithPrecision(a.amountRequestedNormalized, a.amountOfferedNormalized);
    const bPrice = amountConverter.divWithPrecision(b.amountRequestedNormalized, b.amountOfferedNormalized);
    return aPrice - bPrice;
  }

  useEffect(() => {
    const contract = new Contract();
    const tokenPair = [sellToken.id, buyToken.id] as Pair;
    contract.allOrders(tokenPair).then((orders) => {
      const wallet = new GGXWallet();
      // Don't show him his own orders.
      const filteredOrders = orders.filter((order: DetailedOrder) => order.pubkey !== wallet.pubkey()?.address).map((order: DetailedOrder) => {
        const [desiredToken, ownedToken] = OrderUtils.desiredToken(order) == order.pair[0] ? [order.token1, order.token2] : [order.token2, order.token1];
        return {
          ...order,
          amountRequestedNormalized: amountConverter.normalize(order.amoutRequested, desiredToken.decimals),
          amountOfferedNormalized: amountConverter.normalize(order.amountOffered, ownedToken.decimals),
        }
      });
      setOrders(filteredOrders);
      if (orders.length > 0 && !selectedOrder) {
        const orders = filteredOrders.filter((order: Order) => order.orderType === "BUY").sort((a, b) => sortCmp(b, a));
        onChange(orders[0]);
      }
    }).catch(errorHandler);
  }, [buyToken, sellToken, onChange, selectedOrder]);

  const buyOrders = orders.filter((order: Order) => order.orderType === "BUY").sort((a, b) => sortCmp(a, b));
  const sellOrders = orders.filter((order: Order) => order.orderType !== "BUY").sort((a, b) => sortCmp(b, a));

  const buyTotalVolume = buyOrders.reduce((acc, order) => order.amoutRequested.add(acc), BN_ZERO);
  const sellTotalVolume = sellOrders.reduce((acc, order) => order.amountOffered.add(acc), BN_ZERO);

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
                const selected = order.counter == selectedOrder?.counter;
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

const useUserOrders = () => {
  const [orders, setOrders] = useState<DetailedOrder[]>([]);

  const updateOrders = () => {
    const contract = new Contract();
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

function OrdersList({ orders, cancelOrder }: Readonly<UserOrderProps>) {

  const onCancel = (order: DetailedOrder) => {
    const contract = new Contract();
    contract.cancelOrder(order.counter, () => {
      cancelOrder(order);
    }).catch(errorHandler);
  }

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
              const ownedToken = OrderUtils.ownedToken(order) == order.pair[0] ? order.token1 : order.token2;
              const desiredToken = OrderUtils.desiredToken(order) == order.pair[0] ? order.token1 : order.token2;
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
                    <button onClick={() => onCancel(order)} className="md:p-1 p-[0.125rem] w-full grow-on-hover glow-on-hover rounded-xl border">Cancel</button>
                  </td>
                </tr>
              )
            })
        }
      </tbody>
    </table>
  </div>
}

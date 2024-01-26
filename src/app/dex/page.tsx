
"use client"

import { useEffect, useRef, useState } from "react";
import Contract, { errorHandler } from "@/services/contract";
import GGXWallet from "@/services/ggx";
import Ruler from "@/components/ruler";
import { Amount, DetailedOrder, Order, Token } from "@/types";
import TokenSelector, { TokenWithPrice, useTokens } from "@/components/tokenSelector";
import Pair, { PairUtils } from "@/pair";
import { useRouter } from "next/navigation";
import { BN_ONE, BN_ZERO } from "@polkadot/util";
import { displayNumberWithPrecision } from "@/utils";

const presionNumber = 6;
const precision = 10 ** presionNumber;

type TokenData = TokenWithPrice & {
  amount: Amount;
}

export default function Dex() {
  const [isMaker, setIsMaker] = useState<boolean>(false);
  const [sell, setSell] = useState<TokenData>();
  const [buy, setBuy] = useState<TokenData>();
  const [availableBalance, setAvailableBalance] = useState<Amount>(BN_ZERO);
  const [order, setOrder] = useState<Order>();
  const [tokens, loadTokens] = useTokens();
  const [userOrders, updateUserOrders] = useUserOrders();
  const isConnected = useRef<boolean>();

  const router = useRouter();

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
        setAvailableBalance(balance);
      }).catch(errorHandler)
    }
  }, [sell]);

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

  const sellAmount = isMaker && !isTokenNotSelected ?
    sell.amount
    : order?.amoutRequested ?? BN_ZERO;
  const isSellAmountZero = sellAmount.eq(BN_ZERO);
  const isUserBalanceNotEnough = !isWalletNotConnected && availableBalance.lt(sellAmount);


  const displayAmount = (amount: Amount) => displayNumberWithPrecision(amount, presionNumber, 2);
  const orderRateWithPrecision = order !== undefined
    ? order.amountOffered.muln(precision).div(order.amoutRequested)
    : BN_ZERO;
  const rateWithPrecion = isMaker && !isSellAmountZero && !isTokenNotSelected
    ? buy.amount.muln(precision).div(sell.amount)
    : orderRateWithPrecision;

  const buyAmount = isMaker && !isTokenNotSelected
    ? buy.amount
    : order?.amountOffered ?? BN_ZERO;


  const isAmountZero = isSellAmountZero || buyAmount.eq(BN_ZERO);

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
      // Buy or sell is related to the first token in the pair. So, in our case it's sell.
      contract.makeOrder(pair, sellAmount, buyAmount, "SELL", callback).catch(errorHandler);
    } else if (!isOrderNotChosen) {
      contract.takeOrder(order.counter, callback).catch(errorHandler);
    }
  }

  const onOrderChange = (order: Order) => {
    setOrder(order);
  };

  const onSellChange = (token: TokenWithPrice, amount: Amount) => {
    if (token.id != sell?.id) {
      setOrder(undefined);
    }
    setSell({ ...token, amount });
  }

  const onBuyChange = (token: TokenWithPrice, amount: Amount) => {
    if (token.id != buy?.id) {
      setOrder(undefined);
    }
    setBuy({ ...token, amount });
  }

  const buyPriceRateWithPrecision = rateWithPrecion.muln(buy?.price ?? 0);

  // 1/rate
  // Twice precision because rate is multiplied by precision.
  const reverseRateWithPrecision = rateWithPrecion.gtn(0) ? BN_ONE.muln(precision).muln(precision).div(rateWithPrecion) : BN_ZERO;
  const sellPriceRateWithPrecision = reverseRateWithPrecision.muln(sell?.price ?? 0);

  const buyPriceWithPrecision = buyAmount.mul(sellPriceRateWithPrecision);
  const sellPriceWithPrecision = sellAmount.mul(buyPriceRateWithPrecision);

  const diff = sellPriceWithPrecision.toTwos(256).sub(buyPriceWithPrecision);
  // Should be save to convert to number because rates won't be able to cross SAFE_INTEGER
  const comparedToMarket = !isTokenNotSelected && !isAmountZero && buyPriceRateWithPrecision.gtn(0)
    ? diff.muln(10_000).div(buyPriceWithPrecision).toNumber() / 100
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
                <p className="font-normal mx-5">{availableBalance.toString()}</p>
              </div>
            </div>
            <TokenSelector token={sell} tokens={tokens} lockedAmount={isTaker} amount={sellAmount} onChange={onSellChange} />
            <div className="flex flex-col text-xs text-orange-300">
              {
                isUserBalanceNotEnough && !isTokenNotSelected &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p className="w-4/5">The balance is not enough to make this swap</p>
                  {
                    isMaker && // Taker can't regulate the amount of the order.
                    <button className="ml-2 p-1 rounded-2xl border grow-on-hover" onClick={() => setSell({ ...sell, amount: availableBalance })}>Set max</button>
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
            <TokenSelector token={buy} tokens={tokens} lockedAmount={isTaker} amount={buyAmount} onChange={onBuyChange} />

            <Ruler />

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Rate:</p>
                {rateWithPrecion !== BN_ZERO && !isTokenNotSelected && !isTokenSame
                  ? <div className="flex flex-col">
                    <p className="font-semibold">
                      1 {sell.name} = {displayAmount(rateWithPrecion)} {buy.name} ≈ ${displayAmount(buyPriceRateWithPrecision)}
                    </p>
                    <p className="text-xs text-right opacity-75">
                      1 {buy.name} = {displayAmount(reverseRateWithPrecision)} {sell.name} ≈ ${displayAmount(sellPriceRateWithPrecision)}
                    </p>
                  </div>
                  : <p>0.00</p>
                }
              </div>

              <div className="flex justify-between ">
                <p className="font-semibold">Compared to CEx:</p>
                <p className={`${comparedToMarket < 0 ? "text-red-500" : comparedToMarket > 0 ? "text-green-500" : ""}`}>{Math.abs(comparedToMarket)}%</p>
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

function OrderBook({ buyToken, sellToken, selectedOrder, onChange }: Readonly<OrderBookProps>) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const contract = new Contract();
    const tokenPair = [sellToken.id, buyToken.id] as Pair;
    contract.allOrders(tokenPair).then((orders) => {
      const wallet = new GGXWallet();
      // Don't show him his own orders.
      const filteredOrders = orders.filter((order: Order) => order.pubkey !== wallet.pubkey()?.address)
      setOrders(filteredOrders);
      if (orders.length > 0 && !selectedOrder) {
        const orders = filteredOrders.filter((order: Order) => order.orderType === "BUY").sort((a, b) => (b.amoutRequested.muln(precision).div(b.amountOffered)).sub((a.amoutRequested.muln(precision).div(a.amountOffered))).toNumber());
        onChange(orders[0]);
      }
    }).catch(errorHandler);
  }, [buyToken, sellToken, onChange, selectedOrder]);

  const buyOrders = orders.filter((order: Order) => order.orderType === "BUY").sort((a, b) => (a.amoutRequested.muln(precision).div(a.amountOffered)).sub((b.amoutRequested.muln(precision).div(b.amountOffered))).toNumber());
  const sellOrders = orders.filter((order: Order) => order.orderType !== "BUY").sort((a, b) => (b.amoutRequested.muln(precision).div(b.amountOffered)).sub((a.amoutRequested.muln(precision).div(a.amountOffered))).toNumber());

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
                const orderPrice = order.amoutRequested.muln(precision).div(order.amountOffered);
                const percent = order.amountOffered.muln(100).div(sellTotalVolume).toNumber();
                return (
                  <tr key={order.counter} className="relative w-full text-red-600">
                    <td className="p-1 pl-4 text-left font-bold">{displayNumberWithPrecision(orderPrice, presionNumber, 9)}</td>
                    <td className="p-1 text-right text-white font-bold">
                      {order.amountOffered.toString()}
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
                const orderPrice = order.amountOffered.muln(precision).div(order.amoutRequested);
                return (
                  <tr key={order.counter} className={`relative w-full cursor-pointer glow-on-hover rounded-l-md text-green-500 ${selected} `} onClick={() => onChange(order)}>
                    <td className="p-1 relative text-left font-bold">
                      {selected && <p className="absolute h-full left-0">↠</p>}
                      <p className="pl-3">
                        {displayNumberWithPrecision(orderPrice, presionNumber, 9)}
                      </p>
                    </td>
                    <td className="p-1 text-right text-white font-bold">
                      {order.amoutRequested.toString()}
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
              const ownedToken = PairUtils.ownedToken(order.pair, order.orderType) == order.pair[0] ? order.token1 : order.token2;
              const desiredToken = PairUtils.desiredToken(order.pair, order.orderType) == order.pair[0] ? order.token1 : order.token2;
              console.log(order);
              const price = order.amoutRequested.muln(precision).div(order.amountOffered);
              const priceString = displayNumberWithPrecision(price, presionNumber, 9);
              return (
                <tr key={order.counter} className="h-full w-full even:bg-bg-gr-2/80 odd:bg-bg-gr-2/20">

                  {/*Buy*/}
                  <td className="p-1 text-center rounded-l-xl">
                    {order.amoutRequested.toString()} {desiredToken.name}
                  </td>
                  {/*Price*/}
                  <td className="p-1 text-center">{priceString} {desiredToken.name}</td>

                  <td className="p-1 text-center text-white">
                    {order.amountOffered.toString()} {ownedToken.name}
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

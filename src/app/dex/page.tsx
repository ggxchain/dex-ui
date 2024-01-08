
"use client"

import { useEffect, useState } from "react";
import Contract from "@/services/contract";
import GGXWallet from "@/services/ggx";
import Ruler from "@/components/ruler";
import TokenSelector from "@/components/tokenSelector";
import { Order, Token } from "@/types";
import Pair from "@/pair";
import { useRouter } from "next/navigation";

type TokenData = {
  token: Token;
  amount: number;
}

export default function Dex() {
  const [isMaker, setIsMaker] = useState<boolean>(false);
  const [sell, setSell] = useState<TokenData>();
  const [buy, setBuy] = useState<TokenData>();
  const [availableBalance, setAvailableBalance] = useState<number>(0);
  const [order, setOrder] = useState<Order>();
  const router = useRouter();

  useEffect(() => {
    if (sell !== undefined) {
      const contract = new Contract();
      contract.balanceOf(sell.token.id).then((balance) => {
        setAvailableBalance(balance);
      });
    }
  }, [sell]);

  const wallet = new GGXWallet();

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
  const isTokenSame = sell?.token.symbol === buy?.token.symbol;
  const isWalletNotConnected = wallet.pubkey() === undefined;
  const isUserBalanceNotEnough = !isWalletNotConnected && availableBalance < (sell?.amount ?? 0);
  const isOrderNotChosen = order === undefined;
  const isOrderExhausted = !isOrderNotChosen && (sell?.amount ?? 0) > order?.amountDesired;
  const isSellAmountZero = sell?.amount === 0;

  const rate = isMaker && !isSellAmountZero && !isTokenNotSelected
    ? buy.amount / sell.amount
    : order
      ? order.amountOffered / order.amountDesired
      : 0;

  const buyAmount = isMaker && !isTokenNotSelected
    ? buy.amount
    : order && !isTokenNotSelected
      ? sell.amount * rate
      : 0;

  const isAmountZero = isSellAmountZero || buyAmount === 0;

  const isFormHasErrors = isTokenNotSelected || isTokenSame || isAmountZero || isWalletNotConnected || isUserBalanceNotEnough || (isTaker && isOrderExhausted);

  const onSwap = () => {
    if (isFormHasErrors) {
      return;
    }
    const pair = new Pair(sell.token.id, buy.token.id);
    const contract = new Contract();
    contract.makeOrder(pair, sell.amount, buyAmount);
    onClear();
  }

  const onOrderChange = (order: Order) => {
    setOrder(order);
  };

  const onSellChange = (token: Token, amount: number) => {
    if (token.id != sell?.token.id) {
      setOrder(undefined);
    }
    setSell({ token, amount });
  }

  const onBuyChange = (token: Token, amount: number) => {
    if (token.id != buy?.token.id) {
      setOrder(undefined);
    }
    setBuy({ token, amount });
  }

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
                <p className="font-normal mx-5">{availableBalance}</p>
              </div>
            </div>
            <TokenSelector token={sell?.token} amount={sell?.amount ?? 0} onChange={onSellChange} />
            <div className="flex flex-col text-xs text-orange-300">
              {
                isUserBalanceNotEnough && !isTokenNotSelected &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p className="w-4/5">The balance is not enough to make this swap</p>
                  <button className="ml-2 p-1 rounded-2xl border grow-on-hover" onClick={() => setSell({ ...sell, amount: availableBalance })}>Set max</button>
                </div>
              }
              {isTaker && isOrderExhausted && !isTokenNotSelected &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p className="w-4/5">Max available value for this order is: {order.amountDesired.toFixed(9)} {sell.token.name}</p>
                  <button className="ml-2 p-1 rounded-2xl border grow-on-hover" onClick={() => setSell({ ...sell, amount: order.amountDesired })}>Set max</button>
                </div>
              }
              {isTokenSame && !isAmountZero &&
                < div className="flex text-xs items-center mt-1 justify-between">
                  <p>Token for buy/sell should not be the same</p>
                </div>
              }
            </div>

            <p className="text-sm mt-2">Buy</p>
            <TokenSelector token={buy?.token} lockedAmount={isTaker} amount={buyAmount} onChange={onBuyChange} />

            <Ruler />

            <div className="font-semibold mt-4">
              <div className="flex justify-between">
                <p>Rate:</p>
                {rate !== 0 && !isTokenNotSelected && !isTokenSame
                  ? <p>1 {sell.token.name} = {rate.toFixed(9)} {buy.token.name}</p>
                  : <p>0.00</p>
                }
              </div>

              <div className="flex justify-between">
                <p>Total fee:</p>
                <p>0.00</p>
              </div>

              <div className="flex justify-around mt-5">
                <button className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover glow-on-hover" onClick={onClear}>Clear</button>
                {
                  isWalletNotConnected
                    ? <button className="basis-3/4 rounded-2xl border p-2 m-2 grow-on-hover" onClick={onLogin}>Connect wallet</button>
                    : <button className="basis-3/4 rounded-2xl border p-2 m-2 enabled:grow-on-hover enabled:glow-on-hover disabled:opacity-50" disabled={isFormHasErrors} onClick={onSwap}>Preview the transaction</button>
                }
              </div>
            </div>
          </div>
        </div>
        {
          isTaker && !isTokenNotSelected && !isTokenSame &&
          <div className="md:has-[table]:py-14 py-5 px-5 md:has-[table]:w-[30%] has-[table]:w-full">
            <OrderBook buyToken={buy?.token} sellToken={sell?.token} onChange={onOrderChange} selectedOrder={order} />
          </div>
        }
      </div>
    </div >
  )
}

interface OrderBookProps {
  buyToken: Token;
  sellToken: Token;
  selectedOrder?: Order;
  onChange: (order: Order) => void;
}

function OrderBook({ buyToken, sellToken, selectedOrder, onChange }: OrderBookProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  const tokenPair = new Pair(sellToken.id, buyToken.id);

  useEffect(() => {
    const contract = new Contract();
    contract.allOrders(tokenPair).then((orders) => {
      const wallet = new GGXWallet();
      // Don't show him his own orders.
      const filteredOrders = orders.filter((order: Order) => order.pubkey !== wallet.pubkey()?.address)
      setOrders(filteredOrders);
      if (orders.length > 0 && !selectedOrder) {
        const sellOrders = filteredOrders.filter((order: Order) => order.orderType !== tokenPair.orderType).sort((a, b) => b.amountDesired / b.amountOffered - a.amountDesired / a.amountOffered);
        onChange(sellOrders[0]);
      }
    });
  }, [buyToken, sellToken]);

  const buyOrders = orders.filter((order: Order) => order.orderType === tokenPair.orderType).sort((a, b) => a.amountDesired / a.amountOffered - b.amountDesired / b.amountOffered);
  const sellOrders = orders.filter((order: Order) => order.orderType !== tokenPair.orderType).sort((a, b) => b.amountDesired / b.amountOffered - a.amountDesired / a.amountOffered);

  const buyTotalVolume = buyOrders.reduce((acc, order) => acc + order.amountOffered, 0);
  const sellTotalVolume = sellOrders.reduce((acc, order) => acc + order.amountOffered, 0);

  return (
    <div className="flex flex-col text-xs">
      <p>Order book</p>
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
            buyOrders.length === 0
              ? <tr><td className="text-red-600">No asks found</td></tr>
              : buyOrders.map((order) => {
                return (
                  <tr key={order.counterId} className="relative w-full text-red-600">
                    <td className="p-1 pl-4 text-left font-bold">{(order.amountOffered / order.amountDesired).toFixed(9)}</td>
                    <td className="p-1 text-right text-white font-bold">
                      {order.amountOffered}
                      <div style={{ width: `${Math.round(order.amountOffered * 100 / buyTotalVolume)}%` }} className="absolute bg-red-500/45 rounded-l-md h-full right-0 top-0 bottom-0"></div>
                    </td>
                  </tr>
                )
              })
          }
          <tr>
            <td className="font-bold mt-5">Bids</td>
          </tr>
          {
            sellOrders.length === 0
              ? <tr><td className="text-green-500">No bids found</td></tr>
              : sellOrders.map((order) => {
                const selected = order.counterId == selectedOrder?.counterId;
                return (
                  <tr key={order.counterId} className={`relative w-full cursor-pointer glow-on-hover rounded-l-md text-green-500 ${selected} `} onClick={() => onChange(order)}>
                    <td className="p-1 relative text-left font-bold">
                      {selected && <p className="absolute h-full left-0">↠</p>}
                      <p className="pl-3">
                        {(order.amountOffered / order.amountDesired).toFixed(9)}
                      </p>
                    </td>
                    <td className="p-1 text-right text-white font-bold">
                      {order.amountDesired}
                      <div style={{ width: `${Math.round(order.amountOffered * 100 / sellTotalVolume)}%` }} className="absolute bg-green-500/45 rounded-l-md h-full right-0 top-0 bottom-0"></div>
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

function UserOrdersList() {


  return <div>

  </div>
}

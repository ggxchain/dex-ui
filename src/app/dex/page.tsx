
"use client"

import { useEffect, useState } from "react";
import Contract from "@/services/contract";
import GGXWallet from "@/services/ggx";
import Ruler from "@/components/ruler";
import TokenSelector from "@/components/tokenSelector";
import { Order, Pair, Token } from "@/types";

type TokenData = {
  token: Token;
  amount: number;
}

export default function Dex() {
  const [isMaker, setIsMaker] = useState<boolean>(false);
  const [sell, setSell] = useState<TokenData>({} as TokenData);
  const [buy, setBuy] = useState<TokenData>({} as TokenData);
  const [availableBalance, setAvailableBalance] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    if (sell.token !== undefined) {
      const contract = new Contract();
      contract.balanceOf(sell.token.id).then((balance) => {
        setAvailableBalance(balance);
      });
    }
  }, [sell]);

  const wallet = new GGXWallet();

  const onClear = () => {
    setSell({} as TokenData);
    setBuy({} as TokenData);
    setRate(0);
    setOrder(undefined);
  }

  const onLogin = () => {
    // Here we should connect wallet or use some api but for now we just set some data
  }
  const isOk = sell.token && buy.token && sell.amount && buy.amount && wallet && sell.token.symbol !== buy.token.symbol && sell.amount > 0 && buy.amount > 0 && availableBalance >= sell.amount;


  const onSwap = () => {
    const pair = new Pair(sell.token.id, buy.token.id);
    if (!isOk) {
      return;
    }

    const contract = new Contract();
    contract.makeOrder(pair, sell.amount, buy.amount);
    onClear();
  }

  const onOrderChange = (order: Order) => {
    setRate(order.amountDesired / order.amountOffered);
    setBuy({ ...buy, amount: sell.amount * rate });

    setOrder(order);
  };

  const onSellChange = (token: Token, amount: number) => {
    setSell({ token, amount });

    if (isMaker && sell.amount > 0) {
      // We need to recalculate rate here
      setRate(buy.amount / sell.amount);
    } else {
      // We need to recalculate buy amount here
      setBuy({ ...buy, amount: amount * rate });
    }
  }

  const onBuyChange = (token: Token, amount: number) => {
    setBuy({ token, amount });

    if (isMaker && sell.amount > 0) {
      // We need to recalculate rate here
      setRate(buy.amount / sell.amount);
    }
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
            <TokenSelector token={sell.token} amount={sell.amount} onChange={onSellChange} />
            {!isMaker && order && sell.amount > order.amountOffered &&
              <p className="text-xs text-orange-300">The chosen order is exhausted. Max available value for this order is: {order.amountOffered.toFixed(9)} {sell.token.name}</p>
            }

            <p className="text-sm mt-2">Buy</p>
            <TokenSelector token={buy.token} lockedAmount={!isMaker} amount={buy.amount} onChange={onBuyChange} />

            <Ruler />

            <div className="font-semibold mt-4">
              <div className="flex justify-between">
                <p>Rate:</p>
                {rate !== 0
                  ? <p>1 {sell.token.name} = {rate.toFixed(9)} {buy.token.name}</p>
                  : <p>0.00</p>
                }
              </div>

              <div className="flex justify-between">
                <p>Total fee:</p>
                <p>0.00</p>
              </div>

              <div className="flex justify-around mt-5">
                <button className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover" onClick={onClear}>Clear</button>
                {
                  wallet ?
                    <button className="basis-3/4 rounded-2xl border p-2 m-2 enabled:grow-on-hover disabled:opacity-50" disabled={!isOk} onClick={onSwap}>Preview the transaction</button>
                    : <button className="basis-3/4 rounded-2xl border p-2 m-2 grow-on-hover" onClick={onLogin}>Connect wallet</button>
                }
              </div>
            </div>
          </div>
        </div>
        {
          buy.token && sell.token && buy.token.symbol !== sell.token.symbol && !isMaker &&
          <div className="md:has-[table]:py-14 py-5 px-5 md:has-[table]:w-[30%] has-[table]:w-full">
            <OrderBook buyToken={buy?.token} sellToken={sell?.token} onChange={onOrderChange} />
          </div>
        }
      </div>
    </div >
  )
}

interface OrderBookProps {
  buyToken: Token;
  sellToken: Token;
  onChange: (order: Order) => void;
}


function OrderBook({ buyToken, sellToken, onChange }: OrderBookProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  const tokenPair = new Pair(buyToken.id, sellToken.id);

  useEffect(() => {
    const contract = new Contract();
    contract.allOrders(tokenPair).then((orders) => {
      setOrders(orders);
    });
  }, [buyToken, sellToken]);


  const buyOrders = orders.filter((order: Order) => order.orderType !== tokenPair.orderType).sort((a, b) => a.amountDesired / a.amountOffered - b.amountDesired / b.amountOffered);
  const sellOrders = orders.filter((order: Order) => order.orderType === tokenPair.orderType).sort((a, b) => b.amountDesired / b.amountOffered - a.amountDesired / a.amountOffered);
  if (buyOrders.length === 0 && sellOrders.length === 0) {
    return (<div></div>);
  }

  const buyTotalVolume = buyOrders.reduce((acc, order) => acc + order.amountOffered, 0);
  const sellTotalVolume = sellOrders.reduce((acc, order) => acc + order.amountOffered, 0);

  return (
    <div className="flex flex-col text-xs overflow-auto">
      <p>Order book</p>
      <table className="table-auto mt-2 md:mt-5">
        <thead>
          <tr>
            <th className="text-left">Price <span className="italic font-semibold uppercase">{buyToken.symbol}</span></th>
            <th className="text-right">Volume <span className="italic font-semibold uppercase">{sellToken.symbol}</span></th>
          </tr>
        </thead>

        <tbody>
          {
            buyOrders.map((order) => {
              return (
                <tr key={order.counterId} className="text-red-600 relative w-full">
                  <td className="p-1 text-left font-bold">{(order.amountDesired / order.amountOffered).toFixed(9)}</td>
                  <td className="p-1 text-right text-white font-bold">{order.amountOffered}</td>
                  <div style={{ width: `${Math.round(order.amountOffered * 100 / buyTotalVolume)}%` }} className="absolute bg-red-500/45 h-full right-0 top-0 bottom-0"></div>
                </tr>

              )
            })
          }
          {
            sellOrders.map((order) => {
              return (
                <tr key={order.counterId} className="text-green-500 relative w-full cursor-pointer" onClick={() => onChange(order)}>
                  <td className="p-1 text-left font-bold">{(order.amountDesired / order.amountOffered).toFixed(9)}</td>
                  <td className="p-1 text-right text-white font-bold">{order.amountOffered}</td>
                  <div style={{ width: `${Math.round(order.amountOffered * 100 / sellTotalVolume)}%` }} className="absolute bg-green-500/45 h-full right-0 top-0 bottom-0"></div>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
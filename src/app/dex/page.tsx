
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
            <TokenSelector token={sell.token} amount={sell.amount} onChange={(token: Token, amount: number) => { setSell({ token, amount }) }} />

            <p className="text-sm mt-2">Buy</p>
            <TokenSelector token={buy.token} amount={buy.amount} onChange={(token: Token, amount: number) => { setBuy({ token, amount }) }} />

            <Ruler />

            <div className="font-semibold mt-4">
              <div className="flex justify-between">
                <p>Rate:</p>
                <p>0.00</p>
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
        <div className="md:has-[table]:py-14 px-5 md:has-[table]:w-[30%] has-[table]:w-full">
          {
            buy.token && sell.token && buy.token.symbol !== sell.token.symbol && <OrderBook buyToken={buy?.token} sellToken={sell?.token} />
          }
        </div>
      </div>
    </div>
  )
}

interface OrderBookProps {
  buyToken: Token;
  sellToken: Token;
}


function OrderBook({ buyToken, sellToken }: OrderBookProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  const tokenPair = new Pair(buyToken.id, sellToken.id);

  useEffect(() => {
    const contract = new Contract();
    contract.allOrders(tokenPair).then((orders) => {
      console.log(orders);
      setOrders(orders);
    });
  }, [buyToken, sellToken]);


  const buyOrders = orders.filter((order: Order) => order.orderType !== tokenPair.orderType).sort((a, b) => a.amountDesired / a.amountOffered - b.amountDesired / b.amountOffered);
  const sellOrders = orders.filter((order: Order) => order.orderType === tokenPair.orderType).sort((a, b) => a.amountDesired / a.amountOffered - b.amountDesired / b.amountOffered);
  if (buyOrders.length === 0 && sellOrders.length === 0) {
    return (<div></div>);
  }

  const buyTotalVolume = buyOrders.reduce((acc, order) => acc + order.amountOffered, 0);
  const sellTotalVolume = sellOrders.reduce((acc, order) => acc + order.amountOffered, 0);

  return (
    <div className="flex flex-col text-xs overflow-auto">
      <p>Order book</p>
      <table className="table-auto mt-5">
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
                <tr key={order.counterId} className={`text-red-600 to-red-600/60 relative rounded-xl w-full after:content-[ ] after:absolute after:bg-red-600/60 after:right-0 after:top-0 after:bottom-0 after:w-[${Math.round(order.amountOffered * 100 / buyTotalVolume)}%]`}>
                  <td className="p-1 text-left">{order.amountDesired / order.amountOffered}</td>
                  <td className="p-1 text-right">{order.amountOffered}</td>
                </tr>
              )
            })
          }
          <tr></tr>
          {
            sellOrders.map((order) => {
              return (
                <tr key={order.counterId} className="text-green-500">
                  <td className="text-left">{order.amountDesired / order.amountOffered}</td>
                  <td className="text-right">{order.amountOffered}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
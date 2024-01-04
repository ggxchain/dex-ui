
"use client"

import { useEffect, useState } from "react";
import Contract from "@/services/contract";
import GGXWallet from "@/services/ggx";
import Ruler from "@/components/ruler";
import TokenSelector from "@/components/tokenSelector";
import { Pair, Token } from "@/types";

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
  }


  return (
    <div className="text-slate-100 flex flex-col w-full items-center">
      <div className="flex flex-col w-full max-w-[700px]">
        <div className="flex text-md justify-between">
          <button onClick={() => setIsMaker(false)}>
            <p className={isMaker ? "text-slate-500" : ""}>Taker order</p>
          </button>
          <button onClick={() => setIsMaker(true)}>
            <p className={isMaker ? "" : "text-slate-500"}>Maker order</p>
          </button>
        </div>

        <Ruler />

        <div className="flex flex-col rounded-3xl secondary-gradient p-5 md:mx-[25px] mt-5">
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
    </div>
  )
}

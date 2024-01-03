"use client"

import { useState } from "react";
import TokenSelector from "./tokenSelector";
import Ruler from "./ruler";

type TokenData = {
    token: Token;
    amount: number;
}

export default function Dex() {
    const [isMaker, setIsMaker] = useState<boolean>(false);
    const [sell, setSell] = useState<TokenData>({} as TokenData);
    const [buy, setBuy] = useState<TokenData>({} as TokenData);

    const [wallet, setWallet] = useState<boolean>(false);

    const onClear = () => {
        setSell({} as TokenData);
        setBuy({} as TokenData);
    }

    const onLogin = () => {
        // Here we should connect wallet or use some api but for now we just set some data
        setWallet(true);
    }

    const onSwap = () => {
        console.log(sell, buy);
    }

    const isOk = sell.token && buy.token && sell.amount && buy.amount && wallet && sell.token.symbol !== buy.token.symbol && sell.amount > 0 && buy.amount > 0;

    return (
        <div className="text-slate-100 flex flex-col md:min-w-[50%] min-w-full p-10">
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
                <p className="text-sm">Sell</p>
                <TokenSelector token={sell.token} amount={sell.amount} onChange={(token: Token, amount: number) => { setSell({ token, amount }) }} />

                <p className="text-sm mt-2">Buy</p>
                <TokenSelector token={buy.token} amount={buy.amount} onChange={(token: Token, amount: number) => { setBuy({ token, amount }) }} />

                <Ruler />

                <div className="font-semibold mt-4">
                    <div className="flex justify-between">
                        <p>Balance:</p>
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
    )
}

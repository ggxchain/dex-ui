"use client";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { type ChangeEvent, useEffect, useState } from "react";
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BN } from "@polkadot/util/bn";
const wsProviderURL = "ws://127.0.0.1:9944";
//https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/chainstate

const lg = console.log;
const NAME = 'GGX'
const BridgeBtc = () => {
  const [api, setApi] = useState<ApiPromise>();
  const [balance, setBalance] = useState<BN>(new BN(0));

  const amount = new BN(10).mul(new BN(10).pow(new BN(12)))

  const setup = async () => {
    lg("setup()")
    const wsProvider = new WsProvider(wsProviderURL);
    const api = await ApiPromise.create({ provider: wsProvider });
    setApi(api);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setup();
  }, []);


  const clickOne = async () => {
    lg("clickOne()")
    if (!api) throw Error("No_API_found");
    const time = await api.query.timestamp.now();
    lg("timestamp:", time.toPrimitive());
    lg("amount:", amount.toString());

  }

  return (<div>Dapp
    <span>.</span>
    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
    <button onClick={clickOne}>ClickOne</button>

  </div>)
}
export default BridgeBtc;
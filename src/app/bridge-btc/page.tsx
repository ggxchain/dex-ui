"use client";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { type ChangeEvent, useEffect, useState } from "react";
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BN } from "@polkadot/util/bn";
import dynamic from 'next/dynamic';
import { GGX_WSS_URL } from "@/consts";
//const wsProviderURL = "ws://127.0.0.1:9944";
//https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/chainstate

const lg = console.log;
const DAPP_NAME = 'GGX'
// const MyClientComponent = dynamic(
//   () => import('@/components/my-client-component/MyClientComponent').then(module => module.MyClientComponent) as any,
//   { ssr: false },
// ) as any;
const BridgeBtc = () => {
  const [api, setApi] = useState<ApiPromise>();
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();

  const [balance, setBalance] = useState<BN>(new BN(0));

  const amount = new BN(10).mul(new BN(10).pow(new BN(12)))

  const setup = async () => {
    lg("setup()")
    const wsProvider = new WsProvider(GGX_WSS_URL);
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
  const handleConnection = async () => {
    lg("handleConnection()")
    if (typeof window !== "undefined") {
      const extensions = await web3Enable(DAPP_NAME);//show how many extions you have installed
      if (!extensions) { throw Error("No_extension _found") }
      const allAccounts = await web3Accounts();
      lg('allAccounts:', allAccounts);

      setAccounts(allAccounts);
      if (allAccounts.length === 1) {
        setSelectedAccount(allAccounts[0]);
      }
    }
  }
  const handleAccountSelection = async (e: ChangeEvent<HTMLSelectElement>) => {
    lg("handleAccountSelection")
    //HTMLSelectElement is copied from onChange hint
    if (typeof window !== "undefined") {
      const selectedAddress = e.target.value;
      //if(!address) { throw Error() }
      const account = accounts.find(account => account.address === selectedAddress)
      if (!account) { throw Error("No_account_found") }
      lg('selectedAccount=', account)
      setSelectedAccount(account)
    }
  }

  return (<div>
    <span>BTC to KBTC Bridge</span>
    <br />
    {accounts.length === 0 ? (
      <button type="button" onClick={handleConnection}>Connect</button>) : null}

    {accounts.length > 0 && !selectedAccount ? (<>
      <select onChange={handleAccountSelection}>
        <option value="Choose your account" disabled hidden>Choose your account</option>

        {accounts.map((account) => (
          <option key={account.address} value={account.address}>
            {account.meta.name || account.address}
          </option>
        ))}
      </select>
    </>
    ) : null}

    {selectedAccount ? selectedAccount.address : null
    }
    <br />
    <button type="button" onClick={clickOne}>ClickOne</button>

  </div>)
}
export default BridgeBtc;
"use client";

import type { AccountData, ChainInfo } from "@keplr-wallet/types";
import React, { useEffect, useState } from "react";
import axelar from "../../../config/axelar";
import {
  assertIsDeliverTxSuccess,
  Coin,
  IndexedTx,
  SigningStargateClient,
} from "@cosmjs/stargate";
import Select from "@/components/select";
import TokenList, { ListElement } from "@/components/tokenList";
import GGXWallet, { Account } from "@/services/ggx";
import cosmos from "../../../config/cosmos";

export default function Transfer() {
  const [chain, setChain] = useState<ChainInfo>(cosmos);
  const [client, setClient] = useState<SigningStargateClient>();
  const [account, setAccount] = useState<AccountData>();
  const [accounts, setAccounts] = useState<readonly AccountData[]>([]);
  const [balances, setBalances] = useState<readonly Coin[]>();
  const [selectedToken, setSelectedToken] = useState<ListElement>();
  const [GGxAccounts, setGGxAccounts] = useState<Account[]>([]);
  const [selectedGGxAccount, setSelectedGGxAccount] = useState<Account>();
  const [sourcePort, setSourcePort] = useState<string>("transfer");
  const [sourceChannel, setSourceChannel] = useState<string>("channel-0");
  const [tx, setTx] = useState<string>();
  const [txRes, setTxRes] = useState<IndexedTx>();

  // init chain
  useEffect(() => {
    connectWallet();
    connectGGxWallet();
  }, [chain]);

  const connectGGxWallet = () => {
    const ggx = new GGXWallet();
    ggx.getAccounts().then((accounts) => {
      setGGxAccounts(accounts);
      const ggx = new GGXWallet();
      setSelectedGGxAccount(ggx.pubkey());
    });
  }

  // get balances
  useEffect(() => {
    if (!account?.address && !client) return;
    getBalances();
  }, [account, client]);

  // connect walllet
  const connectWallet = async () => {
    if (!window.keplr) {
      console.error("please install keplr extension");
    }

    await window.keplr.experimentalSuggestChain(chain);
    await window.keplr.enable(chain.chainId);

    const offlineSigner = window.keplr.getOfflineSigner(chain.chainId);

    // Actually, it returns only one account :C Buy in the future, it will return all accounts.
    const accounts = await offlineSigner.getAccounts();
    const key = await window.keplr.getKey(chain.chainId);
    const client = await SigningStargateClient.connectWithSigner(
      chain.rpc,
      offlineSigner
    );

    setAccounts(accounts);
    setAccount(accounts[0]);
    setClient(client);
  };

  const mapToken = (balance: Coin, index: number) => {
    const token = chain.currencies.find((currency) => currency.coinMinimalDenom === balance.denom);
    const url = token?.coinImageUrl ?? `/svg/${token?.coinDenom}.svg`;
    return {
      name: token?.coinDenom ?? balance.denom,
      balance: Number.parseInt(balance.amount) / (10 ** (token?.coinDecimals ?? 6)),
      symbol: token?.coinDenom ?? balance.denom,
      estimatedPrice: 1,
      id: index,
      url,
      network: "",
    };
  }

  const getBalances = async () => {
    if (client && account?.address) {
      const balances = await client.getAllBalances(account.address);

      setBalances(balances);
      if (balances.length > 0) {
        setSelectedToken(mapToken(balances[0], 0));
      }
    }
  };

  // get tx by hash
  const getTx = async () => {
    if (!tx || !client) return;
    const result = await client.getTx(tx);

    setTxRes(result ?? undefined);
  };

  const sendIbcToken = async () => {
    if (!client || !selectedGGxAccount || !account?.address) {
      console.error(
        "some input is undefine client, ibcRecipent, address",
        client,
        selectedGGxAccount?.address,
        account?.address
      );
      return;
    }

    const converAmount = 10;
    const amount = {
      denom: selectedToken?.symbol ?? "ert",
      amount: converAmount.toString(),
    };

    const fee = {
      amount: [
        {
          denom: chain.stakeCurrency?.coinMinimalDenom ?? "ert",
          amount: "0.025",
        },
      ],
      gas: "2000000",
    };

    try {
      const result = await client.sendIbcTokens(
        account.address,
        selectedGGxAccount.address,
        amount,
        sourcePort,
        sourceChannel,
        undefined,
        Math.floor(Date.now() / 1000) + 300,
        fee,
        ""
      );
      assertIsDeliverTxSuccess(result);

      if (result.code == 0) {
        console.log(
          "transfer success, height:" +
          result.height +
          "hash: " +
          result.transactionHash
        );

        setTx(result.transactionHash);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const ggxOnSelect = (account: Account) => {
    setSelectedGGxAccount(account);
    const ggx = new GGXWallet();
    ggx.selectAccount(account);
  }

  const tokens = balances?.map((balance, index) => mapToken(balance, index)) ?? [];

  const walletIsNotInitialized = !account?.address || !client;
  const isGGxWalletNotConnected = selectedGGxAccount === undefined;
  const total = 0;

  return (
    <div className="text-slate-100 flex flex-col w-full items-center h-full">
      <div className="flex mt-1 justify-between w-full">
        <h1 className="text-3xl">${total}</h1>
        <div className="flex flex-col">
          <p>Ibc address</p>
          {
            walletIsNotInitialized
              ? <button onClick={connectWallet} className="text-center text-slate-100 secondary-gradient rounded-2xl text-wrap md:max-w-64 max-w-48 w-full h-full md:text-base text-sm p-2 md:p-4 m-1 grow-on-hover glow-on-hover">Connect the wallet</button>
              : <Select<AccountData> onChange={(account) => (setAccount(account))} options={accounts} value={account} className="m-1 w-full h-full md:max-w-128 max-w-64"
                childFormatter={(account) => {
                  return (<div className="w-full md:p-2 p-1 m-0 h-full overflow-hidden text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                    <span className="text-base truncate">{account.address}</span>
                  </div>)
                }}
              />
          }
          <p className="mt-2">GGx chain address</p>
          {isGGxWalletNotConnected
            ? <button onClick={connectGGxWallet} className="text-center text-slate-100 secondary-gradient rounded-2xl text-wrap md:max-w-64 max-w-48 w-full h-full md:text-base text-sm p-2 md:p-4 m-1 grow-on-hover glow-on-hover">Connect GGx wallet</button>
            : <Select<Account> onChange={ggxOnSelect} options={GGxAccounts} value={selectedGGxAccount} className="m-1 w-full h-full md:max-w-128 max-w-64"
              childFormatter={(account) => {
                return (<div className="w-full md:p-2 p-1 m-0 h-full text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                  <span className="text-base">{account.name ? account.name : `Account ${GGxAccounts.findIndex((acc) => acc.address == account.address)}`}</span>
                </div>)
              }}
            />
          }
        </div>
      </div>

      <TokenList selected={selectedToken} onClick={setSelectedToken} className={`w-full mt-10 ${walletIsNotInitialized ? "opacity-50" : "opacity-100"}`} tokens={tokens} />
      <br />
      <div>
        <label>Tranfer ICS-20 Token to GGX Chain</label>

        <div className="text-black">
          <div>
            <input
              type="text"
              value={sourcePort}
              placeholder="sourcePort"
              style={{ width: "350px" }}
              onChange={(e) => setSourcePort(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              value={sourceChannel}
              placeholder="sourceChannel"
              style={{ width: "350px" }}
              onChange={(e) => setSourceChannel(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button
              className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover"
              onClick={sendIbcToken}
            >
              <p>IBC Transfer</p>
            </button>
          </div>

          <hr />
        </div>
      </div>
    </div >
  );
}

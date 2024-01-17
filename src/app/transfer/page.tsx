"use client";

import type { AccountData, ChainInfo } from "@keplr-wallet/types";
import React, { useEffect, useState } from "react";
import {
  assertIsDeliverTxSuccess,
  Coin,
  IndexedTx,
  SigningStargateClient,
} from "@cosmjs/stargate";
import Select from "@/components/select";
import TokenList, { ListElement } from "@/components/tokenList";
import GGXWallet, { Account } from "@/services/ggx";
import ibcChains from "@/config/chains";
import CexService from "@/services/cex";
import { ibcHashToDenom } from "@/services/keplr";

export default function Transfer() {
  const chains = ibcChains;
  const [chain, setChain] = useState<ChainInfo>(ibcChains[0]);
  const [client, setClient] = useState<SigningStargateClient>();
  const [account, setAccount] = useState<AccountData>();
  const [amount, setAmount] = useState<number>(0);
  const [accounts, setAccounts] = useState<readonly AccountData[]>([]);
  const [balances, setBalances] = useState<readonly Coin[]>();
  const [prices, setPrices] = useState<Map<string, number>>(new Map());
  const [selectedToken, setSelectedToken] = useState<ListElement>();
  const [GGxAccounts, setGGxAccounts] = useState<Account[]>([]);
  const [selectedGGxAccount, setSelectedGGxAccount] = useState<Account>();
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

  const refreshEstimatePrice = (balances: readonly Coin[]) => {
    const cex = new CexService();
    cex.tokenPrices(balances.map((balance) => mapToken(balance, 0).symbol)).then((prices) => {
      setPrices(prices);
    });
  }

  // get balances
  useEffect(() => {
    if (!account?.address && !client) return;
    getBalances()
  }, [account, client]);

  const reset = () => {
    setAccount(undefined);
    setAccounts([]);
    setBalances([]);
    setClient(undefined);
  }

  // connect walllet
  const connectWallet = async () => {
    reset();
    if (!window.keplr) {
      console.error("please install keplr extension");
      return
    }

    await window.keplr.experimentalSuggestChain(chain);
    await window.keplr.enable(chain.chainId);
    const offlineSigner = window.keplr.getOfflineSigner(chain.chainId);

    // Actually, it returns only one account :C Buy in the future, it will return all accounts.
    const accounts = await offlineSigner.getAccounts();
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
    const symbol = token?.coinDenom ?? balance.denom;
    return {
      name: token?.coinDenom ?? balance.denom,
      balance: Number.parseInt(balance.amount) / (10 ** (token?.coinDecimals ?? 6)),
      symbol,
      estimatedPrice: prices.get(symbol) ?? NaN,
      id: { u64: index },
      url,
      network: "",
    };
  }

  const getBalances = async () => {
    if (client && account?.address) {
      const balances = await client.getAllBalances(account.address);
      const filtered = balances.reduce<Coin[]>((acc, value) => {
        if (value.denom.includes("ibc/")) {
          const info = ibcHashToDenom(chain.chainName, value.denom);
          if (!info) return acc;
          acc.push({
            denom: info.base,
            amount: value.amount,
          });
        } else {
          acc.push(value);
        }
        return acc
      }, []);

      setBalances(filtered);
      if (filtered.length > 0) {
        setSelectedToken(mapToken(filtered[0], 0));
        refreshEstimatePrice(filtered);
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

    const sendAmount = {
      denom: selectedToken?.symbol ?? "ert",
      amount: amount.toString(),
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
        sendAmount,
        "transfer",
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
  const total = tokens.reduce((acc, token) => acc + token.balance * token.estimatedPrice, 0);
  const amountPrice = amount * (selectedToken ? prices.get(selectedToken.symbol) ?? 0 : 0);


  return (
    <div className="text-slate-100 flex flex-col w-full items-center h-full">
      <div className="flex mt-1 justify-between w-full">
        <h1 className="text-3xl">${total.toFixed(2)}</h1>
        <div className="flex flex-col">
          <Select<ChainInfo> onChange={(chain) => setChain(chain)} options={chains} value={chain} className="m-1 w-full h-full md:max-w-128 max-w-64" childFormatter={(chain) => {
            return (<div className="w-full md:p-2 p-1 m-0 h-full overflow-hidden text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
              <span className="text-base truncate">{chain.chainName}</span>
            </div>)
          }}
          />
        </div>
      </div>

      <div className="flex w-full flex-col mt-5 items-center md:max-w-128 max-w-64">
        <p>Transfer from</p>
        {
          walletIsNotInitialized
            ? <button onClick={connectWallet} className="border text-center text-slate-100 rounded-2xl text-wrap w-full h-full md:text-base text-sm p-2 md:p-4 m-1 grow-on-hover glow-on-hover">Connect the wallet</button>
            : <Select<AccountData> onChange={(account) => (setAccount(account))} options={accounts} value={account} className="m-1 w-full h-full"
              childFormatter={(account) => {
                return (<div className="w-full md:p-2 p-1 m-0 h-full overflow-hidden text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                  <span className="text-base truncate">{account.address}</span>
                </div>)
              }}
            />
        }
        <p className="mt-2">Transfet to (GGx)</p>
        {isGGxWalletNotConnected
          ? <button onClick={connectGGxWallet} className="border text-center text-slate-100 rounded-2xl text-wrap w-full h-full md:text-base text-sm p-2 md:p-4 m-1 grow-on-hover glow-on-hover">Connect GGx wallet</button>
          : <Select<Account> onChange={ggxOnSelect} options={GGxAccounts} value={selectedGGxAccount} className="m-1 w-full h-full"
            childFormatter={(account) => {
              return (<div className="w-full md:p-2 p-1 m-0 h-full text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                <span className="text-base">{account.name ? account.name : `Account ${GGxAccounts.findIndex((acc) => acc.address == account.address)}`}</span>
              </div>)
            }}
          />
        }

        <p className="mt-2">Channel</p>
        <input className="mt-1 rounded-2xl border pl-5 md:pl-5 md:p-2 p-1 basis-1/4 bg-transparent w-full"
          type="text"
          value={sourceChannel}
          placeholder="sourceChannel"
          onChange={(e) => setSourceChannel(e.target.value)}
        />

        <p className="mt-2">Amount</p>
        <div className="relative w-full">
          <input className="mt-1 rounded-2xl border pl-5 md:pl-5 md:p-2 p-1 basis-1/4 bg-transparent w-full"
            type="number"
            value={amount}
            placeholder="amount"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <p className="absolute bottom-0 py-auto my-auto opacity-50 right-2 top-1/2 -translate-y-1/2">{selectedToken?.symbol}{amount >= 2 ? "s" : ""} <span className="text-sm">(${amountPrice.toFixed(2)})</span></p>
        </div>

        <button
          className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover"
          onClick={sendIbcToken}
        >
          IBC Transfer
        </button>

      </div>



      <TokenList selected={selectedToken} onClick={setSelectedToken} className={`w-full mt-10 ${walletIsNotInitialized ? "opacity-50" : "opacity-100"}`} tokens={tokens} />

    </div >
  );
}

"use client";

import type { AccountData, ChainInfo } from "@keplr-wallet/types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  assertIsDeliverTxSuccess,
  Coin,
  DeliverTxResponse,
  IndexedTx,
  SigningStargateClient,
} from "@cosmjs/stargate";
import SelectLight, { SelectDark } from "@/components/common/select";
import TokenList, { ListElement } from "@/components/tokenList";
import GGXWallet, { Account } from "@/services/ggx";
import ibcChains from "@/config/chains";
import CexService from "@/services/cex";
import { ibcHashToDenom } from "@/services/keplr";
import Modal from "@/components/common/modal";
import LoadingButton from "@/components/common/loadButton";
import { InputWithPriceInfo, Input } from "@/components/common/input";
import { toast } from "react-toastify";
import { BN, u8aToHex } from "@polkadot/util";
import { Keyring } from '@polkadot/keyring';

import TokenDecimals from "@/tokenDecimalsConverter";
import { Button } from "@/components/common/button";
import Ruler from "@/components/common/ruler";

type ModalTypes = "Deposit" | "Withdraw";

export default function Transfer() {
  const chains = ibcChains;
  const [chain, setChain] = useState<ChainInfo>(ibcChains[0]);
  const [client, setClient] = useState<SigningStargateClient>();
  const [account, setAccount] = useState<AccountData>();
  const [accounts, setAccounts] = useState<readonly AccountData[]>([]);
  const [balances, setBalances] = useState<readonly Coin[]>();
  const [prices, setPrices] = useState<Map<string, number>>(new Map());
  const [selectedToken, setSelectedToken] = useState<ListElement>();
  const [GGxAccounts, setGGxAccounts] = useState<Account[]>([]);
  const [tx, setTx] = useState<string>();
  const [txRes, setTxRes] = useState<IndexedTx>();

  // Modal related states
  const [modal, setModal] = useState<boolean>(false);
  const modalTitle = useRef<ModalTypes>("Deposit");
  const [modalLoading, setModalLoading] = useState<boolean>(false);
  const [modalAmount, setModalAmount] = useState<number>(0);
  const [modalGGxAccount, setModalGGxAccount] = useState<Account>();
  const [modalSourceChannel, setModalSourceChannel] = useState<string>("channel-0");

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
      setModalGGxAccount(ggx.pubkey());
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
      balance: new BN(balance.amount),
      symbol,
      estimatedPrice: prices.get(symbol) ?? 0,
      id: index,
      url,
      network: "",
      decimals: token?.coinDecimals ?? 1,
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
    if (!client || !modalGGxAccount || !account?.address || !selectedToken || !modalSourceChannel) {
      console.error(
        "some input is undefine client, ibcRecipent, address",
        client,
        modalGGxAccount?.address,
        account?.address
      );
      return;
    }

    const amount = new TokenDecimals(selectedToken.decimals).floatToBN(modalAmount);
    const sendAmount = {
      denom: selectedToken.symbol,
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
      const keyring = new Keyring();
      const pair = keyring.addFromAddress(modalGGxAccount.address);
      const recipientAddress = u8aToHex(pair.publicKey);

      const result = await toast.promise(client.sendIbcTokens(
        account.address,
        recipientAddress,
        sendAmount,
        "transfer",
        modalSourceChannel,
        undefined,
        Math.floor(Date.now() / 1000) + 300,
        fee,
        ""
      ), {
        pending: "Sending IBC transaction...",
        success: "Transaction submitted successfully",
        error: {
          render({ data }: { data: DeliverTxResponse }) {
            return `Transaction failed: ${assertIsDeliverTxSuccess(data)}`;
          },
        }
      });


      if (result.code === 0) {
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
    setModalGGxAccount(account);
    const ggx = new GGXWallet();
    ggx.selectAccount(account);
  }

  const onModalOpen = (modalType: ModalTypes) => {
    if (isGGxWalletNotConnected || walletIsNotInitialized || selectedToken === undefined) return;

    modalTitle.current = modalType;
    setModalLoading(false);
    setModalAmount(0);
    setModalSourceChannel("channel-0");
    setModal(true);
  }

  const onModalSubmit = () => {
    if (!modalGGxAccount) return;
    if (modalAmount <= 0) return;
    if (!selectedToken) return;
    if (modalSourceChannel === "") return;

    setModalLoading(true);
    switch (modalTitle.current) {
      case "Deposit":
        sendIbcToken().then(() => {
          setModal(false);
          getBalances()
        })
        break;
      case "Withdraw":
        console.error("not implemented");
        setModal(false);

        break;
    }
  }

  const tokens = useMemo<ListElement[]>(() => balances?.map((balance, index) => mapToken(balance, index)) ?? [], [balances]);

  const walletIsNotInitialized = !account?.address || !client;
  const isGGxWalletNotConnected = modalGGxAccount === undefined;
  const total = tokens.reduce((acc, token) => {
    const balance = new TokenDecimals(token.decimals).BNToFloat(token.balance);
    return acc + balance * (prices.get(token.symbol) ?? 0);
  }, 0);
  const amountPrice = modalAmount * (selectedToken ? prices.get(selectedToken.symbol) ?? 0 : 0);


  return (
    <div className="flex flex-col w-full items-center h-full">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl md:text-3xl break-words w-[40%] text-GGx-yellow font-telegraf">${total.toFixed(2)}</h1>
        <div className="flex md:flex-row flex-col gap-5">
          <Button onClick={() => onModalOpen("Deposit")} disabled={walletIsNotInitialized || selectedToken === undefined} className="w-1/4">
            Deposit {selectedToken?.name ?? ""}
          </Button>
          <Button onClick={() => onModalOpen("Withdraw")} disabled={walletIsNotInitialized || selectedToken === undefined} className="w-1/4">
            Withdraw {selectedToken?.name ?? ""}
          </Button>
        </div>
      </div>
      <div className="w-full mt-5">
        <Ruler />
      </div>


      <div className="mt-10 flex flex-col items-end w-full">
        <div className="w-full h-full md:max-w-96 max-w-48">
          <div className="flex w-full h-full border-GGx-black2 border-2 rounded-[4px]" >
            <p className="h-full p-4 text-[14px] text-GGx-gray">Chain</p>
            <SelectDark<ChainInfo> onChange={(chain) => setChain(chain)} options={chains} value={chain} className="w-full h-full"
              childFormatter={(chain) => {
                return (<div className="w-full p-3 h-full overflow-hidden text-slate-100 rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                  <span className="text-base truncate">{chain.chainName}</span>
                </div>)
              }}
            />
          </div>
        </div>
        <TokenList selected={selectedToken} onClick={setSelectedToken} className={`w-full mt-2 ${walletIsNotInitialized ? "opacity-50" : "opacity-100"}`} tokens={tokens} />
      </div>

      <Modal isOpen={modal} modalTitle={`${selectedToken?.symbol ?? ""} IBC ${modalTitle.current} `} onClose={() => { setModal(false) }} >
        <div className="px-5 flex flex-col w-full">
          {
            walletIsNotInitialized
              ? <Button onClick={connectWallet} className="w-full h-full">Connect Keplr wallet</Button>
              : <div>
                <p className="text-GGx-gray text-[14px]">Source account (extension managed)</p>
                <SelectLight<AccountData> disabled={true} onChange={(account) => (setAccount(account))} options={accounts} value={account} className="w-full h-full"
                  childFormatter={(account) => {
                    return (<div className="w-full p-3 h-full overflow-hidden text-GGx-gray rounded-2xl md:text-base text-sm">
                      <span className="text-base truncate">{account.address}</span>
                    </div>)
                  }}
                />
              </div>
          }
          {isGGxWalletNotConnected
            ? <Button onClick={connectGGxWallet} className="w-full h-full">Connect GGx wallet</Button>
            :
            <div className="mt-2">
              <p className="text-GGx-gray text-[14px]">Destination account</p>
              <SelectLight<Account> onChange={ggxOnSelect} options={GGxAccounts} value={modalGGxAccount} className="w-full h-full"
                childFormatter={(account) => {
                  return (<div className="w-full p-3 h-full overflow-hidden text-GGx-gray rounded-2xl md:text-base text-sm">
                    <span className="text-base truncate">{account.name ? account.name : account.address}</span>
                  </div>)
                }}
              />
            </div>
          }

          <Input name="Channel"
            type="text"
            className="mt-1 rounded-[4px] border pl-5 p-3 basis-1/4 bg-transparent text-GGx-gray border-GGx-gray w-full"
            wrapperClassName="mt-2"
            value={modalSourceChannel}
            onChange={(e) => setModalSourceChannel(e.target.value)}
          />

          <InputWithPriceInfo
            name="Amount"
            className="mt-1 rounded-[4px] border pl-5 p-3 basis-1/4 text-GGx-gray border-GGx-gray bg-transparent w-full"
            wrapperClassName="mt-2"
            value={modalAmount}
            onChange={(e) => setModalAmount(Number(e.target.value))}
            symbol={selectedToken?.name ?? ""}
            price={amountPrice}
          />

          <div className="w-full flex justify-center mt-2">
            <LoadingButton disabled={modalAmount <= 0 || isGGxWalletNotConnected || walletIsNotInitialized} loading={modalLoading}
              className="disabled:opacity-90 bg-GGx-black2 rounded-2xl border p-3 m-2 basis-2/5 grow-on-hover"
              onClick={onModalSubmit}>
              IBC {modalTitle.current}
            </LoadingButton>
          </div>
        </div>
      </Modal>
    </div >
  );
}

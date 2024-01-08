"use client";

import Dex from "@/components/dex";
import type { ChainInfo } from "@keplr-wallet/types";
import React, { useEffect, useState } from "react";
import cosmos from "../../../config/cosmos";
import {
  assertIsDeliverTxSuccess,
  SigningStargateClient,
} from "@cosmjs/stargate";
import Long from "long";

export default function Transfer() {
  const [chain, setChain] = useState<ChainInfo>(cosmos);
  const [client, setClient] = useState<any>();
  const [address, setAddress] = useState<any>();

  const [balances, setBalances] = useState<any>();

  const [ibcRecipent, setIbcRecipent] = useState<any>(
    "qHUgFDj9cU9hcGZpyPDVaLVHhf2ojJ5z9VW255XL3gWLqYYCd"
  );
  const [ibcTokenName, setIbcTokenName] = useState<any>("ERT");
  const [sourcePort, setSourcePort] = useState<any>("transfer");
  const [sourceChannel, setSourceChannel] = useState<any>("channel-0");
  const [tx, setTx] = useState<any>();
  const [sendHash, setSendHash] = useState<any>();
  const [txRes, setTxRes] = useState<any>();

  // init chain
  useEffect(() => {
    connectWallet();
  }, [chain]);

  // get balances
  useEffect(() => {
    if (!address && !client) return;
    getBalances();
  }, [address, client, sendHash]);

  // connect walllet
  const connectWallet = async () => {
    if (!window.keplr) {
      console.error("please install keplr extension");
    }

    await window.keplr.experimentalSuggestChain(chain);
    await window.keplr.enable(chain.chainId);

    const offlineSigner = window.keplr.getOfflineSigner(chain.chainId);

    const accounts = await offlineSigner.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(
      chain.rpc,
      offlineSigner
    );

    setAddress(accounts[0].address);
    setClient(client);
  };

  const getBalances = async () => {
    if (client) {
      const _balances = await client.getAllBalances(address);

      setBalances(_balances);
    }
  };

  // get tx by hash
  const getTx = async () => {
    if (!tx) return;
    const result = await client.getTx(tx);

    setTxRes(result);
  };

  const sendIbcToken = async () => {
    if (!client || !ibcRecipent || !address) {
      console.error(
        "some input is undefine client, ibcRecipent, address",
        client,
        ibcRecipent,
        address
      );
      return;
    }

    const converAmount = 10;
    const amount = {
      denom: ibcTokenName,
      amount: converAmount.toString(),
    };

    const fee = {
      amount: [
        {
          denom: chain.stakeCurrency.coinMinimalDenom,
          amount: 0.025,
        },
      ],
      gas: "2000000",
    };

    try {
      const result = await client.sendIbcTokens(
        address,
        ibcRecipent,
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
      console.log(e);
    }
  };

  return (
    <div className="text-slate-100 flex flex-col md:min-w-[50%] min-w-full p-10 pl-40">
      <button
        className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover pr-0"
        onClick={connectWallet}
      >
        {address ? "wallet connected" : " connect keplr"}
      </button>

      <div className="weight">address: {address}</div>
      <div className="weight">
        <span style={{ whiteSpace: "nowrap" }}>balances list: &nbsp;</span>
        <div className="flex flex-col rounded-3xl secondary-gradient p-5 md:mx-[25px] mt-5">
          {balances &&
            balances.map((balance: any, _index: any) => (
              <>
                <div className="flex text-md justify-between">
                  <div className="pl-0">
                    {parseFloat(
                      String(Number(balance?.amount) / Math.pow(10, 6))
                    ).toFixed(2)}
                  </div>

                  <div className="pr-0">{balance?.denom}</div>
                </div>
              </>
            ))}
        </div>
      </div>

      <br />
      <div>
        <label>Tranfer ICS-20 Token to GGX Chain</label>

        <div className="text-black">
          <div>
            <input
              type="text"
              value={ibcRecipent}
              placeholder="recipent"
              style={{ width: "350px" }}
              onChange={(e) => setIbcRecipent(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              value={ibcTokenName}
              placeholder="ibc token name"
              style={{ width: "350px" }}
              onChange={(e) => setIbcTokenName(e.target.value)}
            />
          </div>
          <br />
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
    </div>
  );
}

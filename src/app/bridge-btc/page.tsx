"use client";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { type ChangeEvent, useEffect, useState } from "react";
import { web3Accounts, web3AccountsSubscribe, web3Enable, web3FromAddress, web3FromSource } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BN, BN_ZERO } from "@polkadot/util/bn";
import { GGX_WSS_URL } from "@/consts";
import { Button } from "@/components/common/button";
import Ruler from "@/components/common/ruler";
import { SelectDark } from "@/components/common/select";
//const wsProviderURL = "ws://127.0.0.1:9944";
//https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/chainstate

const lg = console.log;
const DAPP_NAME = 'GGX'
const BridgeBtc = () => {
  const [api, setApi] = useState<ApiPromise>();
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();

  const [amountIp, setAmountIp] = useState(0);
  const [balcWallet1GGXT, setBalcWallet1GGXT] = useState<BN>(new BN(0));
  const [balcWallet1KBTC, setBalcWallet1KBTC] = useState<BN>(new BN(0));
  const addrAlice = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
  const wallet1 = process.env.NEXT_PUBLIC_WALLET1 || "INVALID_WALLET_ADDRESS";

  //const amount = new BN(10).mul(new BN(10).pow(new BN(12)));//.toString();

  let unsubscribe: () => void; // this is the function of type `() => void` that should be called to unsubscribe

  const setup = async () => {
    lg("setup()")
    const wsProvider = new WsProvider(GGX_WSS_URL);
    const api = await ApiPromise.create({ provider: wsProvider });
    await api.isReadyOrError;

    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version(),
    ]);
    lg(
      `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
    );
    setApi(api);
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setup();
  }, []);

  const checkBalances = async () => {
    lg("checkBalances()")
    if (!api) throw Error("No_API_found");
    const time = await api.query.timestamp.now();
    lg("timestamp:", time.toPrimitive());

    const asset = await api.query.assets.metadata(0 /* Asset Id */);
    console.log("Asset", asset.name.toString(), 'has ', asset.decimals.toString(), "decimals");

    const meta = api.rpc.system.properties.meta;
    console.log("meta", meta);

    const selected = selectedAccount?.address;
    lg('selectedAccount.address:', selected)
    if (!selected) throw Error("SelectedAccount undefined");
    const entries = await api.query.tokens.accounts.entries(selected)
    lg('show all detected tokens:')
    for (const entry of entries) {
      lg(entry[0].toHuman())
    }

    let balc1 = await getBalcToken(selected, 'GGXT');
    let balc2 = await getBalcToken(wallet1, 'GGXT');
    setBalcWallet1GGXT(new BN(balc2.toString()))
    //1,180,591,620,717,411,303,424 or 2^70

    balc1 = await getBalcToken(selected, 'KBTC');
    balc2 = await getBalcToken(wallet1, 'KBTC');
    setBalcWallet1KBTC(new BN(balc2.toString()))
  }
  const getBalcToken = async (target: string, tokenName: string) => {
    if (!api) throw Error("No_API_found");
    const { free } = await api.query.tokens.accounts(target, { Token: tokenName });
    //enum= token, foreignasset, lendtoken, lptoken, stablelptoken
    lg(target.substring(0, 4), tokenName, "balance:", free.toString(), free.toHuman());
    return free;
  }
  const connectWallet = async () => {
    lg("connectWallet()")
    if (typeof window !== "undefined") {
      const extensions = await web3Enable(DAPP_NAME);
      if (!extensions) { throw Error("No_extension _found") }
      if (extensions.length === 0) {
        lg("no extension installed, or the user did not accept the authorization")
        // in this case we should inform the user and give a link to the extension
        return;
      }
      const allAccounts = await web3Accounts();
      lg('allAccounts:', allAccounts);

      setAccounts(allAccounts);
      if (allAccounts.length === 1) {
        setSelectedAccount(allAccounts[0]);
      }

      // we subscribe to any account change and log the new list. note that `web3AccountsSubscribe` returns the function to unsubscribe
      unsubscribe = await web3AccountsSubscribe((injectedAccounts) => {
        lg('new injected accounts found')
        injectedAccounts.map((account) => {
          lg(account.address);
        })
      });
      // don't forget to unsubscribe when needed, e.g when unmounting a component
      //unsubscribe && unsubscribe();
    }
  }

  //const amount = new BN(10).mul(new BN(10).pow(new BN(12)));//.toString();
  const handleAmountChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement).value;
    lg('handleAmountChange:', (event?.target as HTMLInputElement).value);
    const out = Number.parseInt(value);
    if (Number.isNaN(out)) {
      console.error('parseInt failed');
    } else {
      setAmountIp(out);
    }
  }
  const handleTransaction = async () => {
    lg("handleTransaction")
    if (!api) throw Error("No_API_found");
    const beforeAccountData = await api.query.system.account(selectedAccount?.address);//addrAlice
    lg("beforeAccountData:", beforeAccountData.toHuman());
    if (!selectedAccount) throw Error("No_Selected_Account");

    if (typeof window !== "undefined") {
      const injector = await web3FromSource(selectedAccount?.meta.source);//(addrAlice);

      const amount = amountIp || 1000;
      lg('amount:', amount);
      //const txHash = api.tx.balances.transfer(BOB, 1000).signAndSend(alice);
      const subscription = await api.tx.tokens.transferKeepAlive(wallet1, { Token: 'GGXT' }, `${amount}`).signAndSend(selectedAccount.address, { signer: injector.signer }, (result) => {
        //if (result.isCompleted)
        //if (result.isFinalized) 
        //if (result.isError)
        if (result.status.isInBlock) {
          lg(`Completed at block hash #${result.status.asInBlock.toString()}`);
        } else {
          lg(`Current status: ${result.status.type}`);
        }
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      }).catch((error: any) => {
        lg(':( transaction failed', error);
      });//addrAlice
      lg("subscription", subscription);//subscription.unsubscribe()
    }
  }

  type InteractType = "Deposit" | "Withdraw";
  const onModalOpen = async (type: InteractType) => {
    lg('onModalOpen')
  }
  const total = 0;
  const selectedToken = "BTC"

  const walletIsNotInitialized = accounts.length === 0;

  const handleAccountSelection = async (account1: InjectedAccountWithMeta) => {
    lg("handleAccountSelection")
    //if(!address) { throw Error() }
    const account = accounts.find(account => account.address === account1.address)
    if (!account) { throw Error("No_account_found") }
    lg('selectedAccount=', account)
    setSelectedAccount(account)
  }
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl md:text-3xl break-words w-[40%] text-GGx-yellow font-telegraf">
          ${total.toFixed(2)}
        </h1>
        <div className="flex md:flex-row flex-col gap-5">
          <Button
            data-testid="deposit"
            onClick={() => onModalOpen("Deposit")}
            disabled={walletIsNotInitialized}
            className="w-1/4"
          >
            Deposit {selectedToken ?? ""}
          </Button>
          <Button
            data-testid="withdraw"
            onClick={() => onModalOpen("Withdraw")}
            disabled={
              walletIsNotInitialized ||
              balcWallet1KBTC.lte(BN_ZERO)
            }
            className="w-1/4"
          >
            Withdraw {selectedToken ?? ""}
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <Ruler />
      </div>

      <div className="flex justify-end md:mt-10 mt-1 items-center">
        <div className="w-[45%] md:w-[30%] md:max-w-96 max-w-48">
          {walletIsNotInitialized ? (
            <Button onClick={connectWallet} className="w-full h-full">
              Connect Wallet
            </Button>
          ) : (
            <div
              data-testid="userSelect"
              className="flex w-full h-full border-GGx-black2 border-2 rounded-[4px]"
            >
              <p className="h-full p-2 text-[14px] text-GGx-gray">Account</p>
              <SelectDark<InjectedAccountWithMeta>
                onChange={handleAccountSelection}
                options={accounts}
                value={selectedAccount}
                className="w-full h-full"
                childFormatter={(account) => {
                  return (
                    <div className="w-full p-1 h-full text-GGx-light rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                      <span className="text-base">
                        {account.meta.name
                          ? account.meta.name
                          : `Account ${accounts.findIndex(
                            (acc) => acc.address === account.address,
                          )}`}
                      </span>
                    </div>
                  );
                }}
              />
            </div>
          )}
        </div>
      </div>

      <span>BTC to KBTC Bridge</span><br />
      <span>Wallet1: {wallet1}</span><br />

      {accounts.length === 0 ? (
        <button type="button" onClick={connectWallet}>Connect Wallet</button>) : null}

      {selectedAccount ? selectedAccount.address : null
      }
      <br />
      <button type="button" onClick={checkBalances}>Check Balances</button><br />
      <input name="amount1" onChange={handleAmountChange} /><br />
      <button type="button" onClick={handleTransaction}>Send Transaction</button><br />

      Wallet1 GGXT Balance: {balcWallet1GGXT.toString()}
      <br />
      Wallet1 KBTC Balance: {balcWallet1KBTC.toString()}

    </div>
  );
}//disabled selected hidden 
export default BridgeBtc;

"use client";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { type ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { web3Accounts, web3AccountsSubscribe, web3Enable, web3FromAddress, web3FromSource } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BN } from "@polkadot/util/bn";
import { createTestPairs } from "@polkadot/keyring/testingPairs";
import { GGX_WSS_URL } from "@/consts";
//const wsProviderURL = "ws://127.0.0.1:9944";
//https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/chainstate

const lg = console.log;
const DAPP_NAME = 'GGX'
const BridgeBtc = () => {
  const [api, setApi] = useState<ApiPromise>();
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();

  const [balance, setBalance] = useState<BN>(new BN(0));
  const addrAlice = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
  const addr5ERyu = "5ERyuQCk9gt1SaTggiDReduDsgbhkYnUdAaLkCHZR7paEbuw";

  const amount = new BN(10).mul(new BN(10).pow(new BN(12)))

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

  const clickOne = async () => {
    lg("clickOne()")
    if (!api) throw Error("No_API_found");
    const time = await api.query.timestamp.now();
    lg("timestamp:", time.toPrimitive());
    lg("amount:", amount.toString());

    const address = selectedAccount?.address;
    lg('selectedAccount.address:', address)
    const entries = await api.query.tokens.accounts.entries(address)
    // biome-ignore lint/complexity/noForEach: <explanation>
    entries.forEach(entry => lg('token:', entry[0].toHuman()))

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjGGXT }: any = await api.query.tokens.accounts(address, { Token: 'GGXT' });
    lg("ObjGGXT:", ObjGGXT);
    lg("ObjGGXT:", ObjGGXT.toString(), ObjGGXT.toHuman());//1,180,591,620,717,411,303,424 or 2^70

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjGGXT2 }: any = await api.query.tokens.accounts(addr5ERyu, { Token: 'GGXT' });
    lg("ObjGGXT2:", ObjGGXT2);
    lg("ObjGGXT2:", ObjGGXT2.toString(), ObjGGXT2.toHuman());

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjKBTC }: any = await api.query.tokens.accounts(address, { Token: 'KBTC' });
    //enum= token, foreignasset, lendtoken, lptoken, stablelptoken
    lg("ObjKBTC:", ObjKBTC.toString(), ObjKBTC.toHuman());
  }
  const handleConnection = async () => {
    lg("handleConnection()")
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
  const handleAccountSelection = async (e: ChangeEvent<HTMLSelectElement>) => {
    lg("handleAccountSelection")
    //HTMLSelectElement is copied from onChange hint
    const selectedAddress = e.target.value;
    //if(!address) { throw Error() }
    const account = accounts.find(account => account.address === selectedAddress)
    if (!account) { throw Error("No_account_found") }
    lg('selectedAccount=', account)
    setSelectedAccount(account)
  }

  const handleTransaction = async () => {
    lg("handleTransaction")
    if (!api) throw Error("No_API_found");
    const beforeAccountData = await api.query.system.account(selectedAccount?.address);//addrAlice
    lg("beforeAccountData:", beforeAccountData.toHuman());
    if (!selectedAccount) throw Error("No_selectedAccount");

    if (typeof window !== "undefined") {
      const injector = await web3FromSource(selectedAccount?.meta.source);//(addrAlice);

      //const txExtrinsic = api.tx.balances.transfer(BOB, 1000)
      const hash = await api.tx.tokens.transferKeepAlive(addr5ERyu, { Token: 'GGXT' }, "1000").signAndSend(selectedAccount.address, { signer: injector.signer }, (result) => {
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
      lg("hash", hash);//subscription.unsubscribe()
    }
  }
  /*async signerFor(address: PubKey): Promise<Signer> {
      const { web3FromAddress } = await import("@polkadot/extension-dapp");
      await this.inject();
      return (await web3FromAddress(address)).signer;
    }*/
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
    <button type="button" onClick={clickOne}>ClickOne</button><br />
    <button type="button" onClick={handleTransaction}>handleTransaction</button>

  </div>)
}
export default BridgeBtc;
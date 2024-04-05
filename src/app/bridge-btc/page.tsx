"use client";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { type ChangeEvent, useEffect, useState } from "react";
import { web3Accounts, web3AccountsSubscribe, web3Enable, web3FromAddress, web3FromSource } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BN } from "@polkadot/util/bn";
import { GGX_WSS_URL } from "@/consts";
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

    const selected = selectedAccount?.address;
    lg('selectedAccount.address:', selected)
    const entries = await api.query.tokens.accounts.entries(selected)
    lg('show all detected tokens:')
    for (const entry of entries) {
      //lg('entries', entry)
      lg(entry[0].toHuman())
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjGGXT }: any = await api.query.tokens.accounts(selected, { Token: 'GGXT' });
    lg("ObjGGXT:", ObjGGXT);
    lg("ObjGGXT:", ObjGGXT.toString(), ObjGGXT.toHuman());//1,180,591,620,717,411,303,424 or 2^70

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjGGXT2 }: any = await api.query.tokens.accounts(wallet1, { Token: 'GGXT' });
    lg("ObjGGXT2:", ObjGGXT2);
    lg("ObjGGXT2:", ObjGGXT2.toString(), ObjGGXT2.toHuman());
    setBalcWallet1GGXT(new BN(ObjGGXT2.toString()))

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjKBTC }: any = await api.query.tokens.accounts(selected, { Token: 'KBTC' });
    //enum= token, foreignasset, lendtoken, lptoken, stablelptoken
    lg("ObjKBTC:", ObjKBTC.toString(), ObjKBTC.toHuman());
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { free: ObjKBTC2 }: any = await api.query.tokens.accounts(wallet1, { Token: 'KBTC' });
    //enum= token, foreignasset, lendtoken, lptoken, stablelptoken
    lg("ObjKBTC2:", ObjKBTC2.toString(), ObjKBTC2.toHuman());
    setBalcWallet1KBTC(new BN(ObjKBTC2.toString()))

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

  return (<div>
    <span>BTC to KBTC Bridge</span><br />
    <span>Wallet1: {wallet1}</span><br />

    {accounts.length === 0 ? (
      <button type="button" onClick={handleConnection}>Connect Wallet</button>) : null}

    {accounts.length > 0 && !selectedAccount ? (<>
      <select onChange={handleAccountSelection} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled hidden>Choose your account</option>

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
    <button type="button" onClick={checkBalances}>Check Balances</button><br />
    <input name="amount1" onChange={handleAmountChange} /><br />
    <button type="button" onClick={handleTransaction}>Send Transaction</button><br />

    Wallet1 GGXT Balance: {balcWallet1GGXT.toString()}
    <br />
    Wallet1 KBTC Balance: {balcWallet1KBTC.toString()}

  </div>)
}//disabled selected hidden
export default BridgeBtc;
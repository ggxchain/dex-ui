"use client";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { web3Accounts, web3AccountsSubscribe, web3Enable, web3FromAddress, web3FromSource } from '@polkadot/extension-dapp';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BN, BN_ZERO } from "@polkadot/util/bn";
import { GGX_WSS_URL } from "@/consts";
import { Button } from "@/components/common/button";
import Ruler from "@/components/common/ruler";
import { SelectDark } from "@/components/common/select";
import type { PubKey, Token } from "@/types";
import Modal from "@/components/common/modal";
import { InputWithPriceInfo } from "@/components/common/input";
import LoadingButton from "@/components/common/loadButton";
import Contract, { errorHandler } from "@/services/api";
import TokenDecimals from "@/tokenDecimalsConverter";
import { toast } from "react-toastify";
//const wsProviderURL = "ws://127.0.0.1:9944";
//https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/chainstate

const lg = console.log;
const DAPP_NAME = 'RfQ by GGx'
const tokenSymbol = "BTC"
const tokenSymbolBridged = "KBTC"
export type Account = {
  address: PubKey;
  name?: string;
};
const BridgeBtc = () => {
  const [api, setApi] = useState<ApiPromise>();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account>();
  //InjectedAccountWithMeta

  const [amountIp, setAmountIp] = useState(0);
  const [balcWalletToGGXT, setBalcWallet1GGXT] = useState<BN>(new BN(0));
  const [balcWalletToKBTC, setBalcWallet1KBTC] = useState<BN>(new BN(0));
  const addrAlice = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
  const walletTo = process.env.NEXT_PUBLIC_WALLET1 || "INVALID_WALLET_ADDRESS";

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
    getLocalstorageAccounts()
    //await connectWallet()
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
    lg("Asset", asset.name.toString(), 'has ', asset.decimals.toString(), "decimals");

    const meta = api.rpc.system.properties.meta;
    lg("meta", meta);

    const selected = selectedAccount?.address;
    lg('selectedAccount.address:', selected)
    if (!selected) throw Error("SelectedAccount undefined");
    const entries = await api.query.tokens.accounts.entries(selected)
    lg('show all detected tokens:')
    for (const entry of entries) {
      lg(entry[0].toHuman())
    }

    let balc1 = await getBalcToken(selected, 'GGXT');
    let balc2 = await getBalcToken(walletTo, 'GGXT');
    setBalcWallet1GGXT(new BN(balc2.toString()))
    //1,180,591,620,717,411,303,424 or 2^70

    balc1 = await getBalcToken(selected, 'KBTC');
    balc2 = await getBalcToken(walletTo, 'KBTC');
    setBalcWallet1KBTC(new BN(balc2.toString()))
  }
  const getBalcToken = async (target: string, tokenName: string) => {
    if (!api) throw Error("No_API_found");
    const { free } = await api.query.tokens.accounts(target, { Token: tokenName });
    //enum= token, foreignasset, lendtoken, lptoken, stablelptoken
    lg(target.substring(0, 4), tokenName, "balance:", free.toString(), free.toHuman());
    return free;
  }
  const getLocalstorageAccounts = () => {
    const selectedAccount = window.localStorage.getItem(
      "ggx-wallet-selected-account",
    );
    const localstorageAccounts = window.localStorage.getItem("ggx-wallet-accounts");
    lg('localstorage selectedAccount:', selectedAccount)
    //lg('localstorage accounts:', accounts)
    if (selectedAccount) {
      setSelectedAccount(JSON.parse(selectedAccount))
      if (localstorageAccounts) { setAccounts(JSON.parse(localstorageAccounts)) } else { setAccounts([]) };
    }
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
      const allAccounts = await web3Accounts({
        accountType: ["sr25519", "ed25519"],
      }).then((accounts) =>
        accounts.map((info) => {
          return {
            address: info.address,
            name: info.meta.name,
          };
        }));
      lg('allAccounts:', allAccounts);
      setAccounts(allAccounts);
      window.localStorage.setItem(
        "ggx-wallet-accounts",
        JSON.stringify(allAccounts),
      );

      if (allAccounts.length === 1) {
        setSelectedAccount(allAccounts[0]);
      } else if (allAccounts.length > 1 && !selectedAccount) {
        setSelectedAccount(allAccounts[0]);
        window.localStorage.setItem(
          "ggx-wallet-selected-account",
          JSON.stringify(allAccounts[0]),
        );
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
      const extensions = await web3Enable(DAPP_NAME);
      if (!extensions) { throw Error("No_extension _found") }
      if (extensions.length === 0) {
        lg("no extension installed, or the user did not accept the authorization")
        // in this case we should inform the user and give a link to the extension
        return;
      }
      const injector = await web3FromAddress(selectedAccount?.address);
      //const injector = await web3FromSource(selectedAccount?.meta.source);

      const amount = amountIp || 1000;
      lg('amount:', amount);
      //const txHash = api.tx.balances.transfer(BOB, 1000).signAndSend(alice);
      const subscription = await api.tx.tokens.transferKeepAlive(walletTo, { Token: 'GGXT' }, `${amount}`).signAndSend(selectedAccount.address, { signer: injector.signer }, (result) => {
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

  const fiatBalance = 0;
  const [selectedToken, setSelectedToken] = useState<Token | undefined>(undefined);
  const isTokenNotSelected = selectedToken === undefined;
  type InteractType = "Deposit" | "Withdraw";
  const modalTitle = useRef<InteractType>("Deposit");
  // Modal related states
  const [modal, setModal] = useState<boolean>(false);
  const [modalAmount, setModalAmount] = useState<number>(0);
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const onModalOpen = async (type: InteractType) => {
    lg('onModalOpen')
    if (isTokenNotSelected) throw Error("No_token_selected");
    modalTitle.current = type;
    setModalLoading(false);
    setModalAmount(0);
    setModal(true);
  }

  const [contract, setContract] = useState<Contract>(new Contract());
  const [tokens, setTokens] = useState<Token[]>([]);
  useEffect(() => {
    setTokens([]);
    contract.allTokensWithInfo().then((tokens) => {
      lg('tokens:', tokens)
      setTokens(tokens);
      const tokenWanted = tokens.find(token =>
        token.symbol === tokenSymbol);
      if (!tokenWanted) {
        throw Error("No_token_found");
      }
      setSelectedToken(tokenWanted);
    });
    //connectWallet();
  }, [contract]);

  const bridgeAction = async (action: string): Promise<boolean> => {
    if (action === "Deposit") {
      //await func1().catch((err:any) => lg(err))
    } else {
      //withdraw token
    }
    return true;
  }
  const omModalSubmit = async () => {
    lg('onModalSubmit. selectedToken:', selectedToken, ', modalTitle.current:', modalTitle.current);
    if (isTokenNotSelected || modalAmount <= 0) {
      return;
    }
    setModalLoading(true);
    const amount = new TokenDecimals(selectedToken.decimals).floatToBN(modalAmount);
    lg('amount:', amount.toString());//BTC has 10 dp??

    try {
      await bridgeAction(modalTitle.current)
      setModal(false);
      checkBalances();
      toast.success(`${modalTitle.current} finalized`);
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
      setModal(false);
      errorHandler(error);
    };
  }

  const walletIsNotInitialized = accounts.length === 0;
  /*const selectedTokenPrice = selectedToken
    ? tokenPrices.get(selectedToken.id) ?? 0
    : 0;*/
  const amountPrice = 0;//modalAmount * selectedTokenPrice;

  const handleAccountSelection = async (account1: Account) => {
    lg("handleAccountSelection")
    //if(!address) { throw Error() }
    const account = accounts.find(account => account.address === account1.address)
    if (!account) { throw Error("No_account_found") }
    lg('selectedAccount=', account)

    setSelectedAccount(account);
    window.localStorage.setItem(
      "ggx-wallet-selected-account",
      JSON.stringify(account),
    );
  }
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl md:text-3xl break-words w-[40%] text-GGx-yellow font-telegraf">
          ${fiatBalance.toFixed(2)}
        </h1>
        <div className="flex md:flex-row flex-col gap-5">
          <Button
            data-testid="deposit"
            onClick={() => onModalOpen("Deposit")}
            disabled={walletIsNotInitialized}
            className="w-1/4"
          >
            Deposit {selectedToken?.name ?? ""}
          </Button>
          <Button
            data-testid="withdraw"
            onClick={() => onModalOpen("Withdraw")}
            disabled={
              walletIsNotInitialized ||
              balcWalletToKBTC.lte(BN_ZERO)
            }
            className="w-1/4"
          >
            Withdraw {selectedToken?.name ?? ""}
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
              <SelectDark<Account>
                onChange={handleAccountSelection}
                options={accounts}
                value={selectedAccount}
                className="w-full h-full"
                childFormatter={(account) => {
                  return (
                    <div className="w-full p-1 h-full text-GGx-light rounded-2xl md:text-base text-sm grow-on-hover glow-on-hover">
                      <span className="text-base">
                        {account.name
                          ? account.name
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


      <Modal
        modalTitle={`${modalTitle.current} ${selectedToken?.name ?? ""}`}
        isOpen={modal}
        onClose={() => setModal(false)}
      >
        <div className="flex flex-col w-full">
          <InputWithPriceInfo
            name="Amount"
            className="mt-1 rounded-[4px] border p-3 basis-1/4 bg-transparent text-GGx-gray border-GGx-gray w-full"
            value={modalAmount.toString()}
            onChange={(e) => setModalAmount(Number(e.target.value))}
            symbol={selectedToken?.name ?? ""}
            price={amountPrice}
          />
          {modalTitle.current === "Deposit" ? <h1 className="text-xl text-GGx-dark text-left w-full">Show deposit address...
          </h1> : <h1 className="text-xl text-GGx-dark text-left w-full">Ask destination address...
          </h1>}
          <div className="flex w-full justify-center">
            <LoadingButton
              loading={modalLoading}
              disabled={modalAmount === 0}
              className="disabled:opacity-90 text-lg md:w-1/2 mt-5 w-3/4 bg-GGx-dark border-GGx-dark"
              onClick={omModalSubmit}
            >
              <p>{modalTitle.current}</p>
            </LoadingButton>
          </div>
        </div>
      </Modal>

      <span>{tokenSymbol} to {tokenSymbolBridged} Bridge</span><br />

      <span>From wallet: {selectedAccount ? selectedAccount.address : null
      }</span>
      <br />
      <span>To Wallet: {walletTo}</span>
      <br />

      <button type="button" onClick={checkBalances}>Check Balances</button><br />
      <input name="amount1" onChange={handleAmountChange} /><br />
      <button type="button" onClick={handleTransaction}>Send Transaction</button><br />

      WalletTo GGXT Balance: {balcWalletToGGXT.toString()}
      <br />
      WalletTo KBTC Balance: {balcWalletToKBTC.toString()}

    </div>
  );
}//disabled selected hidden 
export default BridgeBtc;

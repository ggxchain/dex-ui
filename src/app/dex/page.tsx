
"use client"

import { useEffect, useRef, useState } from "react";
import Contract, { errorHandler } from "@/services/api";
import GGXWallet from "@/services/ggx";
import Ruler from "@/components/common/ruler";
import { Amount, DetailedOrder } from "@/types";
import TokenSelector, { TokenWithPrice, useTokens } from "@/components/dex/tokenSelector";
import Pair from "@/pair";
import { useRouter } from "next/navigation";
import { BN_ZERO } from "@polkadot/util";
import TokenDecimals from "@/tokenDecimalsConverter";
import Order from "@/order";
import OrderBook, { useOrderBookOrders } from "@/components/dex/orderBook";
import OrdersList, { useUserOrders } from "@/components/dex/orderList";
import OrderExpireSelect, { useExpire } from "@/components/dex/orderExpireSelect";

type TokenData = TokenWithPrice & {
  amount: Amount;
}

export default function Dex() {
  const contractRef = useRef<Contract>(new Contract());

  const [isMaker, setIsMaker] = useState<boolean>(false);
  const [sell, setSell] = useState<TokenData>();
  const [buy, setBuy] = useState<TokenData>();
  const [availableBalanceNormalized, setAvailableBalanceNormalized] = useState<Amount>(BN_ZERO);
  const [order, setOrder] = useState<Order>();
  const [tokens, loadTokens] = useTokens(contractRef.current);
  const [userOrders, updateUserOrders] = useUserOrders(contractRef.current);
  const [expireNumber, expireUnit, convertToSeconds, setExpiration] = useExpire();
  const isConnected = useRef<boolean>();

  const orderBookOrders = useOrderBookOrders(buy, sell, contractRef.current);

  const router = useRouter();
  const amountConverter = TokenDecimals.normalizedTokenDecimals(sell?.decimals ?? 1, buy?.decimals ?? 1)

  useEffect(() => {
    const wallet = new GGXWallet();
    isConnected.current = wallet.pubkey() !== undefined;
  })

  useEffect(() => {
    updateUserOrders();
    loadTokens();
  }, []);

  useEffect(() => {
    if (sell !== undefined) {
      const contract = contractRef.current;
      contract.balanceOf(sell.id).then((balance) => {
        setAvailableBalanceNormalized(amountConverter.normalize(balance, sell.decimals));
      }).catch(errorHandler)
    }
  }, [sell, buy]);

  const onClear = () => {
    setSell(undefined);
    setBuy(undefined);
    setOrder(undefined);
    setExpiration(0, { string: "Minutes" });
  }

  const onLogin = () => {
    router.push("/wallet");
  }


  const isTaker = !isMaker;
  const isTokenNotSelected = sell === undefined || buy === undefined;
  const isTokenSame = sell?.symbol === buy?.symbol;
  const isWalletNotConnected = !isConnected.current;
  const isOrderNotChosen = order === undefined;

  const orderRequested = amountConverter.normalize(order?.amoutRequested ?? BN_ZERO, sell?.decimals ?? 1);
  const orderOffered = amountConverter.normalize(order?.amountOffered ?? BN_ZERO, buy?.decimals ?? 1);

  const sellAmount = !isTokenNotSelected
    ? isMaker ? sell.amount : orderRequested
    : BN_ZERO;

  const buyAmount = !isTokenNotSelected
    ? isMaker ? buy.amount : orderOffered
    : BN_ZERO;

  const isSellAmountZero = sellAmount.eq(BN_ZERO);
  const isUserBalanceNotEnough = !isWalletNotConnected && availableBalanceNormalized.lt(sellAmount);
  const isAmountZero = isSellAmountZero || buyAmount.eq(BN_ZERO);
  const isExpirationZero = isMaker && expireNumber === 0;

  const rate = !isTokenNotSelected && !buyAmount.eq(BN_ZERO) && !sellAmount.eq(BN_ZERO)
    ? amountConverter.divWithPrecision(buyAmount, sellAmount)
    : 0;

  const isFormHasErrors = isExpirationZero || isTokenNotSelected || isTokenSame || isAmountZero || isWalletNotConnected || isUserBalanceNotEnough || (isTaker && isOrderNotChosen);

  const onSwap = () => {
    if (isFormHasErrors) {
      return;
    }
    const pair = [sell.id, buy.id] as Pair;
    const contract = contractRef.current;
    const callback = () => {
      updateUserOrders();
      onClear();
    };

    if (isMaker) {
      // Basically, we need to send the amount of tokens that we want to sell but we need to convert it to the decimals of the token.
      const sellTokenAmount = amountConverter.denormalize(sellAmount, sell.decimals);
      const buyTokenAmount = amountConverter.denormalize(buyAmount, buy.decimals);
      const expiration = Date.now() + convertToSeconds();
      contract.makeOrder(pair, sellTokenAmount, buyTokenAmount, "SELL", expiration, callback).catch(errorHandler);
    } else if (!isOrderNotChosen) {
      contract.takeOrder(order.counter, callback).catch(errorHandler);
    }
  }

  const onOrderChange = (order: Order) => {
    setOrder(order);
  };

  const onSellChange = (token: TokenWithPrice, amount: number) => {
    if (token.id !== sell?.id) {
      setOrder(undefined);
    }
    setSell({ ...token, amount: amountConverter.floatToBN(amount) });
  }

  const onBuyChange = (token: TokenWithPrice, amount: number) => {
    if (token.id !== buy?.id) {
      setOrder(undefined);
    }
    setBuy({ ...token, amount: amountConverter.floatToBN(amount) });
  }

  const onCancelOrder = (order: DetailedOrder) => {
    contractRef.current.cancelOrder(order.counter, () => {
      updateUserOrders();
    }).catch(errorHandler);
  }


  const buyPriceRate = rate * (buy?.price ?? 0);

  // 1/rate
  const reverseRate = rate > 0 ? 1 / rate : 0;
  const sellPriceRate = reverseRate * (sell?.price ?? 0);

  const buyPrice = amountConverter.BNToFloat(buyAmount) * sellPriceRate;
  const sellPrice = amountConverter.BNToFloat(sellAmount) * buyPriceRate;

  const comparedToMarket = !isTokenNotSelected && !isAmountZero && buyPrice > 0
    ? (sellPrice - buyPrice) * 100 / buyPrice
    : 0;

  return (
    <div className="text-slate-100 flex flex-col w-full items-center">
      <div className="flex w-full justify-center md:flex-row flex-col">
        <div className="flex flex-col md:w-[70%] w-full max-w-[600px]">
          <div className="flex text-md justify-between">
            <button onClick={() => setIsMaker(false)}>
              <p className={isMaker ? "text-slate-500" : ""}>Taker order</p>
            </button>
            <button onClick={() => setIsMaker(true)}>
              <p className={isMaker ? "" : "text-slate-500"}>Maker order</p>
            </button>
          </div>

          <Ruler />

          <div className="flex w-full flex-col rounded-3xl secondary-gradient p-5 mt-5">
            <div className="flex justify-between text-sm">
              <p>Sell</p>
              <div className="flex">
                <p className="text-opacity-75 font-thin">Available for swaps:</p>
                <p className="font-normal mx-5">{amountConverter.BNtoDisplay(availableBalanceNormalized, sell?.symbol ?? "")}</p>
              </div>
            </div>
            <TokenSelector token={sell} tokens={tokens} lockedAmount={isTaker} amount={amountConverter.BNToFloat(sellAmount)} onChange={onSellChange} />
            <div className="flex flex-col text-xs text-orange-300">
              {
                isUserBalanceNotEnough && !isTokenNotSelected &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p className="w-4/5">The balance is not enough to make this swap</p>
                  {
                    isMaker && // Taker can't regulate the amount of the order.
                    <button className="ml-2 p-1 rounded-2xl border grow-on-hover" onClick={() => setSell({ ...sell, amount: availableBalanceNormalized })}>Set max</button>
                  }
                </div>
              }
              {isTokenSame && !isAmountZero &&
                <div className="flex text-xs items-center mt-1 justify-between">
                  <p>Token for buy/sell should not be the same</p>
                </div>
              }
            </div>
            <p className="text-sm mt-2">Buy</p>
            <TokenSelector token={buy} tokens={tokens} lockedAmount={isTaker} amount={amountConverter.BNToFloat(buyAmount)} onChange={onBuyChange} />

            {isMaker &&
              <div>
                <p className="text-sm mt-2">Expiration</p>
                <OrderExpireSelect number={expireNumber} unit={expireUnit} onChange={setExpiration} />
              </div>
            }

            <Ruler />

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Rate:</p>
                {rate > 0 && !isTokenNotSelected && !isTokenSame
                  ? <div className="flex flex-col">
                    <p className="font-semibold">
                      1 {sell.name} = {rate.toFixed(3)} {buy.name} ≈ ${buyPriceRate.toFixed(2)}
                    </p>
                    <p className="text-xs text-right opacity-75">
                      1 {buy.name} = {reverseRate.toFixed(3)} {sell.name} ≈ ${sellPriceRate.toFixed(2)}
                    </p>
                  </div>
                  : <p>0.00</p>
                }
              </div>

              <div className="flex justify-between ">
                <p className="font-semibold">Compared to CEx:</p>
                <p className={`${comparedToMarket < 0 ? "text-red-500" : comparedToMarket > 0 ? "text-green-500" : ""}`}>{Math.abs(comparedToMarket).toFixed(1)}%</p>
              </div>

              <div className="flex justify-between">
                <p className="font-semibold">Total fee:</p>
                <p>0.00</p>
              </div>

              <div className="flex justify-around mt-5">
                <button className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover glow-on-hover" onClick={onClear}>Clear</button>
                {
                  isWalletNotConnected
                    ? <button className="basis-3/4 rounded-2xl border p-2 m-2 grow-on-hover" onClick={onLogin}>Connect wallet</button>
                    : <button className="basis-3/4 rounded-2xl border p-2 m-2 enabled:grow-on-hover enabled:glow-on-hover disabled:opacity-50" disabled={isFormHasErrors} onClick={onSwap}>{isTaker ? "Take order" : "Make order"}</button>
                }
              </div>
            </div>
          </div>
          <OrdersList orders={userOrders} cancelOrder={onCancelOrder} />
        </div>
        {
          isTaker && !isTokenNotSelected && !isTokenSame &&
          <div className="md:has-[table]:py-14 md:py-5 px-5 md:has-[table]:w-[30%] has-[table]:w-full">
            <OrderBook orders={orderBookOrders} buyToken={buy} sellToken={sell} onChange={onOrderChange} selectedOrder={order} />
          </div>
        }
      </div>

    </div>
  )
}

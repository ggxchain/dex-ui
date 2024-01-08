const cosmos ={
  chainId: "earth-0",
  chainName: "monkey",
  rpc: "http://127.0.0.1:26657",
  rest: "http://127.0.0.1:1317",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmos" + "pub",
    bech32PrefixValAddr: "cosmos" + "valoper",
    bech32PrefixValPub: "cosmos" + "valoperpub",
    bech32PrefixConsAddr: "cosmos" + "valcons",
    bech32PrefixConsPub: "cosmos" + "valconspub",
  },
  currencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
    {
      coinDenom: "ERT",
      coinMinimalDenom: "ert",
      coinDecimals: 0,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      gasPriceStep: {
        low: 1,
        average: 1,
        high: 1,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "stake",
    coinMinimalDenom: "stake",
    coinDecimals: 6,
    coinGeckoId: "cosmos",
  },
  features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
}

export default cosmos;
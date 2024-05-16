import { chainRegistryChainToKeplr } from "@chain-registry/keplr";
import type { ChainInfo } from "@keplr-wallet/types";
import { assets, chains } from "chain-registry";

const localhost = {
	chainId: "earth-0",
	chainName: "GGx Cosmos testnet",
	rpc: "https://cosmos-rpc.dev.ggxchain.io:443",
	rest: "https://cosmos-rpc.dev.ggxchain.io:1200",
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
};

const ibcChains = [localhost];

export default ibcChains;

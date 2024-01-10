const axelar = {
    "rpc": "https://tm.axelar-testnet.lava.build:443",
    "rest": "https://rest.axelar-testnet.lava.build",
    "chainId": "axelar-testnet-lisbon-3",
    "chainName": "Axelar Testnet",
    "stakeCurrency": { "coinDenom": "AXL", "coinMinimalDenom": "uaxl", "coinDecimals": 6 },
    "bech32Config": { "bech32PrefixAccAddr": "axelar", "bech32PrefixAccPub": "axelarpub", "bech32PrefixValAddr": "axelarvaloper", "bech32PrefixValPub": "axelarvaloperpub", "bech32PrefixConsAddr": "axelarvalcons", "bech32PrefixConsPub": "axelarvalconspub" },
    "bip44": { "coinType": 118 },
    "currencies": [{ "coinDenom": "AXL", "coinMinimalDenom": "uaxl", "coinDecimals": 6, "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/chain.png" }],
    "feeCurrencies": [{ "coinDenom": "AXL", "coinMinimalDenom": "uaxl", "coinDecimals": 6 }],
    "gasPriceStep": { "low": 0.05, "average": 0.125, "high": 0.2 },
    "features": ["stargate", "no-legacy-stdTx", "ibc-transfer"]
}

const localhost = {
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

const cosmos = {
    "rpc": "https://rpc.sentry-01.theta-testnet.polypore.xyz",
    "rest": "https://rest.sentry-01.theta-testnet.polypore.xyz",
    "chainId": "theta-testnet-001",
    "chainName": "Cosmos Hub Testnet",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
    "bip44": {
        "coinType": 118
    },
    "bech32Config": {
        "bech32PrefixAccAddr": "cosmos",
        "bech32PrefixAccPub": "cosmospub",
        "bech32PrefixConsAddr": "cosmosvalcons",
        "bech32PrefixConsPub": "cosmosvalconspub",
        "bech32PrefixValAddr": "cosmosvaloper",
        "bech32PrefixValPub": "cosmosvaloperpub"
    },
    "stakeCurrency": {
        "coinDecimals": 6,
        "coinDenom": "ATOM",
        "coinMinimalDenom": "uatom",
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
    },
    "currencies": [
        {
            "coinDecimals": 6,
            "coinDenom": "ATOM",
            "coinMinimalDenom": "uatom",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
        }
    ],
    "feeCurrencies": [
        {
            "coinDecimals": 6,
            "coinDenom": "ATOM",
            "coinMinimalDenom": "uatom",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
            "gasPriceStep": {
                "average": 0.025,
                "high": 0.03,
                "low": 0.01
            }
        }
    ],
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
}

const ibcChains = [cosmos, axelar, localhost]

export default ibcChains

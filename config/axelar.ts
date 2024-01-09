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
export default axelar 

import { assets, ibc } from "chain-registry";
import { createHash } from "crypto";

/// Gets ibc hash and uses registry to get real token name
/// Unfortunately, it seems that it is not working with testnet as there is lack of data in registry
export function ibcHashToDenom(chainName: string, ibcHash: string) {
    const split = ibcHash.split('/');
    const ibcString = split.at(0);
    const hash = split.at(1);

    if (!ibcString || !hash || ibcString !== 'ibc') {
        return undefined
    }

    const chainConnections = ibc.filter((info) => info.chain_1.chain_name === chainName || info.chain_2.chain_name == chainName);
    for (const connection of chainConnections) {
        const isFirstChain = connection.chain_1.chain_name === chainName;
        const otherChain = isFirstChain ? connection.chain_2 : connection.chain_1;

        const otherChannels = connection.channels.map((channel) => isFirstChain ? channel.chain_2 : channel.chain_1);
        const otherChainName = otherChain.chain_name;
        const otherChainAssets = assets.find((asset) => asset.chain_name == otherChainName)?.assets;
        if (!otherChainAssets) {
            continue;
        }

        for (const channel of otherChannels) {
            for (const asset of otherChainAssets) {
                const path = `${channel.port_id}/${channel.channel_id}/${asset.base}`;
                const testedHash = createHash('sha256').update(path).digest('hex').toUpperCase();
                if (testedHash === hash.toLowerCase()) {
                    return asset;
                }
            }
        }
    }
    return undefined
}

# GGx Dex Front-end

This applications is innovative dex solution built on the GGx network.

The solution allows user easily bridge and trade.
Supported bridging technologies:

* IBC
* Ethereum bridging
* Bitcoin bridging

## Getting Started

First, run the development server:

```bash
npm install -g bun
bun install
bun run build
bun run dev
```

Configure `.env.local` file(used during running):
NEXT_PUBLIC_PARACHAIN_URL=ws://127.0.0.1:9944
NEXT_PUBLIC_WALLET1=YOUR_TEST_WALLET_ADDRESS
NEXT_PUBLIC_GGX_NETWORK=brooklyn

Copy the `.env.local` file into `.env` file, which is used in tests

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Update metadata

Whenever we change GGx api related to Balances, Assets and Dex pallets, please regenerate types from metadata.

Also, you need to run local node with correct version of code (or change package.json to point to correct RPC)

```bash
./ggxchain-node --dev

npm run generate:defs
npm run generate:types
```

## Running tests

```bash
npm run test
```

## Running tests on BTC balances
in ggxnode repo: `$ cd node && cargo run --release --no-default-features --features=brooklyn -- --dev -d /tmp/db`

Comment out ggx container: `//let alice = start_ggx(&docker);`
Replace `alice.get_host_ws_url()` by `ws://127.0.0.1:9944`

in testutil repo: $ `cargo test --release`
... to simulate BTC depositing

then go to bridge-BTC page, and you should be able to see the KBTC and GGXT balances
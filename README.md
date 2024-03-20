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
npm i
npm build
npm run dev
```

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

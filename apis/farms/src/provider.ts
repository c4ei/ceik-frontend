import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const c4eiProvider = new StaticJsonRpcProvider(
  {
    url: 'https://rpc.c4ei.net',
    skipFetchSetup: true,
  },
  21004,
)

export const polygonProvider = new StaticJsonRpcProvider(
  {
    url: 'https://rpc-mainnet.matic.quiknode.pro', // https://polygon-rpc.com
    skipFetchSetup: true,
  },
  137,
)

export const klayProvider = new StaticJsonRpcProvider(
  {
    url: 'https://public-node-api.klaytnapi.com/v1/cypress',
    // url: 'https://cypress.chain.thebifrost.io',
    // url: 'https://en.klayfi.finance',
    skipFetchSetup: true,
  },
  8217,
)

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: 'https://nodes.pancakeswap.com',
    skipFetchSetup: true,
  },
  56,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    skipFetchSetup: true,
  },
  97,
)

export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    skipFetchSetup: true,
  },
  5,
)

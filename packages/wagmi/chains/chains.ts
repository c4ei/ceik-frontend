import { rinkeby, mainnet, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }
const c4eiExplorer = { name: 'C4EIScan', url: 'https://exp.c4ei.net' }
export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const c4ei: Chain = {
  id: 21004,
  name: 'C4EI Chain',
  network: 'c4ei',
  rpcUrls: {
    public: 'https://rpc.c4ei.net',
    default: 'https://rpc.c4ei.net',
  },
  blockExplorers: {
    default: c4eiExplorer,
    etherscan: c4eiExplorer,
  },
  nativeCurrency: {
    name: 'C4EI Native Token',
    symbol: 'C4EI',
    decimals: 18,
  },
  multicall: {
    address: '0x423A3f11Cfb63E2C29E42E9A7472927F04875fbF',
    blockCreated: 625166,
  },
}

export const klay: Chain = {
  id: 8217,
  name: 'Klay',
  network: 'klay',
  nativeCurrency: { name: 'klay', symbol: 'KLAY', decimals: 18 },
  rpcUrls: {
    default: 'https://public-node-api.klaytnapi.com/v1/cypress',
    // default: 'https://cypress.chain.thebifrost.io',
    // default: 'https://en.klayfi.finance',
  },
  blockExplorers: {
    default: {
      name: 'scope',
      url: 'https://scope.klaytn.com/',
    },
  },
  multicall: {
    address: '0xf42517428998dE5F1Fb6EB3c450c9Adaf3fFde23',
    blockCreated: 103404555,
  },

}

export { rinkeby, mainnet, goerli }

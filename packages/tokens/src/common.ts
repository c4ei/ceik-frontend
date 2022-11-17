import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new Token( ChainId.BSC, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18, 'CAKE', 'PancakeSwap Token', 'https://swap.c4ei.net/',)
export const CAKE_C4EI = new Token( ChainId.C4EI, '0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69', 18, 'CAKE', 'C4EISwap Token', 'https://swap.c4ei.net/',)
export const CAKE_KLAY = new Token( ChainId.KLAY, '0x4A01A7ecE21199b20e4A5B48c3C1D95f95d98788', 18, 'CAKE', 'CeikSwap Token', 'https://swap.c4ei.net/',)
export const CAKE_POLYGON = new Token( ChainId.POLYGON, '0x9a976661AcBa62E821D5562579d6a1B0324dddf2', 18, 'CAKE', 'CeikSwap Token', 'https://swap.c4ei.net/',)
export const CAKE_TESTNET = new Token( ChainId.BSC_TESTNET,'0xFa60D973F7642B748046464e165A65B7323b0DEE',18,'CAKE','PancakeSwap Token','https://swap.c4ei.net/',)

export const USDC_BSC = new Token(ChainId.BSC,'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',18,'USDC','Binance-Peg USD Coin','https://www.centre.io/usdc',)
export const USDC_TESTNET = new Token(ChainId.BSC_TESTNET,'0x64544969ed7EBf5f083679233325356EbE738930',18,'USDC','Binance-Peg USD Coin','https://www.centre.io/usdc',)
export const USDC_ETH = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
export const USDC_RINKEBY = new Token(ChainId.RINKEBY,'0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',6,'tUSDC','test USD Coin',)
export const USDC_GOERLI = new Token(ChainId.GOERLI,'0x07865c6E87B9F70255377e024ace6630C1Eaa37F',6,'tUSDC','test USD Coin',)

export const USDT_BSC = new Token(ChainId.BSC,'0x55d398326f99059fF775485246999027B3197955',18,'USDT','Tether USD','https://tether.to/',)
export const USDT_ETH = new Token(ChainId.ETHEREUM,'0xdAC17F958D2ee523a2206206994597C13D831ec7',6,'USDT','Tether USD','https://tether.to/',)

export const BUSD_BSC = new Token(ChainId.BSC,'0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',18,'BUSD','Binance USD','https://www.paxos.com/busd/',)
export const BUSD_POLYGON = new Token(ChainId.POLYGON,'0x900b38cf92A9b7FfecF069519F75905c2E29cd4F', 18,'BUSD','C4EI USD','https://c4ei.net/',)
export const BUSD_C4EI = new Token(ChainId.C4EI,'0xBa9303709c2Ad10b62a598e18e15b1E42921edea', 18,'BUSD','C4EI USD','https://c4ei.net/',)
export const BUSD_KLAY = new Token(ChainId.KLAY,'0x8Eed4BFE1Bba9ee60c3E4A6AFD2bDD8102e8590C', 18,'BUSD','CEIK USD','https://c4ei.net/',)
export const BUSD_TESTNET = new Token(ChainId.BSC_TESTNET,'0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',18,'BUSD','Binance USD','https://www.paxos.com/busd/',)
export const BUSD_ETH = new Token(ChainId.ETHEREUM,'0x4Fabb145d64652a948d72533023f6E7A623C7C53',18,'BUSD','Binance USD','https://www.paxos.com/busd/',)
export const BUSD_RINKEBY = new Token(ChainId.RINKEBY,'0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E',18,'BUSD','Binance USD','https://www.paxos.com/busd/',)
export const BUSD_GOERLI = new Token(ChainId.GOERLI,'0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',18,'BUSD','Binance USD','https://www.paxos.com/busd/',)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.RINKEBY]: BUSD_RINKEBY,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.POLYGON]: BUSD_POLYGON,
  [ChainId.KLAY]: BUSD_KLAY,
  [ChainId.C4EI]: BUSD_C4EI,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.POLYGON]: CAKE_POLYGON,
  [ChainId.KLAY]: CAKE_KLAY,
  [ChainId.C4EI]: CAKE_C4EI,
}

export const ALBA_C4EI = new Token( ChainId.C4EI, '0x98A5A21B2fa55b14030c44b4C4ACe4B16f5c6C51', 18, 'ALBA', 'ALBA Defi', 'https://swap.c4ei.net/',)
export const ALBA_KLAY = new Token( ChainId.KLAY, '0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5', 18, 'ALBA', 'ALBA Defi', 'https://scope.klaytn.com/token/0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5?tabId=tokenTransfer',)
export const ALBA = { [ChainId.C4EI]: ALBA_C4EI, [ChainId.KLAY]: ALBA_KLAY, }
// 8217 export const ALBA_KLAY_LP : '0x604a309612e6CDf1C30045A4F9201D5146db2497'
// 21004 export const ALBA_C4EI_LP : '0x05FB813418a1F7190754502Cb3085fAa968F1b70'

export const SAWON = new Token( ChainId.C4EI, '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', 18, 'SAWON', 'SAWON Defi', 'https://exp.c4ei.net/account/0x52d1ec2ed762d7fb3be336ec678569c730b87d66',)
export const SAWON_KLAY = new Token( ChainId.KLAY, '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', 18, 'SAWON', 'SAWON Defi', 'https://scope.klaytn.com/token/0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66?tabId=tokenTransfer',)
export const SAWON_POLYGON = new Token( ChainId.KLAY, '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', 18, 'SAWON', 'SAWON Defi', 'https://polygonscan.com/token/0x52d1ec2ed762d7fb3be336ec678569c730b87d66',)

export const NATIVE_C4EI = new Token( ChainId.C4EI, '0x0000000000000000000000000000000000000000', 18, 'C4EI', 'Crypto4EI', 'https://c4ei.net/',)
export const NATIVE_KLAY = new Token( ChainId.KLAY, '0x0000000000000000000000000000000000000000', 18, 'KLAY', 'KLAYTN', 'https://scope.klaytn.com/',)
export const NATIVE_POLYGON = new Token( ChainId.POLYGON, '0x0000000000000000000000000000000000000000', 18, 'MATIC', 'MATIC', 'https://polygonscan.com/',)
export const NATIVEcOIN = { [ChainId.C4EI]: NATIVE_C4EI, [ChainId.KLAY]: NATIVE_KLAY, }


export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.RINKEBY]: USDC_RINKEBY,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
}

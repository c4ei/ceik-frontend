import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1, RINKEBY = 4, GOERLI = 5,
  BSC = 56, BSC_TESTNET = 97, POLYGON = 137, 
  KLAY = 8217, C4EI = 21004,
}

export enum TradeType { EXACT_INPUT, EXACT_OUTPUT, }

export enum Rounding { ROUND_DOWN, ROUND_HALF_UP, ROUND_UP, }

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
export const FACTORY_ADDRESS_C4EI = '0x4e5fC6941e4cd0ba416275D746999eafC29Cd427'
export const FACTORY_ADDRESS_KLAY = '0xd79f7D4925FAF0a0716B52ae1D3B125f9b788fBb'
export const FACTORY_ADDRESS_POLYGON = '0xA535eb8C8E0DdeF9Bc19fbE3614c44211D8142d8'

// // TODO: ETH This is test version, do not depends on it
const FACTORY_ADDRESS_ETH = '0xD93801d7D3a368D94A3A32E97A20f7aC1948a5dB'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.RINKEBY]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.C4EI]: FACTORY_ADDRESS_C4EI,
  [ChainId.KLAY]: FACTORY_ADDRESS_KLAY,
  [ChainId.POLYGON]: FACTORY_ADDRESS_POLYGON,
}
export const INIT_CODE_HASH      = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
export const INIT_CODE_HASH_C4EI = '0xf043950a40ed5aac5b1781b0fa428c94774454e24f882b1231b6fe05145a1697'
export const INIT_CODE_HASH_KLAY = '0x9900369d60e73c7ee68d54639c24bfd78796ec2e405e629fd893e679bbb80a4f'
export const INIT_CODE_HASH_POLYGON = '0xb30ab953d5193c9c487c51bdddce9b966ffc0e61e169ce33bb36dda5d42da741'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.C4EI]: INIT_CODE_HASH_C4EI,
  [ChainId.KLAY]: INIT_CODE_HASH_KLAY,
  [ChainId.POLYGON]: INIT_CODE_HASH_POLYGON,
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType { uint8 = 'uint8', uint256 = 'uint256', }

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new Token( ChainId.ETHEREUM, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether', 'https://weth.io' ),
  [ChainId.RINKEBY]: new Token( ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether', 'https://weth.io' ),
  [ChainId.GOERLI]: new Token( ChainId.GOERLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether', 'https://weth.io' ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM,'0x418D75f65a02b3D53B2418FB8E1fe493759c7605',18,'WBNB','Wrapped BNB','https://www.binance.org'  ),
  [ChainId.BSC]: new Token(ChainId.BSC,'0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',18,'WBNB','Wrapped BNB','https://www.binance.org'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET,'0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',18,'WBNB','Wrapped BNB','https://www.binance.org'),
  [ChainId.C4EI]: new Token(ChainId.C4EI,'0x83f7AaE73a80e5Ae7Fa4a4948F1CE90f57c638aa',18,'WBNB','Wrapped BNB','https://www.binance.org'),
  [ChainId.KLAY]: new Token(ChainId.KLAY,'0xAb57000f39107eDE71441D54Aa53A22bdCE9F4B9',18,'WBNB','WrappedKLAY','https://c4ei.net'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON,'0x41b02ED26Da14a3CC790B861174Dd4AD02213790',18,'WBNB','WrappedKLAY','https://c4ei.net'),
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM], [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY], [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC], [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.C4EI]: WBNB[ChainId.C4EI],
  [ChainId.KLAY]: WBNB[ChainId.KLAY],
  [ChainId.POLYGON]: WBNB[ChainId.POLYGON],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.RINKEBY]: { name: 'Rinkeby Ether', symbol: 'RIN', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.BSC]: { name: 'Binance Chain Native Token',symbol: 'BNB',decimals: 18,},
  [ChainId.BSC_TESTNET]: {name: 'Binance Chain Native Token',symbol: 'tBNB',decimals: 18,},
  [ChainId.POLYGON]: { name: 'POLYGON Native Token',symbol: 'MATIC',decimals: 18,},
  [ChainId.C4EI]: { name: 'C4EI Native Token',symbol: 'C4EI',decimals: 18,},
  [ChainId.KLAY]: { name: 'KLAY Native Token',symbol: 'KLAY',decimals: 18,},
}

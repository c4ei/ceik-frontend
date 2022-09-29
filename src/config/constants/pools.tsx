import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { bscTokens ,c4einetTokens } from '@pancakeswap/tokens'
import { SerializedPoolConfig, PoolCategory } from './types'
// import useActiveWeb3React from 'hooks/useActiveWeb3React' // 2022-09-29
// import { useActiveChainId } from 'hooks/useActiveChainId' // 2022-09-29
export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake CAKE</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible CAKE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const
// const { chainId } = useActiveChainId()
// const { account, chainId } = useActiveWeb3React() // 2022-09-29
// const { chainId } = useActiveWeb3React()
// console.log(" line 59 /src/config/constants/pools.tsx chainId : "+chainId)
export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    // stakingToken: bscTokens.cake,
    // earningToken: bscTokens.cake,
    stakingToken: c4einetTokens.cake ,
    earningToken: c4einetTokens.cake ,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
      21004: '0xE42642bF6C73B57D614DEBa36B60475A4f63B92D',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 209,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.tusd,
    contractAddress: {
      97: '',
      56: '0xb6e510ae2da1ab4e350f837c70823ab75091780e',
      21004: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5787',
  },  
].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [
  {
    sousId: 287,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.ole,
    contractAddress: {
      56: '0xda6F750be1331963E5772BEe757062f6bddcEA4C',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.2569',
    version: 3,
  },
].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools]

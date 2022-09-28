import NoBscVaultAbi from 'config/abi/NoBscVaultAbi.json'
import { getMasterChefAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { ChainId } from '@pancakeswap/sdk'

// will return BSC or BSC Testnet chainId
export const getC4eiChainId = async (chainId: number) => {
  try {
    if (!chainId) {
      return ChainId.C4EI
    }

    const calls = [
      {
        name: 'C4EI_CHAIN_ID',
        address: getMasterChefAddress(chainId),
      },
    ]
    const [[c4eiChainId]] = await multicallv2({ abi: NoBscVaultAbi, calls, chainId })
    return c4eiChainId
  } catch (error) {
    console.error('Get C4EI Chain Id Error: ', error)
    return ChainId.C4EI
  }
}

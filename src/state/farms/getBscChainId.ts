import NoBscVaultAbi from 'config/abi/NoBscVaultAbi.json'
import { getMasterChefAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { ChainId } from '@pancakeswap/sdk'

// will return BSC or BSC Testnet chainId
export const getBscChainId = async (chainId: number) => {
  try {
    // console.log(" line 9 /src/state/farms/getBscChainId.ts chainId : "+chainId)
    if(chainId===21004){
      return ChainId.C4EI
    } 
    if(chainId===8217){
      return ChainId.KLAY
    }
    if (!chainId) {
      return ChainId.BSC
    }

    const calls = [
      {
        name: 'BSC_CHAIN_ID',
        address: getMasterChefAddress(chainId),
      },
    ]
    const [[bscChainId]] = await multicallv2({ abi: NoBscVaultAbi, calls, chainId })
    // console.log(" line 25 chainId : "+JSON.stringify(chainId))
    return bscChainId
  } catch (error) {
    console.error('Get BSC Chain Id Error: ', error)
    return ChainId.BSC
  }
}

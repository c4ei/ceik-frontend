import { Interface } from '@ethersproject/abi'
import { CallOverrides, Contract } from '@ethersproject/contracts'
import { Provider } from '@ethersproject/providers'
import { ChainId } from '@pancakeswap/sdk'
import multicallAbi from './Multicall.json'

export const multicallAddresses = {
  1: '0xcA11bde05977b3631167028862bE2a173976CA11',
  4: '0xcA11bde05977b3631167028862bE2a173976CA11',
  5: '0xcA11bde05977b3631167028862bE2a173976CA11',
  56: '0xcA11bde05977b3631167028862bE2a173976CA11',
  97: '0xcA11bde05977b3631167028862bE2a173976CA11',
  21004: '0x423A3f11Cfb63E2C29E42E9A7472927F04875fbF',
  8217: '0x8B1E3726cF47A290fC5782c22dd6F15585EE363B',
}

export const getMulticallContract = (chainId: ChainId, provider) => {
  // if(chainId==56){chainId=21004}
  // console.log(" line 17 /packages/multicall/index.ts getMulticallContract : "+JSON.stringify(chainId) +" : if(chainId==56){chainId=21004} hardcoding ###")
  if (multicallAddresses[chainId]) {
    return new Contract(multicallAddresses[chainId], multicallAbi, provider)
  }
  return null
}

export interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (example: balanceOf)
  params?: any[] // Function params
}

export interface MulticallOptions extends CallOverrides {
  requireSuccess?: boolean
}

/**
 * Multicall V2 uses the new "tryAggregate" function. It is different in 2 ways
 *
 * 1. If "requireSuccess" is false multicall will not bail out if one of the calls fails
 * 2. The return includes a boolean whether the call was successful e.g. [wasSuccessful, callResult]
 */
interface MulticallV2Params {
  abi: any[]
  calls: Call[]
  chainId?: ChainId
  options?: MulticallOptions
  provider?: Provider
}

export interface CallV3 extends Call {
  abi: any[]
  allowFailure?: boolean
}

interface MulticallV3Params {
  calls: CallV3[]
  chainId?: ChainId
  allowFailure?: boolean
  overrides?: CallOverrides
}

export type MultiCallV2 = <T = any>(params: MulticallV2Params) => Promise<T>
export type MultiCall = <T = any>(abi: any[], calls: Call[], chainId?: ChainId) => Promise<T>
// console.log(" line 61 /packages/multicall/index.ts MultiCallV2 : "+JSON.stringify(MultiCall))
export function createMulticall<TProvider>(provider: ({ chainId }: { chainId?: number | undefined }) => TProvider) {
  const multicall: MultiCall = async (abi: any[], calls: Call[], 
    chainId?: ChainId
    // chainId = ChainId.BSC
    ) => {
    const multi = getMulticallContract(chainId, provider({ chainId }))
    if (!multi) throw new Error(`Multicall Provider missing for ${chainId}`)
    const itf = new Interface(abi)

    const calldata = calls.map((call) => ({
      target: call.address.toLowerCase(),
      callData: itf.encodeFunctionData(call.name, call.params),
    }))
    const { returnData } = await multi.callStatic.aggregate(calldata)

    const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

    return res as any
  }

  const multicallv2: MultiCallV2 = async ({ abi, calls, 
    // chainId = ChainId.BSC, 
    chainId = ChainId.C4EI, 
    options, provider: _provider }) => {
    const { requireSuccess = true, ...overrides } = options || {}
    const multi = getMulticallContract(chainId, _provider || provider({ chainId }))
    if (!multi) throw new Error(`Multicall Provider missing for ${chainId}`)
    const itf = new Interface(abi)

    const calldata = calls.map((call) => ({
      target: call.address.toLowerCase(),
      callData: itf.encodeFunctionData(call.name, call.params),
    }))

    const returnData = await multi.callStatic.tryAggregate(requireSuccess, calldata, overrides)
    const res = returnData.map((call, i) => {
      const [result, data] = call
      return result ? itf.decodeFunctionResult(calls[i].name, data) : null
    })

    return res as any
  }

  const multicallv3 = async ({ calls, 
    // chainId = ChainId.BSC, 
    chainId = ChainId.C4EI, 
    allowFailure, overrides }: MulticallV3Params) => {
    const multi = getMulticallContract(chainId, provider({ chainId }))
    if (!multi) throw new Error(`Multicall Provider missing for ${chainId}`)
    const _calls = calls.map(({ abi, address, name, params, allowFailure: _allowFailure }) => {
      const contract = new Contract(address, abi)
      const callData = contract.interface.encodeFunctionData(name, params ?? [])
      if (!contract[name]) console.error(`${name} missing on ${address}`)
      return {
        target: address,
        allowFailure: allowFailure || _allowFailure,
        callData,
      }
    })

    const result = await multi.callStatic.aggregate3([...[_calls], ...(overrides ? [overrides] : [])])

    return result.map((call, i) => {
      const { returnData, success } = call
      if (!success || returnData === '0x') return null
      const { address, abi, name } = calls[i]
      const contract = new Contract(address, abi)
      const decoded = contract.interface.decodeFunctionResult(name, returnData)
      return decoded
    })
  }

  return {
    multicall,
    multicallv2,
    multicallv3,
  }
}

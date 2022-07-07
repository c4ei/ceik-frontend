import useSWRImmutable from 'swr/immutable'
import { getMasterChefAddress } from 'utils/addressHelpers'
import multicall from 'utils/multicall'
import masterchefABI from 'config/abi/masterchef.json'
import { getBalanceAmount } from 'utils/formatBalance'
import { ethersToBigNumber } from 'utils/bigNumber'
import { FARM_API } from 'config/constants/endpoints'
import { updateFarmsPublicData } from 'state/farms'
import { useAppDispatch } from 'state'

export const useMasterChefInfo = () => {
  return useSWRImmutable(
    ['masterChef'],
    async () => {
      const masterChefAddress = getMasterChefAddress()
      const calls = [
        {
          address: masterChefAddress,
          name: 'poolLength',
        },
        {
          address: masterChefAddress,
          name: 'cakePerBlock',
          params: [true],
        },
      ]
      const [[poolLength], [cakePerBlockRaw]] = await multicall(masterchefABI, calls)
      const regularCakePerBlock = getBalanceAmount(ethersToBigNumber(cakePerBlockRaw))

      return {
        poolLength: poolLength.toNumber(),
        regularCakePerBlock: regularCakePerBlock.toNumber(),
      }
    },
    {
      refreshInterval: 60 * 1000,
    },
  )
}

export const useMasterChefFarmsApi = () => {
  const dispatch = useAppDispatch()

  return useSWRImmutable(
    ['publicFarmsData'],
    async () => {
      const data = await fetch(FARM_API).then((res) => res.json())
      dispatch(updateFarmsPublicData(data))
      return data
    },
    {
      onError(err) {
        console.error(err)
      },
      refreshInterval: 60 * 1000,
    },
  )
}

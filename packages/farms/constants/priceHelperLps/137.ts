import { polygonTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

// const priceHelperLps: SerializedFarmConfig[] = []
const priceHelperLps: SerializedFarmConfig[] = [
  {
    // pid: null,
    pid: 0,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddress: '0x4f4d09C4F495A901F20581b6e4b0259FDdbdFCc7',
    quoteToken: polygonTokens.cake,
    token: polygonTokens.busd,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps

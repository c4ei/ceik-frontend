import { c4einetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

// const priceHelperLps: SerializedFarmConfig[] = []
const priceHelperLps: SerializedFarmConfig[] = [
  {
    // pid: null,
    pid: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddress: '0xcbF93E0Aa7ea4fA2cF90627E473857cFF4CC8B9D',
    quoteToken: c4einetTokens.cake,
    token: c4einetTokens.busd,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps

import { SerializedFarmConfig } from '@pancakeswap/farms'
import { polygonTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_POLYGON } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0, // 
    lpSymbol: 'CAKE',
    lpAddress: '0x4Ac3ea82DA31655BbC2318f26B38C917f09BA31d',
    token: polygonTokens.cake,
    quoteToken: polygonTokens.cake,
  },
  {
    pid: 1,
    v1pid: 1, // 
    lpSymbol: 'BUSD-BNB LP',
    lpAddress: '0xf91B1B3a6b7a934B645cE203317B545202538E23',
    token: polygonTokens.busd,
    quoteToken: polygonTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2, // 
    lpSymbol: 'CAKE-BNB LP',
    lpAddress: CAKE_BNB_LP_POLYGON,
    token: polygonTokens.cake,
    quoteToken: polygonTokens.wbnb,
    boosted: true,
  },
  {
    // LP가시럽인지 lp 어드레스인지 확인 필요
    pid: 3,
    v1pid: 4, // 
    lpSymbol: 'CAKE-BUSD LP',
    lpAddress: '0x4f4d09C4F495A901F20581b6e4b0259FDdbdFCc7',
    boosted: true,
    token: polygonTokens.cake,
    quoteToken: polygonTokens.busd,
  },


].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms

import { SerializedFarmConfig } from '@pancakeswap/farms'
import { polygonTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_POLYGON } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69 : CAKE
    lpSymbol: 'CAKE',
    lpAddress: '0x4Ac3ea82DA31655BbC2318f26B38C917f09BA31d',
    token: polygonTokens.cake,
    quoteToken: polygonTokens.cake,
  },
  {
    pid: 1,
    // pid: 3,
    v1pid: 1, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0x45732739B1E47821A625aF3d8F818A1DBf6c1B65 : BUSD-WBNB
    lpSymbol: 'BUSD-BNB LP',
    lpAddress: '0x45732739B1E47821A625aF3d8F818A1DBf6c1B65',
    token: polygonTokens.busd,
    quoteToken: polygonTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0xdF9f91651fb6530e34B9c7A594c7FcD5F77c00e0 : CAKE-WBNB
    lpSymbol: 'CAKE-BNB LP',
    lpAddress: CAKE_BNB_LP_POLYGON,
    token: polygonTokens.cake,
    quoteToken: polygonTokens.wbnb,
    boosted: true,
  },
  {
    // LP가시럽인지 lp 어드레스인지 확인 필요
    pid: 3,
    v1pid: 4, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0xcbF93E0Aa7ea4fA2cF90627E473857cFF4CC8B9D : Cake-BUSD
    lpSymbol: 'CAKE-BUSD LP',
    lpAddress: '0xcbF93E0Aa7ea4fA2cF90627E473857cFF4CC8B9D',
    boosted: true,
    token: polygonTokens.cake,
    quoteToken: polygonTokens.busd,
  },


].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms

import { SerializedFarmConfig } from '@pancakeswap/farms'
import { c4einetTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_C4EI } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'CAKE',
    lpAddress: '0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69',
    token: c4einetTokens.syrup,
    quoteToken: c4einetTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddress: CAKE_BNB_LP_C4EI,
    token: c4einetTokens.cake,
    quoteToken: c4einetTokens.wbnb,
    boosted: true,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddress: '0x45732739B1E47821A625aF3d8F818A1DBf6c1B65',
    token: c4einetTokens.busd,
    quoteToken: c4einetTokens.wbnb,
  },
  {
    pid: 39,
    v1pid: 389,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddress: '0xcbF93E0Aa7ea4fA2cF90627E473857cFF4CC8B9D',
    boosted: true,
    token: c4einetTokens.cake,
    quoteToken: c4einetTokens.busd,
  },

  // {
  //   pid: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddress: '0xa96818CA65B57bEc2155Ba5c81a70151f63300CD',
  //   token: c4einetTokens.cake,
  //   quoteToken: c4einetTokens.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BNB-BUSD LP',
  //   lpAddress: '0x4E96D2e92680Ca65D58A0e2eB5bd1c0f44cAB897',
  //   token: c4einetTokens.wbnb,
  //   quoteToken: c4einetTokens.busd,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddress: '0xd1742b5eC6798cEB8C791e0ebbEf606A4946f67E',
  //   token: c4einetTokens.usdc, // coins[0]
  //   quoteToken: c4einetTokens.busd, // coins[1]
  //   stableSwapAddress: '0x1288026D2c5a76A5bfb0730F615131A448f4Ad06',
  //   infoStableSwapAddress: '0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546',
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms

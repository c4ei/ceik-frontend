import { SerializedFarmConfig } from '@pancakeswap/farms'
import { c4einetTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_C4EI } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    // v1pid: 0,     --> MasterChefV1(56:0x73feaa1ee314f8c655e354234017be2193c9e24e) -> 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82 : CAKE
    v1pid: 0, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69 : CAKE
    lpSymbol: 'CAKE',
    // 0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69 fail : execution reverted: CAKE token can't be added to farm pools
    // lpAddress: '0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69',
    lpAddress: '0x4Ac3ea82DA31655BbC2318f26B38C917f09BA31d',
    token: c4einetTokens.cake,
    quoteToken: c4einetTokens.cake,
  },
  {
    pid: 1,
    // pid: 3,
    // v1pid: 252,   --> MasterChefV1(56:0x73feaa1ee314f8c655e354234017be2193c9e24e) -> 0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16 : BUSD-WBNB
    v1pid: 1, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0x45732739B1E47821A625aF3d8F818A1DBf6c1B65 : BUSD-WBNB
    lpSymbol: 'BUSD-BNB LP',
    lpAddress: '0x45732739B1E47821A625aF3d8F818A1DBf6c1B65',
    token: c4einetTokens.busd,
    quoteToken: c4einetTokens.wbnb,
  },
  {
    pid: 2,
    // v1pid: 251,   --> MasterChefV1(56:0x73feaa1ee314f8c655e354234017be2193c9e24e) -> 0x0eD7e52944161450477ee417DE9Cd3a859b14fD0 : CAKE-WBNB
    v1pid: 2, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0xdF9f91651fb6530e34B9c7A594c7FcD5F77c00e0 : CAKE-WBNB
    lpSymbol: 'CAKE-BNB LP',
    lpAddress: CAKE_BNB_LP_C4EI,
    token: c4einetTokens.cake,
    quoteToken: c4einetTokens.wbnb,
    boosted: true,
  },
  {
    // LP가시럽인지 lp 어드레스인지 확인 필요
    pid: 3,
    // pid: 39,
    // v1pid: 389,   --> MasterChefV1(56:0x73feaa1ee314f8c655e354234017be2193c9e24e) -> 0x804678fa97d91B974ec2af3c843270886528a9E6 : Cake-BUSD
    //취소 v1pid: 3, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0xABB8a013F21a491C2e35d143A31FB708499A92c0 : SyrupBar
    v1pid: 4, //  --> MasterChefV1(21004:0xcb84554353aae0347235Dd80404197593d50D12a) -> 0xcbF93E0Aa7ea4fA2cF90627E473857cFF4CC8B9D : Cake-BUSD
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

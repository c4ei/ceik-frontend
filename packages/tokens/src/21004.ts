import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_C4EI, CAKE_C4EI } from './common'

export const c4einetTokens = {
  wbnb: WBNB[ChainId.C4EI],
  cake: CAKE_C4EI,
  busd: BUSD_C4EI,
  syrup: new Token( ChainId.C4EI, '0xABB8a013F21a491C2e35d143A31FB708499A92c0',
    18, 'SYRUP', 'SyrupBar Token', 'https://swap.c4ei.net/', ),
  eth: new Token( ChainId.C4EI, '0xD7D1F3448c6979041de1Ac136a74394aDd746ff0',
    18, 'wETH', 'w Ether', 'https://swap.c4ei.net/', ),
  // bake: new Token(ChainId.C4EI, '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5', 18, 'BAKE', 'Bakeryswap Token', 'https://www.bakeryswap.org/', ),
  // hbtc: new Token(ChainId.C4EI, '0x3Fb6a6C06c7486BD194BB99a078B89B9ECaF4c82', 18, 'HBTC', 'Huobi BTC'),
  // wbtc: new Token(ChainId.C4EI, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 8, 'WBTC', 'Wrapped BTC'),
  // usdc: new Token(ChainId.C4EI,'0x2fB98DCc527c1403F92c6Bed05a50725d3005636',18,'USDC','Binance-Peg USD Coin',),
}

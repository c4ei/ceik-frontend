import { ChainId, Token, WBNB } from '@pancakeswap/sdk'
import { BUSD_KLAY, CAKE_KLAY } from './common'

export const klayTokens = {
  wbnb: WBNB[ChainId.KLAY],
  cake: CAKE_KLAY,
  busd: BUSD_KLAY,
  alba: new Token( ChainId.KLAY, '0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5', 18, 'ALBA', 'AlbaDefi', 'https://scope.klaytn.com/token/0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5', ),
  ceik: new Token( ChainId.KLAY, '0x18814b01b5cc76f7043e10fd268cc4364df47da0', 18, 'CEIK', 'c4ei.net 4 klay', 'https://scope.klaytn.com/token/0x18814b01b5cc76f7043e10fd268cc4364df47da0', ),
  kslp: new Token( ChainId.KLAY, '0x8397c2a6de070037a86038c7537ee0ef012cf017', 18, 'KSLP', 'KLAY-ALBA LP', 'https://scope.klaytn.com/token/0x8397c2a6de070037a86038c7537ee0ef012cf017', ),
  // syrup: new Token( ChainId.C4EI, '0xABB8a013F21a491C2e35d143A31FB708499A92c0',18, 'SYRUP', 'SyrupBar Token', 'https://swap.c4ei.net/', ),
  // eth: new Token( ChainId.KLAY, '0xD7D1F3448c6979041de1Ac136a74394aDd746ff0',18, 'wETH', 'w Ether', 'https://swap.c4ei.net/', ),
  // bake: new Token(ChainId.C4EI, '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5', 18, 'BAKE', 'Bakeryswap Token', 'https://www.bakeryswap.org/', ),
  // hbtc: new Token(ChainId.C4EI, '0x3Fb6a6C06c7486BD194BB99a078B89B9ECaF4c82', 18, 'HBTC', 'Huobi BTC'),
  // wbtc: new Token(ChainId.C4EI, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 8, 'WBTC', 'Wrapped BTC'),
  // usdc: new Token(ChainId.C4EI,'0x2fB98DCc527c1403F92c6Bed05a50725d3005636',18,'USDC','Binance-Peg USD Coin',),
}

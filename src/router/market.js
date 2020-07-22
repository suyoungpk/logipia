import Default from '@/components/common/Default'
import Eqip from '@/components/market/Eqip'
import EqipDtl from '@/components/market/EqipDtl'
import MarketList from '@/components/market/List'
import MarketDtl from '@/components/market/Detail'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'market/list', name: 'list', component: MarketList},
      {path: 'market/detail', name: 'detail', component: MarketDtl},
      {path: 'market/eqip', name: 'eqip', component: Eqip},
      {path: 'market/eqipDtl', name: 'eqipDtl', component: EqipDtl}
    ]
  }
]

export default router

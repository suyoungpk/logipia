import Default from '@/components/common/Default'
import P2pMarketList from '@/components/p2p-market/P2pMarketList'
import P2pMarketDetail from '@/components/p2p-market/P2pMarketDetail'
import P2pMarketAdd from '@/components/p2p-market/P2pMarketAdd'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'p2p-market', name: 'P2pMarketList', component: P2pMarketList},
      {path: 'p2p-market/add', name: 'P2pMarketAdd', component: P2pMarketAdd}, // 추후 변경
      {path: 'p2p-market/:id', name: 'P2pMarketDetail', component: P2pMarketDetail},
    ]
  }
]

export default router

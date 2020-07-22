import Default from '@/components/common/Default'
import History from '@/components/intro/History'
import Intro from '@/components/intro/Intro'
import Credo from '@/components/intro/Credo'
import Place from '@/components/intro/Place'
import Vod from '@/components/intro/Vod'
// 신규
import CompanyIntro from '@/components/intro/CompanyIntro'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'intro/history', name: 'history', component: History},
      {path: 'intro/credo', name: 'credo', component: Credo},
      {path: 'intro/intro', name: 'intro', component: Intro},
      {path: 'intro/place', name: 'place', component: Place},
      {path: 'intro/vod', name: 'vod', component: Vod},
      // 신규
      {path: 'intro/companyIntro', name: 'companyIntro', component: CompanyIntro}
    ]
  }
]

export default router

import Default from '@/components/common/Default'
import Privacy from '@/components/help/Privacy'
import Media from '@/components/help/Media'
import Error from '@/components/help/Error'
import UseTerm from '@/components/help/UseTerm'
import Guide from '@/components/help/Guide'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'help/privacy', name: 'Privacy', component: Privacy},
      {path: 'help/media', name: 'Media', component: Media},
      {path: 'help/user-term', name: 'UseTerm', component: UseTerm},
      {path: 'help/Error', name: 'Error', component: Error},
      {path: 'help/Guide', name: 'Guide', component: Guide} //디자인가이드
    ]
  }
]

export default router

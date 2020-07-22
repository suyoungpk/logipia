import Default from '@/components/common/Default'
import Status from '@/components/StatusP4'
import Main from '@/components/common/Main'
import NotFound from '@/components/common/NotFound'
import Landing from '@/components/Landing'


const router = [
  {
    path: '/',
    component: Landing
  },{
    path: '/',
    component: Default,
    children: [
      {path: '/status', name: 'status', component: Status}, // 페이지 확인용
      {path: '/main', name: 'main', component: Main},
      {path: 'main', redirect: { name: 'main' }}
    ]
  },
  { path: '*', component: NotFound }
]

export default router

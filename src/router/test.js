import Default from '@/components/common/Default'
import test01 from '@/components/test/test'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'test/test01', name: 'test01', component: test01}
    ]
  }
]

export default router

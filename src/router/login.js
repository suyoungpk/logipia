import Default from '@/components/common/Default'
import Test from '@/components/test/test'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'test', name: 'test', component: Test}
    ]
  }
]

export default router

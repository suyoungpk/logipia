import Default from '@/components/common/Default'
import Part from '@/components/parts/Part'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'parts/part', name: 'part', component: Part}
    ]
  }
]

export default router

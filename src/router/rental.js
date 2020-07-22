import Default from '@/components/common/Default'
import Rent from '@/components/rental/Rent'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'rental/rent', name: 'rent', component: Rent}
    ]
  }
]

export default router

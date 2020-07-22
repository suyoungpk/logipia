import Default from '@/components/common/Default'
import Rental from '@/components/product/Rental'
import SmartLease from '@/components/product/SmartLease'
import Sales from '@/components/product/Sales'
import DoosanCareService from '@/components/product/DoosanCareService'
import PaidService from '@/components/product/PaidService'
import LogipiaUsedList from '@/components/product/LogipiaUsedList'
import LogipiaUsedDetail from '@/components/product/LogipiaUsedDetail'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'product/rental', name: 'Rental', component: Rental},
      {path: 'product/smart-lease', name: 'SmartLease', component: SmartLease},
      {path: 'product/sales', name: 'Sales', component: Sales},
      {path: 'product/sales/:menu', name: 'Sales', component: Sales, props: (route) => ({name: route.params.menu})},
      {path: 'product/doosan-care-service', name: 'DoosanCareService', component: DoosanCareService},
      {path: 'product/paid-service', name: 'PaidService', component: PaidService},
      {path: 'product/logipia-used', name: 'LogipiaUsedList', component: LogipiaUsedList},
      {path: 'product/logipia-used/:eqipId', name: 'LogipiaUsedDetail', component: LogipiaUsedDetail, props: (route) => ({eqipId: route.params.eqipId})}
    ]
  }
]

export default router

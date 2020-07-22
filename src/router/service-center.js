import Default from '@/components/common/Default'
import NoticeList from '@/components/service-center/NoticeList'
import NoticeDetail from '@/components/service-center/NoticeDetail'
import Faq from '@/components/service-center/Faq'
import EventList from '@/components/service-center/EventList'
import EventDetail from '@/components/service-center/EventDetail'
import ConsultAdd from '@/components/service-center/ConsultAdd'
import ConsultList from '@/components/service-center/ConsultList'
import ConsultDetail from '@/components/service-center/ConsultDetail'
import Network from '@/components/service-center/Network'
import Reference from '@/components/service-center/Reference'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'service-center/notice', name: 'NoticeList', component: NoticeList},
      {path: 'service-center/notice/:id', name: 'NoticeDetail', component: NoticeDetail},
      {path: 'service-center/faq', name: 'Faq', component: Faq},
      {path: 'service-center/event', name: 'EventList', component: EventList},
      {path: 'service-center/event/:id', name: 'EventDetail', component: EventDetail},
      {path: 'service-center/consult-add', name: 'ConsultAdd', component: ConsultAdd},
      {path: 'service-center/consult-list', name: 'ConsultList', component: ConsultList},
      {path: 'service-center/consult/:id', name: 'ConsultDetail', component: ConsultDetail},
      {path: 'service-center/network', name: 'Network', component: Network},
      {path: 'service-center/reference', name: 'Reference', component: Reference}
    ]
  }
]

export default router

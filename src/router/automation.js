import Default from '@/components/common/Default'
import Agf from '@/components/automation/Agf'
import CompactExcavators from '@/components/automation/CompactExcavators'
// import CompactE20 from '@/components/automation/CompactE20'
// import CompactE35 from '@/components/automation/CompactE35'
import Cobots from '@/components/automation/Cobots'
// import CobotsAcc from '@/components/automation/CobotsAcc'
// import CobotsModule from '@/components/automation/CobotsModule'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      { path: '/automation-and-industrial/AGF', name: 'Agf', component: Agf },
      { path: '/automation-and-industrial/compact-excavators', name: 'CompactExcavators', component: CompactExcavators },
      // { path: '/automation-and-industrial/compact-e20', name: 'CompactE20', component: CompactE20 },
      // { path: '/automation-and-industrial/compact-e35', name: 'CompactE35', component: CompactE35 },
      { path: '/automation-and-industrial/cobots', name: 'Cobots', component: Cobots }
      // { path: '/automation-and-industrial/cobots-acc', name: 'CobotsAcc', component: CobotsAcc },
      // { path: '/automation-and-industrial/cobots-module', name: 'CobotsModule', component: CobotsModule }
    ]
  }
]

export default router

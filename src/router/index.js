import Vue from 'vue'
import Router from 'vue-router'

import serviceCenter from './service-center'
import common from './common'
import help from './help'
import intro from './intro'
import login from './login'
// import market from './market'
import member from './member'
// import patrs from './parts'
// import rental from './rental'
// import service from './service'
import product from './product'
import automation from './automation'
import p2pMarket from './p2p-market'
import test from './test'
Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: 'history',
  routes: common
})

router.reload = () => {
  router.addRoutes(serviceCenter)
  router.addRoutes(help)
  router.addRoutes(intro)
  router.addRoutes(login)
  // router.addRoutes(market)
  router.addRoutes(member)
  // router.addRoutes(patrs)
  // router.addRoutes(rental)
  // router.addRoutes(service)
  router.addRoutes(product)
  router.addRoutes(automation)
  router.addRoutes(p2pMarket)
  router.addRoutes(test)
}
router.reload()

export default router

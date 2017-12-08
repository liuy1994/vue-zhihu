import Vue from 'vue'
import Router from 'vue-router'
import Zhihu from '../components/Zhihu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Zhihu',
      component: Zhihu
    }
  ]
})

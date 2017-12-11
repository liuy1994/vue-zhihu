import Vue from 'vue'
import Router from 'vue-router'
import Zhihu from '../components/Zhihu'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Zhihu',
      component: Zhihu
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})

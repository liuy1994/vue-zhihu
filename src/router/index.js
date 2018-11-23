import Vue from 'vue'
import Router from 'vue-router'
import Zhihu from '../components/Zhihu'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Zhihu',
      component: Zhihu
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

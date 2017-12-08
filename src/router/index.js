import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Zhihu from '../components/Zhihu'
// import Topbar from 'components/Topbar'
// import Download from 'components/Download'
// import Content from 'components/Content'
// import Footer from 'components/Footer'
// import Upupup from 'components/Upupup'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Zhihu',
      component: Zhihu
    }
    // {
    //   path: '/topbar',
    //   name: 'Topbar',
    //   component: Topbar
    // },
    // {
    //   path: '/download',
    //   name: 'Download',
    //   component: Download
    // },
    // {
    //   path: '/content',
    //   name: 'Content',
    //   component: Content
    // },
    // {
    //   path: '/footer',
    //   name: 'Footer',
    //   component: Footer
    // },
    // {
    //   path: '/upupup',
    //   name: 'Upupup',
    //   component: Upupup
    // }
  ]
})

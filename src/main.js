// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

var ajax = new XMLHttpRequest

ajax.onreadystatechange = function(res){
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(JSON.parse(ajax.responseText))
        console.log('成功')
    }
}

ajax.open('GET','/api/4/news/latest')

ajax.send()


console.log(123)
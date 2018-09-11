// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import elementUI from 'element-ui'
import elementUI from './element'
import filters from './filters'
import directives from './directives'
import components from './components'
import api from './api/install'
// import 'element-ui/lib/theme-chalk/index.css'
// import './element/theme/index.scss'
import './lib/animate.css'

Vue.use(api)
Vue.config.productionTip = false
filters.init()
directives.init()
components.init()
elementUI.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

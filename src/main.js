// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import initFilters from './filters'
// import 'element-ui/lib/theme-chalk/index.css'
import './element/theme/index.scss'
import './lib/animate.css'

Vue.use(elementUI)
Vue.config.productionTip = false
initFilters()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

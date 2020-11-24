// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import elementUI from './element'
import filters from './filters'
import directives from './directives'
import components from './components'
import api from './api/install'
import '../static/lib/animate.css'

const app = createApp(App)

app.use(api)
filters.init(app)
directives.init(app)
components.init(app)
elementUI.init(app)

/* eslint-disable no-new */
app.mount({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

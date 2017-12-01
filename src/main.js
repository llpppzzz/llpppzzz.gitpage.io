import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './lib/animate.css'

import App from './App.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);

//引入路由配置文件
import routes from '../config/routes'

//引入过滤器
import * as filters from './filters/filters.js'

Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});

// 使用配置文件规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: routes
});

const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app');

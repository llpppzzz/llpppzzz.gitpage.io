import Vue from 'vue'
import Router from 'vue-router'
// 加载模板文件
import tuanzi from '../page/tuanzi.vue'
import home from '../page/home.vue'
import vueRouter from '../page/vueRouter/vueRouter.vue'
import listDetails from '../page/vueRouter/listDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/vueRouter',
      component: vueRouter,
      children: [
        {
          path: 'listDetails/:id',
          name: 'listDetails',
          component: listDetails
        },
      ]
    },
    {
      path: '/tuanzi',
      component: tuanzi
    }
  ]
})

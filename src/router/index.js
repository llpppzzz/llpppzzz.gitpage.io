import Vue from 'vue'
import Router from 'vue-router'
// 加载模板文件
import tuanzi from 'page/tuanzi.vue'
import home from 'page/home.vue'
import vueRouter from 'page/vueRouter/vueRouter.vue'
import vueTest from 'page/vuexTest.vue'
import listDetails from 'page/vueRouter/listDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/vueRouter',
      name: 'vueRouter',
      component: vueRouter,
      children: [
        {
          path: 'listDetails/:id',
          name: 'listDetails',
          component: listDetails
        }
      ]
    },
    {
      path: '/vuexTest',
      component: vueTest,
      children: []
    },
    {
      path: '/tuanzi',
      component: tuanzi
    }
  ]
})

// 加载模板文件
import main from 'page/main.vue'
import login from 'page/login'
import test from 'page/test/test.vue'
import tuanzi from 'page/album/tuanzi/tuanzi.vue'
import waterfall from 'page/album/waterfall/waterfall.vue'
import home from 'page/home/home.vue'
import vueTest from 'page/function/vuexTest.vue'
import wmTest from 'page/wmTest/userInfo.vue'
import parent from 'page/function/communication/parent.vue'

export default [
  {
    path: '/',
    title: '首页',
    component: main,
    redirect: '/home/index'
  },
  {
    path: '/login',
    name: 'login',
    title: '登录',
    // meta: {
    //   auth: false
    // },
    component: login
  },
  {
    path: '/home',
    title: '首页',
    component: main,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'home_index',
        component: home
      }
    ]
  },
  {
    path: '/function',
    title: '功能',
    component: main,
    redirect: '/function/vuexTest',
    children: [
      {
        path: 'vuexTest',
        name: 'vuexTest',
        component: vueTest
      },
      {
        path: 'communication/parent',
        name: 'parent',
        component: parent
      }
    ]
  },
  {
    path: '/album',
    title: '团子',
    component: main,
    redirect: '/album/tuanzi',
    children: [
      {
        path: 'tuanzi',
        name: 'tuanzi',
        component: tuanzi
      },
      {
        path: 'waterfall',
        name: 'waterfall',
        component: waterfall
      }
    ]
  },
  {
    path: '/test',
    title: '测试',
    component: main,
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        name: 'test',
        component: test
      },
      {
        path: 'wmTest',
        name: 'wmTest',
        component: wmTest
      }
    ]
  }
]

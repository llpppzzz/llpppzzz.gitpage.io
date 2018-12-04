import Main from '../page/main'
import loader from './loader'

export default [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    meta: {
      show: false
    },
    component: loader('login')
  },
  {
    path: '/home',
    name: 'home',
    title: '首页',
    meta: {
      icon: 'el-icon-home'
    },
    component: Main,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'home_index',
        component: loader('home/home')
      }
    ]
  },
  {
    path: '/function',
    title: '功能',
    meta: {
      icon: 'el-icon-menu'
    },
    component: Main,
    redirect: '/function/vuexTest',
    children: [
      {
        path: 'vuexTest',
        name: 'vuexTest',
        component: loader('function/vuexTest')
      },
      {
        path: 'communication/parent',
        name: 'parent',
        component: loader('function/communication/parent')
      }
    ]
  },
  {
    path: '/album',
    title: '团子',
    meta: {
      icon: 'el-icon-star-on'
    },
    component: Main,
    redirect: '/album/tuanzi',
    children: [
      {
        path: 'tuanzi',
        name: 'tuanzi',
        component: loader('album/tuanzi/tuanzi')
      },
      {
        path: 'waterfall',
        name: 'waterfall',
        component: loader('album/waterfall/waterfall')
      }
    ]
  },
  {
    path: '/nebulas',
    title: '星云链',
    meta: {
      icon: 'el-icon-nebulas'
    },
    component: Main,
    redirect: '/nebulas/index',
    children: [
      {
        path: 'index',
        name: 'nebulas',
        component: loader('nebulas/nebulas')
      }
    ]
  },
  {
    path: '/test',
    title: '测试',
    meta: {
      icon: 'el-icon-setting'
    },
    component: Main,
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        name: 'test',
        component: loader('test/test')
      }
    ]
  }
]

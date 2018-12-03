import loader from './loader'

export default [
  {
    path: '/',
    title: '首页',
    component: loader('main'),
    redirect: '/home/index'
  },
  {
    path: '/login',
    name: 'login',
    title: '登录',
    // meta: {
    //   auth: false
    // },
    component: loader('login')
  },
  {
    path: '/home',
    title: '首页',
    component: loader('main'),
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
    component: loader('main'),
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
    component: loader('main'),
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
    path: '/test',
    title: '测试',
    component: loader('main'),
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        name: 'test',
        component: loader('test/test')
      }
    ]
  },
  {
    path: '/nebulas',
    title: '星云链',
    component: loader('main'),
    redirect: '/nebulas/index',
    children: [
      {
        path: 'index',
        name: 'nebulas',
        component: loader('nebulas/nebulas')
      }
    ]
  }
]

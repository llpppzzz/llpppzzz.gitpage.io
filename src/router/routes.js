// 加载模板文件
import main from 'page/main.vue'
import tuanzi from 'page/tuanzi.vue'
import home from 'page/home/home.vue'
import vueTest from 'page/function/vuexTest.vue'

export default [
  {
    path: '/',
    title: '首页',
    component: main,
    redirect: '/home/index'
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
      }
    ]
  },
  {
    path: '/tuanzi',
    title: '团子',
    component: main,
    redirect: '/tuanzi/tuanziPicture',
    children: [
      {
        path: 'tuanziPicture',
        name: 'tuanzi',
        component: tuanzi
      }
    ]
  }
]

// 加载模板文件
import main from 'page/main.vue'
import test from 'page/test/test.vue'
import tuanzi from 'page/tuanzi/tuanzi.vue'
import home from 'page/home/home.vue'
import vueTest from 'page/function/vuexTest.vue'
import wmTest from 'page/wmTest/userInfo.vue'

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
    redirect: '/tuanzi/index',
    children: [
      {
        path: 'index',
        name: 'tuanzi',
        component: tuanzi
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

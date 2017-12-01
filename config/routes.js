//加载模板文件
import tuanzi from '../src/page/tuanzi.vue'
import home from '../src/page/home.vue'
import vueRouter from '../src/page/vueRouter/vueRouter.vue'
import listDetails from '../src/page/vueRouter/listDetails.vue'

//路由规则设置
export default [
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
//加载模板文件
import tuanzi from '../page/tuanzi.vue'
import home from '../page/home.vue'
import vueRouter from '../page/vueRouter/vueRouter.vue'
import listDetails from '../page/vueRouter/listDetails.vue'

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
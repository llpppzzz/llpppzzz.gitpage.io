//加载模板文件
import tuanzi from '../page/tuanzi.vue'
import home from '../page/home.vue'
import listDetails from '../page/listDetails.vue'
//路由规则设置
export default [
	{
		path: '/',
		component: home
	},
	{
		path: '/listDetails',
		name: 'listDetails',
		component: listDetails
	},
	{
		path: '/tuanzi',
		component: tuanzi
	}
]
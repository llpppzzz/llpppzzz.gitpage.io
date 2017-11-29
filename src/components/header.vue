<template>
	<div class="header-container">
		<header class="header">

			<router-link to="/"><h1 class="h1"></h1></router-link>

			<nav>
				<!--<router-link to="/tuanzi">-->
				<!--<el-button type="primary">团子</el-button>-->
				<!--</router-link>-->
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="" :router="true">
					<el-menu-item index="/tuanzi">团子</el-menu-item>
					<!--<el-submenu index="2">-->
					<!--<template slot="title">我的工作台</template>-->
					<!--<el-menu-item index="2-1">选项1</el-menu-item>-->
					<!--<el-menu-item index="2-2">选项2</el-menu-item>-->
					<!--<el-menu-item index="2-3">选项3</el-menu-item>-->
					<!--</el-submenu>-->
					<el-menu-item index="3">订单管理</el-menu-item>
				</el-menu>
			</nav>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '',
				imgs: [
					{src: '../../static/images/tuanzi.jpg'},
					{src: '../../static/images/tuanzi.jpg'},
					{src: '../../static/images/tuanzi.jpg'},
					{src: '../../static/images/tuanzi.jpg'}
				]
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.header-container {
		height: 100px;
		background-color: #fff;
		color: #fff;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 80px;
		z-index: 100;
		position: relative;
	}

	.header {
		/*width: 1140px;*/
		height: 80px;
		padding: 0 80px;
	}

	.header-container .h1 {
		display: block;
		cursor: pointer;
		float: left;
		height: 80px;
		width: 200px;
		background: url("../../static/images/logo.png") no-repeat;
	}

	.header-container nav {
		float: right;
		height: 80px;
	}

	.header-container nav > .el-menu {
		margin-top: 12px;
	}

	.header-container nav .el-menu--horizontal {
		border-bottom: none;
	}

</style>

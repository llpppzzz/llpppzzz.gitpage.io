<template>
	<header class="header">
		<div class="header-container">
			<h1></h1>
			<nav>
				<router-link class="el-button" to="/tuanzi">
					团子
				</router-link>
				<!--<el-button v-link="/tuanzi">团子</el-button>-->
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
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
	.header{
		height: 80px;
		background-color: #fff;
		color: #fff;
		top: 0;
		left: 0;
		width: 100%;
		line-height: 80px;
		z-index: 100;
		position: relative;
	}
	.header-container{
		width: 1140px;
		height: 80px;
		margin: 0 auto;
		padding: 0;
	}
	.header-container h1{
		float: left;
		height: 80px;
		width: 200px;
		background: url("../../static/images/logo.png") no-repeat;
	}
	.header-container nav{
		float: right;
		height: 80px;
		/*width: 600px;*/
	}
	.header-container nav .el-menu{
		margin-top: 19px;
	}
	.header-container nav .el-button{
		text-decoration: none;
	}

</style>

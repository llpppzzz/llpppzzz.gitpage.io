<template>
	<div id="app">
		<div class="carousel-box">
			<el-carousel indicator-position="outside" height="600px">
				<el-carousel-item v-for="(item, index) in imgs" :key="index">
					<img :src="item.src" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				imgs: [
					{src: '../static/images/dfd.jpg'},
//					{src: '../static/images/dfd.jpg'},
//					{src: '../static/images/dfd.jpg'},
//					{src: '../static/images/dfd.jpg'}
				]
			}
		},
		methods: {
			clickImg: function () {
				console.log('ssss');
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*margin-top: 60px;*/
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.red {
		color: red;
	}

	.el-carousel__item img {
		width: 100%;
	}


</style>

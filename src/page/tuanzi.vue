<template>
	<div class="tuanzi-container">
		<div class="carousel-box">
			<el-carousel indicator-position="outside" height="520px">
				<el-carousel-item v-for="(item, index) in imgs" :key="index">
					<img :src="item.src" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
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
	.tuanzi-container {
		width: 100%;
		height: 80px;
		margin: 0 auto;
		padding: 0;
	}
	.tuanzi-container .el-carousel__item {
		width: 100%;

	}
	.tuanzi-container .el-carousel__item img {
		height: 520px;

	}

</style>

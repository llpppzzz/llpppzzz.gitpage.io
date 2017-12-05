<template>
	<div class="tuanzi-container">
		<el-container>
			<el-aside width="200px">
				<ul class="step-box">
					<li v-for="item in timeLine">
						<span class="date">{{item.date}}</span>
						<span class="describe">{{item.describe}}</span>
					</li>
				</ul>
			</el-aside>
			<el-main>
				<div class="carousel-box">
					<div class="item-box" v-for="(item,index) in imgs">
						<!--<img :src="imgs[0].src" class="animated fadeInRightBig">-->
						<div v-show="showEle[index]" class="grey animated fadeInRightBig"></div>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
    import browser from '../common/browser.js'

    export default {
		data() {
			return {
				aa: false,
				scroll: '',
				timeLine: [
					{
						date: '2017.05.20',
						describe: '团子来啦！'
					},
					{
						date: '2017.05.20',
						describe: '团子来啦！'
					},
					{
						date: '2017.05.20',
						describe: '团子来啦！'
					},
					{
						date: '2017.05.20',
						describe: '团子来啦！'
					},
					{
						date: '2017.05.20',
						describe: '团子来啦！'
					},
					{
						date: '2017.05.20',
						describe: '团子来啦！'
					},
				],
                showEle: [true, false, false, false, false, false],
				imgs: [
					{
						showEle: true,
						src1: '../../static/images/tuanzi.jpg',
						src2: '../../static/images/tuanzi.jpg',
						src3: '../../static/images/tuanzi.jpg',
						src4: '../../static/images/tuanzi.jpg',
						src5: '../../static/images/tuanzi.jpg',
					},
					{
						showEle: false,
						src1: '../../static/images/tuanzi.jpg',
						src2: '../../static/images/tuanzi.jpg',
						src3: '../../static/images/tuanzi.jpg',
						src4: '../../static/images/tuanzi.jpg',
						src5: '../../static/images/tuanzi.jpg',
					},
					{
						showEle: false,
						src1: '../../static/images/tuanzi.jpg',
						src2: '../../static/images/tuanzi.jpg',
						src3: '../../static/images/tuanzi.jpg',
						src4: '../../static/images/tuanzi.jpg',
						src5: '../../static/images/tuanzi.jpg',
					},
					{
						showEle: false,
						src1: '../../static/images/tuanzi.jpg',
						src2: '../../static/images/tuanzi.jpg',
						src3: '../../static/images/tuanzi.jpg',
						src4: '../../static/images/tuanzi.jpg',
						src5: '../../static/images/tuanzi.jpg',
					},
					{
						showEle: false,
						src1: '../../static/images/tuanzi.jpg',
						src2: '../../static/images/tuanzi.jpg',
						src3: '../../static/images/tuanzi.jpg',
						src4: '../../static/images/tuanzi.jpg',
						src5: '../../static/images/tuanzi.jpg',
					},
					{
						showEle: false,
						src1: '../../static/images/tuanzi.jpg',
						src2: '../../static/images/tuanzi.jpg',
						src3: '../../static/images/tuanzi.jpg',
						src4: '../../static/images/tuanzi.jpg',
						src5: '../../static/images/tuanzi.jpg',
					},
				]
			}
		},
		mounted() {
			window.removeEventListener('scroll', this.showPhoto);
			window.addEventListener('scroll', this.showPhoto);
		},
		methods: {
			showPhoto() {
			    let isMobile = browser.isMobile, index;
                this.scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                if(isMobile){
                    index = Number.parseInt((this.scroll+1300)/500);
                    this.showEle.splice(index, 1, true);
                    this.showEle.splice(index, 2, true);
				}else{
                    index = Number.parseInt((this.scroll+499)/500);
				}
                this.showEle.splice(index, 1, true);
			}
		}
	}
</script>

<style lang="less">
	.tuanzi-container {
		margin: 0 auto;
		padding: 0 80px;
		overflow: hidden;

		.carousel-box {
			width: 100%;
			.item-box {
				width: 100%;
				height: 500px;
				img {
					height: 520px;
					float: left;
				}
				.grey {
					height: 220px;
					width: 220px;
					background: grey;
					float: left;
				}
			}
		}
		.el-aside {
			.step-box {
				padding: 20px;
				li {
					height: 500px;
					width: 100%;
					text-align: left;
					text-indent: 30px;
					line-height: 18px;
					position: relative;
					&:before {
						content: ' ';
						display: block;
						height: 10px;
						width: 10px;
						border-radius: 50%;
						border: 3px solid #409EFF;
						position: absolute;
						left: 5px;
						top: 0;
					}
					span.date {
						color: #999;
						line-height: 18px;
					}
					span.describe {
						display: block;
						color: #333;
						line-height: 24px;
						margin-top: 10px;
					}
				}
			}
		}
	}

</style>

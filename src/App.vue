<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!--<h1>{{ msg }}</h1>-->
		<!--<h2>Essential Links</h2>-->
		<!--<ul>-->
		<!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
		<!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
		<!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
		<!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
		<!--</ul>-->
		<!--<h2>Ecosystem</h2>-->
		<!--<ul>-->
		<!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
		<!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
		<!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
		<!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
		<!--</ul>-->
		<ul>
			<li v-for="(item,index) in list" @click="clickHandler(item.id,index)">
				<span :class="{'red': index === currentIndex}">{{item.num}}</span>
			</li>
		</ul>
		<div class="bottom-button">
			<button @click="showDiv()">操作1</button>
			<button>操作2</button>
			<button>操作3</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				list: [
					{
						num: 40,
						id: 1
					},
					{
						num: 40,
						id: 2
					},
					{
						num: 40,
						id: 3
					},
					{
						num: 40,
						id: 4
					},
					{
						num: 40,
						id: 5
					},
					{
						num: 40,
						id: 6
					},
				],
				currentIndex: '',
				currentId: '',
			}
		},
		methods: {
			clickHandler: function (id, index) {
				this.currentId = id;
				this.currentIndex = index;
			},
			showDiv: function () {
				console.log('id:'+this.currentId, 'index:'+this.currentIndex);
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
		margin-top: 60px;
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
</style>

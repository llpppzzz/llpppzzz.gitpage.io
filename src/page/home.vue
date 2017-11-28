<template>
	<div class="home-container">
		<ul>
			<li v-for="(item, index) in list" :key="index">
				<router-link href="" :to="{name: 'listDetails', params: item}">{{item.id}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{id: 222},
					{id: 223},
					{id: 224},
					{id: 225},
					{id: 226}
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


</style>

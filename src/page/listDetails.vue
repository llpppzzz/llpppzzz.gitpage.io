<template>
	<div class="home-container">
		列表id: {{id}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.id
			}
		},
		mounted: function () {
			console.log('id: ' + this.$route.params.id);
		},
		methods: {

		}
	}
</script>

<style>


</style>

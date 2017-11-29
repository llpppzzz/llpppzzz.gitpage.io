<template>
	<div class="list-details-container">
		列表id: {{params.id}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				params: this.$route.params
			}
		},
		mounted: function () {
			console.log(this.$route.params);
		},
		methods: {

		}
	}
</script>

<style>


</style>

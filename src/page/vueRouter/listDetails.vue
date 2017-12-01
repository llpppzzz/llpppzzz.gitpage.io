<template>
	<div class="list-details-container">
		列表id: {{params.id | booleanFilter}}
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

		},
		watch: {
			'$route': function (to, from) {
				this.params = to.params
			}
		}
	}
</script>

<style>


</style>

<template>
  <div class="list-details-container">
    列表id: {{params.id}}
  </div>
</template>

<script>
  import utils from '../../common/utils.js'

  export default {
    data() {
      return {
        params: this.$route.params
      }
    },
    mounted: function () {
      this.params = this.$route.params
      let ddd = {
        a: 2,
        b: 3,
        c: 4
      }
      console.log(utils.param(ddd))
    },
    methods: {},
    watch: {
      '$route': function (to, from) {
        this.params = to.params
      }
    }
  }
</script>

<style>


</style>

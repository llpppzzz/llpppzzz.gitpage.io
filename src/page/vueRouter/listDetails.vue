<template>
  <div class="list-details-container">
    列表id: {{params.id}}
  </div>
</template>

<script>
  import utils from 'common/utils.js'

  export default {
    name: 'list-details-container',
    data () {
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
    computed: {
    },
    watch: {
      '$route': function (to, from) {
        this.params = to.params
      }
    },
    methods: {}
  }
</script>

<style lang="less">


</style>

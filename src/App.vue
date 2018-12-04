<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  @import "style/index";

  html, body {
    height: 100%;
  }

  #app {
    height: 100%
  }

</style>


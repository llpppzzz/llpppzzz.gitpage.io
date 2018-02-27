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

  a {
    color: #42b983;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }


</style>


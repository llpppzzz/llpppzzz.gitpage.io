<template>
  <div id="app">
    <page-header></page-header>
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/header.vue'

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      'page-header': header
    },
    methods: {}
  }
</script>

<style lang="less">
  @import "style/index";

  li {
    display: inline-block;
    margin: 0 10px;
  }

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


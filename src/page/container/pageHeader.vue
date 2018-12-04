<template>
  <div class="page-header">
    <div class="header">
      <router-link to="/"><h1 class="h1"></h1></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '',
        imgs: []
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less">

  .page-header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
    .header {
      /*width: 1140px;*/
      height: 80px;
      padding: 0 80px;
      .h1 {
        display: block;
        cursor: pointer;
        float: left;
        height: 80px;
        width: 200px;
        background: url("/static/images/logo.png") no-repeat;
      }
    }
  }


</style>

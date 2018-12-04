<template>
  <div :class="['mob-side-bar', 'animated', showSideBar ? 'slideInRight' : 'slideOutRight']">
    <div class="mob-side-bar-content">
      <div class="content-header" @click="close"><i class="el-icon-close"></i></div>
      <div class="mob-side-bar-tree">
        <side-bar @selected="close"></side-bar>
      </div>
    </div>
  </div>
</template>

<script>
  import sideBar from './sideBar'

  export default {
    name: 'mob-side-bar',
    components: {
      sideBar
    },
    props: {
      showSideBar: false
    },
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      close () {
        this.$emit('update:showSideBar', false)
      }
    }
  }
</script>

<style lang="less">
  .mob-side-bar {
    background: rgba(0, 0, 0, .5);
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .mob-side-bar-content {
      background: #fff;
      float: right;
      height: 100%;
      width: 200px;
    }
    .content-header {
      font-size: 24px;
      padding: 12px 12px 0 0;
      text-align: right;
    }
    .mob-side-bar-tree {

    }
  }

</style>

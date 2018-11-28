<template>
  <div class="main">
    <el-container>
      <el-header height="80px">
        <page-header></page-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <side-bar></side-bar>
        </el-aside>
        <el-container class="main-container">
          <router-view></router-view>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import header from './container/header.vue'
  import sideBar from './container/sideBar.vue'

  export default {
    name: 'Main',
    components: {
      'page-header': header,
      sideBar
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
    }
  }
</script>

<style lang="less">
  .main {
    .el-header {
      z-index: 100;
      box-shadow: 0 3px 6px 0 rgba(139,164,196,0.2);
    }
    .main-container {
      padding: 24px 0 0 24px
    }
  }

</style>



<template>
  <div class="side-bar">
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      :router="true">
      <el-menu-item index="/">
        <i class="el-icon-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="/album/tuanzi">团子</el-menu-item>
        <el-menu-item index="/album/waterfall">unsplash</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span>测试</span>
        </template>
        <el-menu-item index="/test">
          <span slot="title">功能测试</span>
        </el-menu-item>
        <el-menu-item index="/test/wmTest">
          <span slot="title">财富测试</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'side-bar',
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
  .side-bar {

  }

</style>

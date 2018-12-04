<template>
  <div class="page-header">
    <img src="/static/images/logo.png" class="logo" @click="go('/')">
    <div class="right-menu">
      <el-popover
        placement="bottom"
        width="88"
        trigger="click"
        popper-class="header-menu-popover">
        <side-bar :collapse="true"></side-bar>
        <i class="el-icon-menu2" slot="reference"></i>
      </el-popover>
    </div>
  </div>
</template>

<script>
  import baseMixin from '../../mixin/base'
  import sideBar from './sideBar'

  export default {
    components: {
      sideBar
    },
    mixins: [baseMixin],
    data () {
      return {
        activeIndex: '',
        imgs: []
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .header-menu-popover {
    min-width: 88px;
    .el-menu {
      border: none;
    }
  }

  .page-header {
    position: relative;
    z-index: 100;
    box-shadow: 0 3px 6px 0 rgba(139,164,196,0.2);
    width: 100%;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      cursor: pointer;
      height: 80px;
    }
    .right-menu {
      padding-right: 24px;
      cursor: pointer;
      .el-icon-menu2 {
        font-size: 24px;
      }
    }
  }

</style>

<template>
  <div class="page-header">
    <img src="/static/images/logo.png" class="logo" @click="go('/')">
    <div class="right-menu" @click="showBar">
      <i class="el-icon-menu2"></i>
    </div>
    <mob-side-bar v-if="notFirstRender" :showSideBar.sync="showSideBar"></mob-side-bar>
  </div>
</template>

<script>
  import baseMixin from '../../mixin/base'
  import mobSideBar from './mobSideBar'

  export default {
    components: {
      mobSideBar
    },
    mixins: [baseMixin],
    data () {
      return {
        activeIndex: '',
        showSideBar: false,
        notFirstRender: false
      }
    },
    methods: {
      showBar () {
        this.showSideBar = true
        this.notFirstRender = true
      }
    }
  }
</script>

<style lang="less">
  .page-header {
    position: fixed;
    z-index: 3000;
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
      padding-right: 16px;
      cursor: pointer;
      .el-icon-menu2 {
        font-size: 24px;
      }
    }
    .mob-side-bar {
      //position: ;
    }
  }

</style>

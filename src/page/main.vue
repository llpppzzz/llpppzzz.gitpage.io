<template>
  <div class="main">
    <page-header></page-header>
    <div class="main-bottom">
      <div class="main-side-bar">
        <side-bar></side-bar>
      </div>
      <div class="page-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import pageHeader from './container/pageHeader'
  import sideBar from './container/sideBar'

  export default {
    name: 'Main',
    components: {
      pageHeader,
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
    height: 100%;
    @media (max-width: 768px) {
      .page-header > .page-header-inner {
        padding: 0;
        .logo {
          height: 50px;
        }
      }
      .main-side-bar {
        display: none;
      }
      .page-container {
        margin: 50px 0 0 0;
        padding: 8px;
        width: 100%;
      }
    }
    @media (min-width: 768px) {
      .main-bottom {
        padding: 0 0 0 10px;
      }
      .right-menu {
        display: none;
      }
      .page-container {
        padding: 24px;
        margin: 80px 0 0 200px;
      }
    }
    .main-bottom {
      height: 100%;
      max-width: 1600px;
      margin: 0 auto;
      .main-side-bar {
        flex: none;
        position: fixed;
        top: 80px;
        bottom: 0;
      }
      .page-container {
        min-height: 100%;
        min-width: 320px;
        max-width: 1440px;
      }
    }
  }

</style>



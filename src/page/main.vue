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
      .main-bottom {
        padding: 50px 0 0 0;
      }
      .page-header {
        padding: 0;
        .logo {
          height: 50px;
        }
      }
      .main-side-bar {
        display: none;
      }
      .page-container {
        width: 100%;
      }
    }
    @media (min-width: 768px) {
      .main-bottom {
        padding: 80px 80px 0;
      }
      .right-menu {
        display: none;
      }
    }
    .main-bottom {
      height: 100%;
      display: flex;
      .side-bar {
        flex: none;
      }
      .page-container {
        flex: auto;
        padding: 24px;
      }
    }
  }

</style>



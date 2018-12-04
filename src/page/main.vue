<template>
  <div class="main">
    <page-header></page-header>
    <div class="main-bottom">
      <side-bar></side-bar>
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
    .page-header {
      z-index: 100;
      box-shadow: 0 3px 6px 0 rgba(139,164,196,0.2);
    }
    .main-bottom {
      padding: 0 80px;
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



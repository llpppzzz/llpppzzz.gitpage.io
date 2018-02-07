<template>
  <div class="vuex-test">
    <el-input v-model="pageStatus"></el-input>
    <el-button @click="handleClick">传</el-button>
  </div>
</template>

<script>
  export default {
    name: 'vuex-test',
    data () {
      return {
        pageStatus: ''
      }
    },
    mounted () {
    },
    watch: {
    },
    methods: {
      handleClick () {
        this.$store.commit('assignment', {text: this.pageStatus})
      }
    }
  }
</script>

<style lang="less">
  .vuex-test {
    .el-input {
      width: 200px
    }
  }

</style>

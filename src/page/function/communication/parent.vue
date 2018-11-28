<!--父组件-->
<template>
  <div class="parent">
    <child-one :obj.sync="dataObj" ref="childOne"></child-one>
    <child-two :obj.sync="dataObj" ref="childTwo"></child-two>
    <button @click="getChild">getChild</button>
  </div>
</template>

<script>
  import childOne from './childOne'
  import childTwo from './childTwo'
  export default {
    name: 'parent',
    components: {
      childOne,
      childTwo
    },
    provide () {
      return {
        parentCom: this
      }
    },
    data () {
      return {
        dataObj: {
          text: 'parentMessage'
        }
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
      getChild () {
        this.$refs.childOne.doSomething()
      }
    }
  }
</script>

<style lang="less">


</style>


<!--子组件-->
<template>
  <div class="childOne">
    <span @click="emitEvent">点击更新父组件数据</span>
  </div>
</template>

<script>
  import eventBus from '@/common/eventBus'
  export default {
    name: 'childOne',
    inject: ['parentCom'],
    props: {
      obj: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        childData: {
          text: 'childMessage'
        }
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
      text () {
        return this.$parent.dataObj.text
      }
    },
    watch: {
    },
    methods: {
      emitEvent () {
        // this.$emit('update:obj', this.childData)
        eventBus.$emit('clickEvent', 'childOne to childTwo')
      },
      doSomething () {
        console.log('call by parent')
      }
    }
  }
</script>

<style lang="less">


</style>


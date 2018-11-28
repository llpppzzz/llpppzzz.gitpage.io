<!--子组件2-->
<template>
  <div class="childOne">
    <span>子组件2</span>
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
      eventBus.$on('clickEvent', (val) => {
        console.log(val)
      })
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


</style>

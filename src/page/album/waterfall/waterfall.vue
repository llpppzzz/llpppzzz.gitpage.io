<template>
  <div class="waterfall">
    <el-button @click="handleClick()">print</el-button>
  </div>
</template>

<script>
  import unsplashApi from 'api/unsplash'
  import { deepCopy, debounce, throttle } from '../../../common/utils'

  let debounceFn = debounce(function () {
    console.log(1)
  }, 3000, false)
  let throttleFn = throttle(function () {
    console.log(2)
  }, 2000, {leading: false})

  export default {
    name: 'waterfall',
    data () {
      return {
        photosList: []
      }
    },
    created () {
      // this.getPhotos()
      let a = {
        b: {
          a: 4
        }
      }
      let b = deepCopy({}, a)
      a.b.a = 2
      console.log(b)
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      async getPhotos () {
        try {
          let res = await unsplashApi.viewPhotos()
          this.photosList = res
        } catch (e) {
          console.log(e)
        }
      },
      handleClick () {
        throttleFn()
      }
    }
  }
</script>

<style lang="less">


</style>


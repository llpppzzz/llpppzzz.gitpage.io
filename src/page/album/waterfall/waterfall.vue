<template>
  <div class="waterfall">
    <el-button @click="handleClick()">print</el-button>
    <el-button @click="openPage()">jump</el-button>
    <el-button @click="mockTest()">get</el-button>
  </div>
</template>

<script>
  import { debounce, throttle } from '../../../common/utils'
  import http from '@/api'

  export default {
    name: 'waterfall',
    data () {
      return {
        photosList: []
      }
    },
    created () {
      // let a = {
      //   b: {
      //     a: 4
      //   }
      // }
      // let b = deepCopy({}, a)
      // a.b.a = 2
      // console.log(b)
      this.getPhotos()
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
          let params = {
            page: 1,
            per_page: 1,
            order_by: 'latest'
          }
          let res = await this.$api.unsplash.viewPhotos(params)
          this.photosList = res
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      },
      debounceFn: debounce(function () {
        console.log(1)
      }, 3000, false),
      throttleFn: throttle(function () {
        console.log(2)
      }, 2000, {leading: false}),
      handleClick () {
        // this.throttleFn()
        let text = 'rrrr{{dfsdfdsf}}}'
        let text1 = 'fff#343fdfd'
        let rex1 = /#([^#]+)$/
        let rex2 = /\{\{([^}]+)\}\}/
        console.log(text.match(rex2))
        console.log(text1.match(rex1))
      },
      openPage () {
        this.$router.replace({
          name: 'tuanzi',
          query: {
            something: 'dsfjlsdjflsd'
          }
        })
      },
      async mockTest () {
        try {
          let res = await http.mock('calendar').get()
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="less">

</style>


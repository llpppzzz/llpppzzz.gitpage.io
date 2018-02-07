<template>
  <div class="vue-router-container">
    <el-container>
      <el-aside width="200px">
        <ul class="list-box">
          <li v-for="(item, index) in list" :key="index">
            <router-link href="" :to="{name: 'listDetails', params: item}">
              <span>{{item.id}}</span>
            </router-link>
          </li>
        </ul>
      </el-aside>

      <el-main>
        <router-view>

        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {id: 222},
          {id: 223},
          {id: 224},
          {id: 225},
          {id: 226}
        ]
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="less">

  .vue-router-container {
    margin: 0 auto;
    padding: 0 80px;
    overflow: hidden;
    .list-box {

      li {
        height: 30px;
        line-height: 30px;
        display: block;
      }
    }
  }

</style>

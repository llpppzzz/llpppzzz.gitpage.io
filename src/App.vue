<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element Plus is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="primary" @click="getPhotos">el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import Unsplash from 'api/unsplash'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    onMounted(async () => {
      console.log('mounted!')
    })
    async function getPhotos () {
      console.log('get!')
      try {
        const res = await Unsplash.getPhotos({
          page: 1,
          pageSize: 10
        })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
    return {
      getPhotos
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

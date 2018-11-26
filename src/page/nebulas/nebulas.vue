<template>
  <div class="nebulas">
    <div class="nebulas-list">
      <ul>
        <li v-for="(index, item) in result" :key="index">
          <span>{{item.content}}</span>
          <span>{{item.published_at}}</span>
        </li>
      </ul>
    </div>
    <div class="nebulas-bottom">
      <el-input type="textarea" v-model="content"></el-input>
      <el-button size="small" @click="submit()">提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nebulas',
    data () {
      return {
        content: '',
        result: []
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
      async contractTest () {
        try {
          let res = await this.$api.contract.getAllItems()
          console.log(res)
          this.result = res
        } catch (e) {
          console.log(e)
        }
      },
      async submit () {
        try {
          let res = await this.$api.contract.setItem(this.content)
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="less">
  .nebulas {
    display: block;
  }

</style>


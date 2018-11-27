<template>
  <div class="nebulas">
    <div class="nebulas-list">
      <ul>
        <li v-for="item in result">
          <span>{{item.content}}</span>
          <span calss="time">{{item.published_at | dateConvert}}</span>
        </li>
      </ul>
    </div>
    <div class="nebulas-bottom">
      <el-input type="textarea" v-model="content" resize="none"></el-input>
      <el-button size="mini" @click="submit()">提交</el-button>
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
      this.getAllItems()
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      async getAllItems () {
        try {
          let res = await this.$api.contract.getAllItems()
          this.result = res.execResult
        } catch (e) {
          console.log(e)
        }
      },
      async submit () {
        try {
          await this.$api.contract.setItem(this.content)
          this.$message({
            message: '发布成功!',
            type: 'success'
          })
          this.getAllItems()
        } catch (e) {
          console.log(e)
          this.$message({
            message: JSON.stringify(e),
            type: 'error'
          })
        }
      }
    }
  }
</script>

<style lang="less">
  @blue: #409EFF;

  .nebulas {
    display: block;
    .nebulas-list {
      width: 300px;
      li {
        font-size: 14px;
        border-bottom: 1px solid #ededed;
        line-height: 26px;
        display: flex;
        justify-content: space-between;
        &:hover {
          color: @blue
        }
      }
    }
    .nebulas-bottom {
      margin-top: 30px;
      display: flex;
      align-items: flex-end;
      .el-button {
        margin-left: 16px;
      }
    }
  }

</style>


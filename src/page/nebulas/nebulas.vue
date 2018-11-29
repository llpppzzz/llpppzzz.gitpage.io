<template>
  <div class="nebulas" v-loading="pageLoading">
    <div class="nebulas-list">
      <el-table :data="result" stripe v-loading="loading" @sort-change="sortChange" :default-sort="{ prop: 'published_at', order: 'descending' }">
        <el-table-column label="内容" prop="content"></el-table-column>
        <el-table-column label="发布时间" prop="published_at" sortable>
          <template slot-scope="{row}">
            <span>{{row.published_at | dateConvert}}</span>
          </template>
        </el-table-column>
      </el-table>
      <my-pagination :api="getAllApi" :params="params" @list="getList"></my-pagination>
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
        result: [],
        getAllApi: this.$api.contract.getAllItems,
        pageLoading: false,
        loading: true,
        sort: '',
        direction: '',
        params: {}
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
      changeStatus () {
        this.loading = true
        this.params = {
          dir: this.direction,
          sort: this.sort
        }
      },
      getList (data) {
        this.result = data.list
        this.loading = data.status
        this.pageLoading = false
      },
      // 排序
      sortChange (sortVal) {
        this.sort = sortVal.prop
        this.direction = sortVal.order
        this.changeStatus()
      },
      async submit () {
        this.pageLoading = true
        try {
          await this.$api.contract.setItem(this.content)
          this.content = ''
          this.$message.success('发布成功!')
          this.changeStatus()
        } catch (e) {
          this.$message.error(e.message)
          this.pageLoading = false
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
      width: 500px;
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


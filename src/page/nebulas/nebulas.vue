<template>
  <div class="nebulas"
       v-loading="pageLoading"
       element-loading-text="已提交，正在确认"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
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
  // import 'nasa.js/dist/nasa.js'
  import '../../../static/lib/nasa.js'
  import browser from '../../common/browser'
  import baseMixin from '../../mixin/base'

  const isMobile = browser.isMobile

  export default {
    name: 'nebulas',
    mixins: [ baseMixin ],
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
      if (!isMobile) {
        Nasa.ready(() => {
          // 这里是安全的执行时机，以下代码可以得到正确的结果
          if (!Nasa.ua.isWalletExtensionInstalled()) {
            this.$confirm('请先安装星云钱包 Chrome 扩展！', '', {
              // customClass: 'customize-confirm',
              showCancelButton: true,
              confirmButtonText: 'GitHub',
              type: 'error'
            }).then(({ value }) => {
              this.open('https://github.com/nebulasio/WebExtensionWallet')
            }).catch(() => {
            })
          } else {
            // Nasa.user.getAddr().then((addr) => {
            //   alert('您的钱包地址是：\n' + addr)
            // })
          }
        })
      }
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
        if (isMobile) {
          this.$message.error('暂不支持移动端！')
          return
        }
        try {
          let result = await this.$api.contract.setItem(this.content)
          const txHash = result.txHash
          this.pageLoading = true
          await this.$api.contract.getTxResult(txHash)
          this.content = ''
          this.$message.success('发布成功!')
          this.changeStatus()
        } catch (e) {
          console.log(e)
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
      width: 100%;
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


<template>
  <div class="my-pagination">
    <el-pagination
      @current-change='handleCurrentChange'
      :current-page.sync='currentPage'
      :page-size='pageSize'
      layout='total, prev, pager, next, jumper'
      :total='total'>
    </el-pagination>
  </div>
</template>

<script>
  /**
   * 分页组件封装。
   * 内部处理分页参数，降低页面多个分页式的复杂度。
   * @param url           [请求地址]
   * @param params        [请求参数]
   * @param loading       [是否loading，默认true]
   * @param card          [是否卡片列表，默认false]
   * @param top           [顶部距离]
   * @param auto-fetch    [立即查询，默认true]
   * @param small         [精简模式，默认false]
   * @example
   *   gf-pagination(:api='apiMethod', :params="params", @list="queryList" top="20")
   * @return
   *   queryList (data) {
   *     this.list = data.list
   *     this.pageStatus = data.status
   *   }
   * @return list         [列表数据]
   * @return status   [列表状态]
   */
  import { TABLE_DEFAULT_PAGE_SIZE } from '../../common/constants'

  export default {
    name: 'MyPagination',
    props: {
      api: {
        type: Function,
        required: true
      },
      params: {
        type: Object,
        default: function () {
          return {}
        }
      },
      autoFetch: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        listStatus: true,
        currentPage: 1,
        total: 0,
        isHandle: true
      }
    },
    created () {
      if (this.autoFetch) {
        this.queryTableList()
      }
    },
    computed: {
      pageSize () {
        return this.params.pageSize || TABLE_DEFAULT_PAGE_SIZE
      }
    },
    watch: {
      params: {
        handler (params) {
          if (this.currentPage !== 1) {
            this.currentPage = 1
          }
          this.queryTableList()
        },
        deep: true
      }
    },
    methods: {
      handleCurrentChange (val) {
        this.currentPage = val
        this.queryTableList(true)
      },
      async queryTableList (bool) {
        let page = {
          page: this.currentPage,
          pageSize: this.pageSize
        }
        let params = Object.assign({}, this.params, page)
        try {
          let result = await this.api(params)
          let dataField = result.execResult.list
          let length = dataField.length
          this.listStatus = false
          if (!result || !length) {
            // this.listStatus = 'empty'
            this.total = 0
            this.setListData([])
            return false
          }
          // this.listStatus = 'success'
          this.total = result.execResult.total
          this.setListData(dataField)
        } catch (err) {
          this.listStatus = err
          this.setListData([])
        }
      },
      setListData (list) {
        let data = {
          list,
          status: this.listStatus,
          pageParams: {
            page: this.currentPage,
            pageSize: this.pageSize,
            total: this.total
          }
        }
        this.$emit('list', data)
      }
    }
  }
</script>

<style lang="less">
  .my-pagination {
    margin-top: 30px;
  }
</style>

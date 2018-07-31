<template lang="pug">
  .view.view-user-info
    .search-box.clearfix
      .pull-right(@keyup.enter="search")
        el-input(v-model="userCode")
        el-button(type="primary", size="medium", @click="search") 查询
    .result-box
      el-form(:model="info" label-width="120px")
        el-form-item(label="姓名")
          el-input(v-model="info.userName", readonly)
        el-form-item(label="id")
          el-input(v-model="info.userId", readonly)
        el-form-item(label="code")
          el-input(v-model="info.userCode", readonly)
        el-form-item(label="是否投资顾问")
          span {{info.isAdviser | booleanFilter}}
        el-form-item(label="角色")
          el-input(type="textarea", v-model="info.roleNames", readonly)
        el-form-item(label="分支机构")
          el-table(:data='info.accessBranchList', stripe,)
            el-table-column(prop="branchName", label='机构名称', align="left")
            el-table-column(prop="branchCode", label='机构代码', align="left")
        el-form-item(label="所属公司")
          el-table(:data='info.accessBranchList', stripe,)
            el-table-column(prop="parentName", label='机构名称', align="left")
            el-table-column(prop="parentCode", label='机构代码', align="left")
</template>

<script>
  import baseMixin from '../../mixin/base'
  // import { mapState } from 'vuex'
  import userApi from '@/api/user'

  export default {
    name: 'userInfo',
    mixins: [ baseMixin ],
    data () {
      return {
        tableStatus: 'loading',
        userCode: '',
        info: {}
      }
    },
    created () {
    },
    mounted () {
      // this.userCode = this.$store.state.user.userId
      this.getData()
    },
    computed: {
      // ...mapState({
      //   userName: state => state.user.userName,
      //   userId: state => state.user.userId
      // })
    },
    watch: {
    },
    methods: {
      async getData () {
        let id = 'gzzhengjing'
        try {
          let res = await userApi.getUserInfo(id)
          this.info = res
          this.tableStatus = 'success'
        } catch (e) {
          console.log(e)
          this.tableStatus = e
        }
      },
      search () {
        this.getData()
      }
    }
  }
</script>

<style lang="stylus">
  .view-user-info
    background #fff
    padding 24px
    font-size 14px
    .el-input
      width 200px
    .search-box
      padding-bottom 24px
      border-bottom 1px solid #ededed
      .pull-right
        float right
        .el-button
          margin-left 20px
    .result-box
      padding-top 20px
      .el-table
        .cell
          font-size 14px
</style>

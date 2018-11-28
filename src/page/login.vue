<template>
  <div class="login">
    <div class="login-dialog" @keyup.enter="login">
      <el-input v-model="userId" autofocus placeholder="请输入用户名"></el-input>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="login">登陆</el-button>
    </div>
  </div>
</template>

<script>
  import userApi from '../api/user'
  export default {
    name: 'login',
    data () {
      return {
        userId: 'gzzhengjing',
        password: 'a123456'
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
      async login () {
        try {
          let result = await userApi.login(this.userId, this.password)
          if (result) {
            // 调用 refresh 接口，刷新用户缓存信息
            // await userApi.getUserInfo(this.userId)
            this.$router.push({path: '/'})
          }
        } catch (err) {
          // if (err.data && err.data.msg) {
          //   const msg = err.data.msg
          //   if (!~msg.indexOf('锁定')) {
          //     const times = msg.match(LOGIN_RETRY_TIMES_REG)
          //     if (times) {
          //       const time = times[1] || 0
          //       this.setError(`用户名或密码错误，您还有${time}次尝试机会`)
          //     } else {
          //       this.setError(err.data.msg)
          //     }
          //   } else {
          //     this.hideError()
          //     this.setInterval(msg)
          //   }
          // }
        }
      }
    }
  }
</script>

<style lang="less">
  .login {
    width: 100%;
    height: 100%;
    position: relative;
    .login-dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top: -125px;
      padding: 30px;
      height: 250px;
      width: 400px;
      // border: 1px solid #ccc;
      box-shadow: 0 0 20px 0 rgba(137,150,172,0.50);
      .el-input {
        margin-bottom: 24px;
      }
    }
  }

</style>


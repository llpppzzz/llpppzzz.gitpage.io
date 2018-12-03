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
  export default {
    name: 'login',
    data () {
      return {
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


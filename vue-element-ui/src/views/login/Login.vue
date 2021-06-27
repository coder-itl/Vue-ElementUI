<template>
  <div class="login">
    <p>学员管理系统</p>
    <div>
      <el-form label-width="100px" :model="ruleForm" ref="ruleForm" :rules="rules" class="demo-ruleForm">

        <el-form-item label="姓名" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>
<script>
import { UserLogin } from "network/login"

export default {

  data() {
    return {
      ruleForm: {
        user: 'admin',
        password: ""
      },
      rules: {
        user: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
          { min: 2, max: 6, required: true, message: '请输入规范的名称', trigger: 'blur' }
        ],

        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 6, max: 18, required: true, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],

      }
    }
  },
  methods: {
    // 登录按钮点击事件
    login() {
      // 调用 axios 封装的 UserLogin 函数 
      // UserLogin().then((res) => {
      //   console.log(res);
      // })
    }
  }


};
</script>
<style scoped></style>

<template>
  <div id="dl">

    <div id="login">
      <h3>超市订单管理系统</h3>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model.number="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" label-width="10px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }setTimeout(() => {
        if (Number.isInteger(value)) {
          callback(new Error('请不要输入数字值'))
        } else {
          callback()
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        name: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/selectUser?userName=' + this.ruleForm.name + '&password=' + this.ruleForm.pass + '').then(response => {
            console.log(response.data)
            if (response.data > 0) {
              this.$message({
                showClose: true,
                message: '恭喜你，登陆成功',
                type: 'success',
                duration:0
              });
              window.sessionStorage.setItem('token', this.ruleForm.name)
              this.$router.push('/sea')
            } else {
              this.$message({
                showClose: true,
                message: '用户名或密码错误',
                type: 'error'
              });
            }
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  *{
    margin: 0;
  }

  #dl{
    box-sizing: border-box;
    height: 754px;
    border: 2px solid rgb(69,142,197);
    background: url(../assets/login_bg.jpg) no-repeat;
    background-size: 100%;
  }
  #login{
    width: 400px;
    height: 350px;
    margin: 150px auto;
    box-sizing: border-box;
    padding-right: 50px;
    background: url(../assets/formBg.png) no-repeat;
    background-size: 400px 350px;
    padding-top: 80px;
    position: relative;
  }
  h3{
    text-align: center;
    position: absolute;
    top: -58px;
    left:85px;
    font-size: 26px;
    color: #F8F8FF;
  }

</style>

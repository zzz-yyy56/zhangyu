<template>
  <div id="up">
    <h3>修改供应商信息</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="供应商编号" prop="proCode" style="display: none;">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>

      <el-form-item label="供应商编码" prop="proCode">
        <el-input v-model="ruleForm.proCode"></el-input>
      </el-form-item>

      <el-form-item label="供应商名称" prop="proName">
        <el-input v-model="ruleForm.proName"></el-input>
      </el-form-item>

      <el-form-item label="联系人" prop="proContact">
        <el-input v-model="ruleForm.proContact"></el-input>
      </el-form-item>

      <el-form-item label="联系人电话" prop="proPhone">
        <el-input v-model="ruleForm.proPhone"></el-input>
      </el-form-item>

      <el-form-item label="传真" prop="proFax">
        <el-input v-model="ruleForm.proFax"></el-input>
      </el-form-item>

      <el-form-item label="创建时间" required>

        <el-col :span="11" prop="creationDate">
          <el-form-item >
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.creationDate" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      ruleForm: {
        id: '',
        proCode: '',
        proName: '',
        proContact: '',
        proPhone: '',
        proFax: '',
        creationDate: ''

      },
      rules: {
        proCode: [
          { required: true, message: '请输入供应商编号', trigger: 'blur' }
        ],
        proName: [
          { required: true, message: '请输入供应商名称', trigger: 'blur' }
        ],
        proContact: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' }
        ],
        proPhone: [
          { required: true, message: '请输入联系人电话', trigger: 'blur' }
        ],
        proFax: [
          { required: true, message: '请输入供应商传真号', trigger: 'blur' }
        ],
        creationDate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/update', this.ruleForm).then(response => {
            this.$message({
              showClose: true,
              message: response.data,
              type: 'success'
            });
            this.$router.push('/pageination')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    axios.get('/getByProviderId?pid=' + this.$route.query.id + '').then(response => {
      this.ruleForm = response.data
    })
  }
}
</script>

<style>
  #up>h3{
    text-align: center;
    margin: 10px 0px 10px 0px;
    color: #666;
    font-size: 23px;
  }
</style>

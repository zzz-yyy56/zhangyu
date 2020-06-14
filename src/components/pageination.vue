<template>
  <div id="all">

    <div id="tb">
      <h3>供应商管理</h3>
      <router-link to="/providerAdd" tag="span">添加供应商</router-link>
       <el-table
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="id"
            label="供应商编号"
            width="100">
          </el-table-column>
          <el-table-column
            fixed
            prop="proCode"
            label="供应商编码"
            width="150">
          </el-table-column>
          <el-table-column
            prop="proName"
            label="供应商名称"
            width="300">
          </el-table-column>
          <el-table-column
            prop="proContact"
            label="联系人"
            width="120">
          </el-table-column>
          <el-table-column
            prop="proPhone"
            label="联系电话"
            width="120">
          </el-table-column>
          <el-table-column
            fixed
            prop="proAddress"
            label="供应商地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="proFax"
            label="传真"
            width="130">
          </el-table-column>
          <el-table-column
            prop="creationDate"
            label="创建时间"
            width="200">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <div class="block">
       <el-pagination
             @current-change="handleCurrentChange"
             :current-page.sync="currentPage3"
             :page-size="5"
             layout="prev, pager, next, jumper"
             :total="totals"
             >
       </el-pagination>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data () {
    return {
      totals: '',
      currentPage3: 1,
      tableData: '',
    }
  },
  methods: {
    handleClick (row) {
      this.$router.push({
        path: '/update',
        query: {
          id: row.id
        }
      })
    },
    del (row) {

       this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

            axios.get('/del?id=' + row.id).then(response => {
              this.$message({
                showClose: true,
                message: response.data,
                type: 'success'
              });
              window.location.reload()
            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleCurrentChange (val) {
      axios.get('/getProviderList?page=' + val + '').then(response => {        
        this.tableData = response.data
      })
    }
  },
  created () {
    axios.get('/getAllProvider').then(response => {
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(198, 226, 255, 0.1)'
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
      this.totals = response.data
    })
    axios.get('/getProviderList?page=1').then(response => {
      this.tableData = response.data
    })
    
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  .block{
    text-align: center;
  }
  #tb{
    margin: 30px auto;
  }
  #tb>h3{
    text-align: center;
    margin-bottom: 30px;
    font-size: 25px;
    color: #666;
  }
  #tb>span{
    padding: 3px 5px 3px 5px;
    color: #F8F8FF;
    border-radius: 3px;
    background-color: #1E90FF;
    margin-bottom: 5px;
    cursor:pointer;
    font-size: 16px;
    float: right;
  }
</style>

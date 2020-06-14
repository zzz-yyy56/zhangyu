<template>
  <div id="show">
    <div id="head">
      <h3>超市订单管理系统</h3>
      <p>
        下午好！<span>{{msg}}</span>,欢迎你! <span @click="out">退出</span>
         
      </p>
    </div>
    <div id="body">
      <p><span>{{nowDate}}</span><span>{{nowTime}}</span><span>{{nowWeek}}</span></p>
      <p>温馨提示：为了能正常浏览，请使用高版本浏览器！（Chrome）</p>
    </div>
    <div id="zy">
    <div id="left">
      <div>
        <h5>功能列表</h5>
        <el-row >
            <el-menu style="background-color: rgb(245,245,245); padding-right: 15px;">
              <el-menu-item index="1">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">订单管理</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-box"></i>
<!--                <span slot="title">供应商管理</span> -->
                <router-link to="/pageination" tag="span">供应商管理</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-s-custom"></i>
                <router-link to="/user" tag="span">用户管理</router-link>
                <!-- <span slot="title">用户管理</span> -->
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-edit"></i>
                <router-link to="/upload" tag="span">修改密码</router-link>
                <!-- <span slot="title">修改密码</span> -->
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title" @click="out">退出系统</span>
              </el-menu-item>
            </el-menu>
        </el-row>
      </div>
      </div>
      <div id="view">
        <router-view></router-view>
      </div>
      </div>

    <div id="foot">
      <p>版权归xxx所有</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {

  data () {    
    return {
      msg: window.sessionStorage.getItem('token'),
      timer: null,
      nowWeek: '',
      nowDate: '',
      nowTime: '',
      img:'',
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.setNowTimes()
    }, 1000)
  },
  methods: {
    setNowTimes () {
      let myDate = new Date()
      // console.log(myDate)
      let wk = myDate.getDay()
      let yy = String(myDate.getFullYear())
      let mm = myDate.getMonth() + 1
      let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
      let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
      let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
      let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let week = weeks[wk]
      this.nowDate = yy + '年' + mm + '月' + dd + '日'
      this.nowTime = hou + ':' + min + ':' + sec
      this.nowWeek = week
    },
    out () {
      this.$message({message:'欢迎下次登陆',type: 'info'});
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  created(){
    Axios.get('/Img').then((res)=>{
      this.img=res.data;
      console.log(this.img)
    })
  }
}
</script>

<style>
  *{
    margin: 0;
  }
  #head{
    background-color: rgb(69,142,197);  
    padding: 15px;
  }
  
  #head::after{
    content:"";
    display: block;
    clear:both;
  }
  #head>h3{
    float: left;
    color: #F8F8FF;
    font-size: 24px;
    background: url(../assets/buy.png) no-repeat;
    background-position: 30px;
    padding-left: 80px;
  }
  #head>p{
    float: right;
    margin-right: 30px;
    color: #F8F8FF;
    padding: 5px;
    font-weight: 800;
  }
  #head>p>span:nth-of-type(1){
    color: yellow;
  }
  #head>p>span:nth-of-type(2){
    color: #F8F8FF;
    background-color: yellowgreen;
    padding: 5px;
    border-radius: 4px;
    cursor:pointer;
  }
  #body{
    padding: 5px;
    color: gray;
    font-size: 14px;
    background-color: rgb(226,236,245);
  }
  #body::after{
    content:"";
    display: block;
    clear:both;
  }
  #body>p:nth-of-type(1){
    float: left;
    background: url(../assets/time.png) no-repeat;
    padding-left: 30px;
    margin-left: 25px;
  }
  #body>p:nth-of-type(2){
    float: right;
    margin-right: 40px;
  }
  #left{
    border-right: 1px solid dodgerblue;
    padding-left: 5px;
    padding-top: 10px;
    width: 159px;
    height: 578px;
    background-color: rgb(245,245,245);
    float: left;
  }
  #zy:after{
    content:"";
    display: block;
    clear:both;
  }

  #left>div:nth-of-type(1)>h5{
    text-align: center;
    font-size: 18px;
    color: #F8F8FF;
    background-color: rgb(69,142,197);
    width: 150px;
    border-radius: 5px;
    margin-bottom: 5px;
    font-weight: 500;
    box-shadow: 5px 5px 1px rgb(222,222,222);;
   }

  #view{
    float: left;
    width: 1367px;
    height: 587px;
  }
  #foot{
    height: 74px;
    background-color: rgb(69,142,197);
  }
  #foot>p{
    text-align: center;
    box-sizing: border-box;
    padding-top: 25px;
    font-size: 14px;
    color: #F8F8FF;
  }
</style>

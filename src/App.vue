<template>
  <div id="app">
    <div class="login_form" v-if="NoLogin">
      
      <el-form :label-position="left" label-width="100px" :model="user">
      <h1 class="login_name">东南西北中发白</h1>
        <el-form-item label="用户名">
          <el-input v-model="user.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div  v-if="YesLogin">
      <el-container >
        <el-header style="
          padding-top: 10px;
        " >
          <!-- <div class="title">
              <img class="titlepic" src="./assets/title.png" ></img>
              <span class="fonta" >东南西北中发白</span>
            </div> -->
            <span class="name">用户名：{{Staff.name}}</span>
            <el-button class="ubtton" @click="exit()">退出登录</el-button>
        </el-header>
        <el-main id="zhuye" style="
          padding-top: 0px;
          padding-left: 50px;
          padding-right: 50px;
          padding-bottom: 20px;
        ">
          <router-view v-if="isRouterAlive"></router-view>
        </el-main>
        <el-footer>
          <Navbar />
        </el-footer>
    </el-container>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/Navbar'
import {isLogin} from "./api/login"
export default {
  name: 'app',
  components: {
    Navbar
  },
    provide(){
    return {
      reload: this.reload,
      User: this.User
    }
  },
    data() {
    return {
      user:{
        username: undefined,
        password: undefined,
      },
      Staff:[],
      NoLogin: true,
      YesLogin: false,
      isRouterAlive: true,
    };
  },
  cread() {
   
  },
  methods: {
    submitForm(){
      isLogin(this.user).then((response) =>{
        this.Staff=response.data.data
        this.NoLogin=false
        this.YesLogin=true;
        const url ='/ordering'
        this.$router.push(url)
        console.log(response.data.data)
      })
    },
      reloadRouter(path) {
      this.$router.replace({
        path:path,
        query: {
          nextPath: path
        }
      });
    },
    User(){
      return this.Staff
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
        });
      },
      exit(){
        const url ='/'
        this.$router.push(url)
        this.NoLogin=true
        this.YesLogin=false;
        this.user.username=undefined;
        this.user.password=undefined;
      },
    },
    mounted() {},
    
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow:hidden;
}

.login_form {
    padding-top: 13%;
    padding-left: 33%;
    padding-right: 33%;
  }

.login_name{
    /* font-family: SYHT;
    letter-spacing: 2px;
    font-weight:50; */
    font-size: 35px;
    padding-left: 100px;
    padding-bottom: 30px;
  }
.zhuye{
  position:fixed;
  width:100%;
}
.name{
  margin-right:1100px;  
}

.el-footer {
    background: rgb(202, 195, 195);
    margin: 0 auto;
    position:fixed;
    bottom:0;
    display:block;
    width:100%;
  }
</style>

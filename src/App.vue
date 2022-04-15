<template>
  <div id="app">
    <el-container >
      <!-- <el-header style="height:80px" >
        <div class="title">
            <img class="titlepic" src="./assets/title.png" ></img>
            <span class="fonta" >东南西北中发白</span>
          </div>
      </el-header> -->
      <el-main id="zhuye" style="
        padding-top: 50px;
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
</template>

<script>
import Navbar from '@/views/Navbar'
export default {
  name: 'app',
  
  components: {
    Navbar
  },
    provide(){

    return {

      reload: this.reload
    }
  },
    data() {

    return {

      isRouterAlive: true,

    };

  },

  cread() {},
  methods: {
      reloadRouter(path) {
      this.$router.replace({
        path:path,
        query: {
          nextPath: path
        }
      });
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
        });
      }
    },
    mounted() {

  },
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
}

/* .title{
  height:80px;
  margin: 0 auto;
}
.fonta{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
} */

/* .titlepic{
  width: 100%;
} */
.zhuye{
  position:fixed;
  width:100%;
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

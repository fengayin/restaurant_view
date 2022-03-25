<template>
  <div id="app">
    <el-container >
      <el-main>
        <router-view></router-view>
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
  methods: {
      reloadRouter(path) {
      this.$router.replace({
        path:path,
        query: {
          nextPath: path
        }
      });
    }
    }
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
  margin-top: 20px;
}
.el-main{
  position:fixed;
  bottom: 50px;
  width:100%;
}
.el-footer {
    background: dimgrey;
    margin: 0 auto;
    position:fixed;
    bottom:0;
    display:block;
    width:100%;
  }
</style>

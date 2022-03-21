<template>
  <div class="table">
    <el-row  >
      <el-col :span="600">
          <el-image 
            style="width: 200px; height: 200px"
            :src="url">
          </el-image>
      </el-col>
      <el-col :span="600">
          <el-image 
            style="width: 200px; height: 200px"
            :src="url">
          </el-image>
      </el-col>
      <el-col :span="600">
          <el-image 
            style="width: 200px; height: 200px"
            :src="url">
          </el-image>
      </el-col> 
    </el-row>
    <el-row >
      <el-col :span="7">
          <el-image 
            style="width: 200px; height: 200px"
            :src="url">
          </el-image>
      </el-col>
      <el-col :span="7">
          <el-image 
            style="width: 200px; height: 200px"
            :src="url">
          </el-image>
      </el-col>
      <el-col :span="7">
          <el-image 
            style="width: 200px; height: 200px"
            :src="url">
          </el-image>
      </el-col> 
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>
<style>
  .table{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
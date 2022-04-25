<template>
  <div>
    <el-radio-group v-model="radio" style="margin-bottom:30px"  @change="agreeChange">
      <el-radio :label="1">饮料</el-radio>
      <el-radio :label="2">意面</el-radio>
      <el-radio :label="3">饭</el-radio>
      <el-radio :label="4">小吃</el-radio>
      <el-radio :label="5">披萨</el-radio>
      <el-radio :label="6">汤</el-radio>
      <el-radio :label="7">沙拉</el-radio>
      <el-radio :label="8">甜品</el-radio>
      <el-radio :label="9">牛排</el-radio>
    </el-radio-group>
    <div ref="main" style="whith:100%;height:350px;margin: 0 auto;" />
  </div>
  
</template>

<script>
import {countFoodByCategoryNo} from '../../api/orderItem'
export default {
  name:'FoodCount',
  data() {
    return {
      radio:1,
      countFood:undefined,
    }
  },
  created() {
    this.getInfo()
  },
  mounted() {
    
  },
  methods: {
    getInfo(){
      if(this.radio==1){
      countFoodByCategoryNo("drink").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==2){
      countFoodByCategoryNo("pasta").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==3){
      countFoodByCategoryNo("rice").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==4){
      countFoodByCategoryNo("snack").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==5){
      countFoodByCategoryNo("pizza").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==6){
      countFoodByCategoryNo("soup").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==7){
      countFoodByCategoryNo("sala").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==8){
      countFoodByCategoryNo("dessert").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    else if(this.radio==9){
      countFoodByCategoryNo("steak").then((response)=>{
        this.countFood=response.data
        this.initEcharts(this.countFood)
      })
    }
    },
    agreeChange(){
      this.getInfo();
    },
    initEcharts(countFood) {
      var myChart = this.$echarts.init(this.$refs.main)
      var option = {
        title: {
          text: '餐品类别业绩表',
          subtext: '按餐品类型',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '占所有餐品类别的',
            type: 'pie',
            radius: '60%',
            data: countFood,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      option && myChart.setOption(option)
    }
  }
}
</script>

<template>
    <div>
        <el-radio-group v-model="radio1" style="margin-bottom:20px"  @change="agreeChange1">
            <el-radio :label="1">总营业</el-radio>
            <el-radio :label="2">已结账</el-radio>
            <el-radio :label="3">挂账</el-radio>
        </el-radio-group> <br>
        <el-radio-group v-model="radio2" style="margin-bottom:20px"  @change="agreeChange2">
            <el-radio :label="1">年</el-radio>
            <el-radio :label="2">月</el-radio>
            <el-radio :label="3">日</el-radio>
        </el-radio-group>
        <div style="height:300px">
            <div ref="main" style="whith:100%;height:100%;margin: 0 auto;" />
        </div>
        
    </div>
</template>


<script>
import {countSummaryCalculation} from '../../api/order'
import {billcountSummaryCalculation} from '../../api/bill'
import {chargecountSummaryCalculation} from '../../api/charge'
export default {
  name:'OrderSumCount',
  data() {
    return {
      radio1:1,
      radio2: 1,
      countSum:undefined,
    }
  },
  created() {
    this.getInfo()
    
  },
  mounted() {
    
  },
  methods: {
    getInfo(){
        if(this.radio1==1){
            if(this.radio2==1){
                countSummaryCalculation("y").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                    console.log(this.countSum.map(v=>v.date))
                    })
            }
            else if(this.radio2==2){
                countSummaryCalculation("m").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                })
            }
            else if(this.radio2==3){
                countSummaryCalculation("d").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                })
            }
        }
        else if(this.radio1==2){
            if(this.radio2==1){
                billcountSummaryCalculation("y").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                    console.log(this.countSum.map(v=>v.date))
                    })
            }
            else if(this.radio2==2){
                billcountSummaryCalculation("m").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                })
            }
            else if(this.radio2==3){
                billcountSummaryCalculation("d").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                })
            }
        }
        else if(this.radio1==3){
            if(this.radio2==1){
                chargecountSummaryCalculation("y").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                    console.log(this.countSum.map(v=>v.date))
                    })
            }
            else if(this.radio2==2){
                chargecountSummaryCalculation("m").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                })
            }
            else if(this.radio2==3){
                chargecountSummaryCalculation("d").then((response)=>{
                    this.countSum=response.data
                    this.initEcharts(this.countSum)
                })
            }
        }
      
    },
    agreeChange1(){
      this.getInfo();
    },
    agreeChange2(){
      this.getInfo();
      console.log(this.radio1)
      console.log(this.radio2)
      console.log(this.countSum)
    },
    initEcharts(countSum) {
      var myChart = this.$echarts.init(this.$refs.main)
      var option = {
          grid:{

       //与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算

        height:220

    },
        xAxis: {
            type: 'category',
            data: countSum.map(v=>v.date),
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: countSum.map(v=>v.amount),
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    valueAnimation: true,
                    offset: [5, -2],
                    textStyle: {
                    color: "#333",
                    fontSize: 13,
                },
              },
            },
            }
        ]
        };
      option && myChart.setOption(option)
    }
  }
}
</script>

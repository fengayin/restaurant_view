<template>
 
  <div ref="main" style="whith:100%;height:100%;margin: 0 auto;" />
</template>

<script>
import {countCombo,} from '../../api/orderItem'
export default {
  name:'ComboCount',
  data() {
    return {
    }
  },
  created() {},
  mounted() {
    countCombo().then((response)=>{
      const countCombo=response.data
      
      this.initEcharts(countCombo)
      console.log(countCombo)
    })
    
  },
  methods: {
    initEcharts(countCombo) {
      var myChart = this.$echarts.init(this.$refs.main)
      var option = {
        title: {
          text: '套餐业绩表',
          subtext: '按套餐分类',
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
            name: '占所有套餐的',
            type: 'pie',
            radius: '50%',
            data: countCombo,
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



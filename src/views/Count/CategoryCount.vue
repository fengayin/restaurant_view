<template>
 
  <div ref="main" style="whith:100%;height:100%;margin: 0 auto;" />
</template>

<script>
import {countFoodCategoryByCategoryNo,} from '../../api/orderItem'
export default {
  name:'CategoryCount',
  data() {
    return {
    }
  },
  created() {},
  mounted() {
    countFoodCategoryByCategoryNo().then((response)=>{
      const countFoodCategory=response.data
      
      this.initEcharts(countFoodCategory)
      console.log(countFoodCategory)
    })
    
  },
  methods: {
    initEcharts(countFoodCategory) {
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
            radius: '50%',
            data: countFoodCategory,
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

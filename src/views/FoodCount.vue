<template>
  <div ref="main" style="margin: 0 auto;" />
</template>

<script>

export default {
  name: 'foodCount',
  data() {
    return {
    }
  },
  created() {},
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      var myChart = this.$echarts.init(this.$refs.main)
      var option = {
        title: {
          text: '读者最喜爱图书分析',
          subtext: '按图书类型',
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
            name: '占所有图书的',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
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

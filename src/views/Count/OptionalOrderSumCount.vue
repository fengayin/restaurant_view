<template>
    <div>
        <el-radio-group v-model="radio1" style="margin-bottom:20px"  @change="agreeChange1">
            <el-radio :label="1">总营业</el-radio>
            <el-radio :label="2">已结账</el-radio>
            <el-radio :label="3">挂账</el-radio>
        </el-radio-group> <br>
        <span>年：</span>
        <el-select v-model="yearoption" placeholder="请选择" @change="agreeChangeyear" size="mini">
            <el-option
            v-for="item in year"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <span>&nbsp&nbsp&nbsp&nbsp</span>
        <span>月：</span>
        <el-select v-model="monthoption" placeholder="请选择" @change="agreeChangemonth" size="mini">
            <el-option
            v-for="item in month"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <div style="height:300px">
            <div ref="main" style="whith:100%;height:100%;margin: 0 auto;" />
        </div>
        <div style="margin-top:20px">
            <!-- <el-select v-model="yearoption2" placeholder="请选择" @change="agreeChangeyear"size="mini">
                <el-option
                v-for="item in year"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span>年</span>
            <el-select v-model="monthoption2" placeholder="请选择" @change="agreeChangemonth"size="mini">
                <el-option
                v-for="item in month"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span>月</span>
            <el-select v-model="dayoption2" placeholder="请选择" @change="agreeChangemonth"size="mini">
                <el-option
                v-for="item in day"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select> <span>日的销售额为￥{{amount}}</span> <br> -->
            <span>{{radio}}：</span> 
            <el-date-picker
                v-model="dateoption"
                value-format="yyyy,MM,dd"
                @change="selectTime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
            <span>的销售额为￥{{amount}}</span> 
        </div>
        
    </div>
</template>


<script>
import {optionalSummaryCalculation,showCalculation} from '../../api/order'
import {billoptionalSummaryCalculation,billshowCalculation} from '../../api/bill'
import {chargeoptionalSummaryCalculation,chargeshowCalculation} from '../../api/charge'
export default {
  name:'OrderSumCount',
  data() {
    return {
        radio1:1,
        yearoption:undefined,
        monthoption:undefined,
        countSum:undefined,
        radio:"总营业",
        amount:0,
        year:[{
          value: '2022',
          label: '2022'
        }, {
          value: '2021',
          label: '2021'
        }],
        yearoption: '',
        month:[{
          value: '0',
          label: 'All'
        }, {
          value: '1',
          label: '1'
        },{
          value: '2',
          label: '2'
        },{
          value: '3',
          label: '3'
        },{
          value: '4',
          label: '4'
        },{
          value: '5',
          label: '5'
        },{
          value: '6',
          label: '6'
        },{
          value: '7',
          label: '7'
        },{
          value: '8',
          label: '8'
        },{
          value: '9',
          label: '9'
        },{
          value: '10',
          label: '10'
        },{
          value: '11',
          label: '11'
        },{
          value: '12',
          label: '12'
        }],
        monthoption: '',
        pickerOptions:{
            disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        dateoption:'',
        
    }
  },
  created() {
    this.yearoption=this.year[0].value
    this.monthoption=this.month[0].value
    
    this.getInfo()
    
  },
  mounted() {
    
  },
  methods: {
    getInfo(){

        if(this.radio1==1){
            this.radio="总营业"
            optionalSummaryCalculation(this.yearoption,this.monthoption).then((response)=>{
                this.countSum=response.data
                this.initEcharts(this.countSum)
            })
    
        }
        else if(this.radio1==2){
            this.radio="已结账"
             billoptionalSummaryCalculation(this.yearoption,this.monthoption).then((response)=>{
                this.countSum=response.data
                this.initEcharts(this.countSum)
            })
        }
        else if(this.radio1==3){
            this.radio="挂账"
             chargeoptionalSummaryCalculation(this.yearoption,this.monthoption).then((response)=>{
                this.countSum=response.data
                this.initEcharts(this.countSum)
            })
        }
      
    },
    
    agreeChange1(){
      this.getInfo();
      this.yearoption=this.year[0].value
      this.monthoption=this.month[0].value
      this.dateoption=null;
      this.amount=0;
    },
    agreeChangeyear(){
      this.getInfo();
      console.log(this.countSum)
    },
    agreeChangemonth(){
      this.getInfo();
      console.log(this.countSum)
    },
    selectTime(){
        var array = this.dateoption.split(",");
        if(this.radio1==1){
            showCalculation(array[0].toString(),array[1].toString(),array[2].toString()).then((response)=>{
                this.amount=response.data.amount
            })
            
    
        }
        else if(this.radio1==2){
             billshowCalculation(array[0].toString(),array[1].toString(),array[2].toString()).then((response)=>{
                this.amount=response.data.amount
            })
        }
        else if(this.radio1==3){
             chargeshowCalculation(array[0].toString(),array[1].toString(),array[2].toString()).then((response)=>{
                this.amount=response.data.amount
            })
        }
    },
    initEcharts(countSum) {
      const chart = this.$refs.main;
      chart.setAttribute('_echarts_instance_', '');
      var myChart = this.$echarts.init(chart)
      var option = {
          grid:{
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

<template>
    <div class="menu" >
        <el-container style="height:610px">
            <el-aside width="300px">
                <div :model="queryParams">
                    <div style="border:1px solid #333;text-align: left; height:485px">
                         <el-table
                             
                             style="width: 100%"
                         >
                            <el-table-column
                                
                                label="购物车"
                                width="180">
                            </el-table-column>
                             
                         </el-table>
                    </div>
                    <div style="border:1px solid #333;text-align: left; height:115px ">
                        <span lable="桌号">桌号:{{queryParams.tableNo}}</span><br>
                        <span>人数：</span>
                        <el-input-number v-model="Orderitem.customer_num" size="mini" :min="1" :max="10"></el-input-number><br>
                        <span>总数量：</span><br>
                        <span>总金额：</span><br>
                        <button>登记</button>
                    </div>
                    
                </div>
            </el-aside>
            <el-container>
                <el-main >
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="全部" name="1">
                            <div style="margin-left:1%;margin-right:1%">
                                <el-row>            
                                    <el-col :span="4" v-for="(food) in foodList" :key="food.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{food.foodName}}</span><br>  
                                        <span>￥{{food.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                    
                                                                
                                            <el-button type="text" class="button" @click="addFoodOrder(food.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                            <div style="margin-left:35%">
                                <div class="block">            
                                    <el-pagination            
                                    @size-change="handleSizeChange"            
                                    @current-change="handleCurrentChange"            
                                    :current-page="pageNum"            
                                    :page-sizes="[4,8, 12, 16]"             
                                    :page-size="pageSize"                     
                                    layout="total, sizes, prev, pager, next"            
                                    :total="total">                
                                    </el-pagination>          
                                </div>        
                                </div>
                        </el-tab-pane>
                        <el-tab-pane label="套餐" name="2">套餐</el-tab-pane>
                        <el-tab-pane label="饭" name="3">饭</el-tab-pane>
                        <el-tab-pane label="意面" name="4">意面</el-tab-pane>
                        <el-tab-pane label="披萨" name="5">披萨</el-tab-pane>
                        <el-tab-pane label="沙拉" name="6">沙拉</el-tab-pane>
                        <el-tab-pane label="小吃" name="7">小吃</el-tab-pane>
                        <el-tab-pane label="甜品" name="8">甜品</el-tab-pane>
                        <el-tab-pane label="汤" name="9">汤</el-tab-pane>
                        <el-tab-pane label="饮料" name="10">饮料</el-tab-pane>
                    </el-tabs>
                </el-main>
            </el-container>
        </el-container>

    </div>
    
</template>

<script>
import { listFood , getListByPage} from '../api/food';
import {findTable} from "../api/table";
import {addFood} from "../api/orderItem";
import { gettableOrderVo} from "../api/order";
export default {
    data() {
      return {
          // 遮罩层
        loading: false,
        activeName: '1',
        foodList: [
            
        ],
        tableOrderVo:{
          tableNo: undefined,
          orderNo: undefined,
          foodNo: undefined,
        },  
        queryParams: {
          tableId: undefined,
          tableName:undefined,
          tableNo: undefined,
        },
         Orderitem: {
            customer_num:undefined
        }, 
        Orderitem2: {
            tableNo: undefined,
            orderNo: undefined,
        },
             
		pageSize:0,
        pageNum:0,     
		total:null,        
		query:{
        pageSize:16,
        pageNum:1,
        food:null,
        },
        
      }
    },
    created() {
        this.getList();
        this.getInfo();
        console.log(this.$data);
    },
    methods: {
      /** 查询食物列表 */
        getList() {
            this.loading = true;
            listFood(this.foodList).then((response) => {
            this.foodList = response.data;
            this.loading = false;
            });
            this.getListByPage();
            
        },
        getInfo(){
            let list = this;
            list.tableOrder = this.$route.params.tableOrder;
            this.Orderitem.customer_num=this.tableOrder.customer_num;
            findTable(this.tableOrder.tableId).then((response) => {
                this.queryParams = response.data;
            });
            gettableOrderVo(this.tableOrder.tableId).then((response) => {
                this.Orderitem2 = response.data;
            });
            
        },
        handleClick(tab, event) {
            console.log(tab, event,this.$data);
        },
        addFoodOrder(foodNo){
            // var tableOrderVo=new Map();
            // tableOrderVo.set('tableNo',this.Orderitem2.tableNo);
            // tableOrderVo.set('orderNo',this.Orderitem2.orderNo);
            // tableOrderVo.set('foodNo',foodNo);
           
            // console.log(tableOrderVo);
            this.tableOrderVo.tableNo=this.Orderitem2.tableNo;
            this.tableOrderVo.orderNo=this.Orderitem2.orderNo;
            this.tableOrderVo.foodNo=foodNo;
            console.log(this.tableOrderVo);
            addFood(this.tableOrderVo).then((response) => {
            this.tableOrderVo = response.data;
            
            });
        },
        getListByPage(){
            getListByPage(this.query).then((response)=>{
            this.foodList=response.data.list
            this.total=response.data.total
            this.pageSize=response.data.pageSize
            this.pageNum=response.data.pageNum
            this.loading=false
            })
        },  
        handleSizeChange(val){
            this.query.pageSize=val
            this.getList()
        },
    
        handleCurrentChange(val){
            this.query.pageNum=val
            this.getList()
        },

        handleAddedItem(){
            this.getList();
            this.$message.success("查询成功");
        },

    }
}
</script>



<style scoped>
    .menu{
    margin:0 auto;
    width: 100%;
    
    
  }
    .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    border:1px solid #333;
  }
  
  .el-main {
    text-align: center;
    color: #333;
    border:1px solid #333;
  }

  
</style>
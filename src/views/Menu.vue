<template>
    <div class="menu" >
        <el-container style="height:610px">
            <el-aside width="380px">
                <div >  
                    <div style="border:1px solid #333;text-align: left; height:115px ">
                        <span lable="桌号">桌号:{{tablequeryParams.tableNo}}</span><br>
                        <span>人数：</span>
                        <el-input-number v-model="Orderitem.customer_num" size="mini" :min="1" :max="10"></el-input-number><br>
                        <span>总数量：</span><br>
                        <span>总金额：</span><br>
                        
                    </div>
                    <div style="border:1px solid #333;text-align: left; height:485px" > 
                         <!-- <div v-for="(food,foodNo) in orderItemList" :key="foodNo">
                             <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>{{}}</span>
                                    <el-button style="float: right; padding: 1px 0" type="text">修改数量</el-button>
                                    <el-button style="float: right; padding: 1px 0" type="text">删除</el-button>
                                </div>
                                <div >
                                <span id="tran_food"></span><br>
                                <span>单价：￥{{food.foodPrice}}</span>
                                <span> &nbsp&nbsp&nbsp数量：x{{food.foodQuantity}}</span>
                                
                                </div>
                            </el-card>
                         </div> -->
                         <el-table 
                            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                            :data="orderItemList"
                            height="430px"
                            style="width: 100% "
                            fit
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            prop="name"
                            label="名字">
                            </el-table-column>
                            <el-table-column
                            prop="foodPrice"
                            label="价格">
                            </el-table-column>
                            <el-table-column
                            prop="foodQuantity"
                            label="数量">
                            </el-table-column>
                            <el-table-column
                            label="操作">
                            <template slot-scope="scope">
                                <el-button  type="text" size="small">修改数量</el-button>
                                <el-button  type="text" size="small">删除</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-aside>
            <el-container>
                <el-main >
                    <el-tabs v-model="activeName" @tab-click="handleClick" style="height:520px ">
                        <el-tab-pane label="全部" name="1" >
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
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
                            <div style="margin-left:29%">
                                <div class="block" >            
                                    <el-pagination            
                                    @size-change="handleSizeChange"            
                                    @current-change="handleCurrentChange"            
                                    :current-page="pageNum"            
                                    :page-sizes="[16]"             
                                    :page-size="pageSize"                     
                                    layout="total, sizes, prev, pager, next"            
                                    :total="total">                
                                    </el-pagination>          
                                </div>        
                                </div>
                        </el-tab-pane>
                        <el-tab-pane label="套餐" name="2">
                            taocan
                        </el-tab-pane>
                        <el-tab-pane label="饭" name="3">
                            <!-- <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(category) in category[2]" :key="foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{category.food.foodName}}</span><br>  
                                        <span>￥{{category.food.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(food.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>   
                            </div> -->
                            fan
                        </el-tab-pane>
                        <el-tab-pane label="意面" name="4">意面</el-tab-pane>
                        <el-tab-pane label="披萨" name="5">披萨</el-tab-pane>
                        <el-tab-pane label="沙拉" name="6">沙拉</el-tab-pane>
                        <el-tab-pane label="小吃" name="7">小吃</el-tab-pane>
                        <el-tab-pane label="甜品" name="8">甜品</el-tab-pane>
                        <el-tab-pane label="汤" name="9">汤</el-tab-pane>
                        <el-tab-pane label="饮料" name="10">饮料</el-tab-pane>
                    </el-tabs>
                    <button>取消点餐</button>
                    <button>登记</button>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {listFood , getListByPage,findFoodNo} from '../api/food';
import {findTable} from "../api/table";
import {addFood} from "../api/orderItem";
import {gettableOrderVo} from "../api/order";
import {categoryIdList} from "../api/category"
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
        tablequeryParams: {
          tableId: undefined,
          tableName:undefined,
          tableNo: undefined,
        },
        foodqueryParams: {
          foodId: undefined,
          foodName:undefined,
          foodNo: undefined,
        },
         Orderitem: {
            customer_num:undefined
        }, 
        Orderitem2: {
            tableNo: undefined,
            orderNo: undefined,
        },
        category: {

        },
        orderItemList:[], 
        orderItemList2:[],    
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
                this.tablequeryParams = response.data;
            });
            categoryIdList(this.category).then((response) =>{
                this.category =response.data;
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
            addFood(this.tableOrderVo.tableNo,this.tableOrderVo.orderNo,this.tableOrderVo.foodNo).then((response) => {
                this.orderItemList=response.data;
                // for(var i in this.orderItemList){
                //     var orderitemlist=new Object();
                //     orderitemlist.id=i;
                //     orderitemlist.foodno=this.orderItemList[i].foodNo;
                //     orderitemlist.foodquantity=this.orderItemList[i].foodQuantity;
                //     orderitemlist.foodprice=this.orderItemList[i].foodPrice;
                //     findFoodNo(foodNo).then((response) =>{
                //         this.foodqueryParams = response.data;
                //         orderitemlist.foodname=this.foodqueryParams.foodName;
                //         console.log(orderitemlist);
                //         this.orderItemList2.push(orderitemlist);
                        
                //         console.log(this.orderItemList2);
                //     });
                //     // setTimeout(() =>{
                        
                //     // })
                    
                // }
            }); 
            // findFoodNo(foodNo).then((response) =>{
            //             this.foodqueryParams = response.data;
                        
                        
            //         });
            
           


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
         handleSelectionChange(val) {
        this.multipleSelection = val;
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

.el-pagination{
    width: 150px;
}
  
</style>
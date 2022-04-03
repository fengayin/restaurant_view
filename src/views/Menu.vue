<template>
    <div class="menu" >
        <el-container style="height:610px">
            <el-aside width="400px">
                <div >  
                    <div style="text-align: left; height:60px ">
                        <span lable="桌号">桌号:{{tablequeryParams.tableNo}}</span><br>
                        <span>人数：</span>
                        <el-input-number v-model="Orderitem.customer_num" size="mini" :min="1" :max="10"></el-input-number><br>
                        
                        
                    </div>
                    <div  > 
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
                            height="535px"
                            style="width: 100% "
                            show-summary
                            >
                            <el-table-column
                                type="index"
                                >
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="名字"
                            >
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
                                <el-button  type="text" size="small" @click="handledeleteFood(scope.$index,orderItemList)">减少</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-aside>
            <el-container>
                <el-main >
                    <el-tabs v-model="activeName" @tab-click="handleClick" style="height:520px ">
                        <!-- <el-tab-pane label="全部" name="1" >
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
                        </el-tab-pane> -->
                        <el-tab-pane label="套餐" name="2">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(combo) in comboList" :key="combo.comboId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{combo.comboName}}</span><br>  
                                        <span>￥{{combo.comboPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" >添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="饭" name="3">
                             <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(rice) in riceList" :key="rice.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{rice.foodName}}</span><br>  
                                        <span>￥{{rice.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(rice.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="意面" name="4">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(pasta) in pastaList" :key="pasta.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{pasta.foodName}}</span><br>  
                                        <span>￥{{pasta.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(pasta.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="披萨" name="5">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(pizza) in pizzaList" :key="pizza.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{pizza.foodName}}</span><br>  
                                        <span>￥{{pizza.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(pizza.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="牛排" name="11">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(steak) in steakList" :key="steak.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{steak.foodName}}</span><br>  
                                        <span>￥{{steak.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(steak.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="沙拉" name="6">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(sala) in salaList" :key="sala.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{sala.foodName}}</span><br>  
                                        <span>￥{{sala.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(sala.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小吃" name="7">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(snack) in snackList" :key="snack.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{snack.foodName}}</span><br>  
                                        <span>￥{{snack.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(snack.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="甜品" name="8">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(dessert) in dessertList" :key="dessert.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{dessert.foodName}}</span><br>  
                                        <span>￥{{dessert.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(dessert.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="汤" name="9">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(soup) in soupList" :key="soup.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{soup.foodName}}</span><br>  
                                        <span>￥{{soup.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(soup.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="饮料" name="10">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(drink) in drinkList" :key="drink.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{drink.foodName}}</span><br>  
                                        <span>￥{{drink.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(drink.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <button type="text" class="button" @click="deleteVo(Orderitem.tableId)">取消点餐</button>
                    <button type="text" class="button" @click="comfirm()">登记</button>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {listFood , getListByPage,findFoodNo} from '../api/food';
import {findTable} from "../api/table";
import {addFood,deleteFood,comfirmOrder} from "../api/orderItem";
import {gettableOrderVo,deleteVo} from "../api/order";
import {listCategory,IdCategory} from "../api/category";
import {listCombo} from "../api/combo";
import axios from 'axios';
import Qs from 'qs';
export default {
    data() {
      return {
          // 遮罩层
        loading: false,
        activeName: '2',
        foodList: [],
        comboList:[],
        drinkList:[],
        pastaList:[],
        riceList:[],
        snackList:[],
        pizzaList:[],
        soupList:[],
        salaList:[],
        dessertList:[],
        steakList:[],
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
            // listCategory(this.category).then((response) =>{
            //     this.category =response.data;
            // });
            listCombo(this.comboList).then((response) =>{
                this.comboList =response.data;
            });

            IdCategory(1).then((response) =>{
                this.drinkList = response.data.foods;
            });
            IdCategory(2).then((response) =>{
                this.pastaList = response.data.foods;
            });
            IdCategory(3).then((response) =>{
                this.riceList = response.data.foods;
            });
            IdCategory(4).then((response) =>{
                this.snackList = response.data.foods;
            });
            IdCategory(5).then((response) =>{
                this.pizzaList = response.data.foods;
            });
            IdCategory(6).then((response) =>{
                this.soupList = response.data.foods;
            });
            IdCategory(7).then((response) =>{
                this.salaList = response.data.foods;
            });
            IdCategory(8).then((response) =>{
                this.dessertList = response.data.foods;
            });
            IdCategory(9).then((response) =>{
                this.steakList = response.data.foods;
            });
        },
        getInfo(){
            let list = this;
            list.tableOrder = this.$route.params.tableOrder;
            this.Orderitem.customer_num=this.tableOrder.customer_num;
            this.Orderitem.tableId=this.tableOrder.tableId;
            findTable(this.tableOrder.tableId).then((response) => {
                this.tablequeryParams = response.data;
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
        },
        deleteVo(tableId){
            deleteVo(tableId).then((response) =>{  
            })
            this.$router.push({name:'Ordering'})
        },
        handledeleteFood(index,orderItemList){
            // var changetableordervo=this.$qs.stringify({
            //     "tableNo":this.tableOrderVo.tableNo,
            //     "orderNo":this.tableOrderVo.orderNo,
            //     "foodNo":orderItemList[index].foodNo,
            // });
            // var changetableordervo={};
            // changetableordervo.foodNo=orderItemList[index].foodNo;
            // changetableordervo.tableNo=this.tableOrderVo.tableNo;
            // changetableordervo.orderNo=this.tableOrderVo.orderNo;
            // this.$axios({
            //     methods:"post",
            //     url:'/api/orderItem/deleteFood',
            //     data:Qs.stringify(changetableordervo)
            // })
            // .then(function(res){
            //     console.log(res)
            // })
            // .catch(function(err){
            //     console.log(err)
            // })
            // deleteFood(changetableordervo).then((response) =>{
            //     // this.orderItemList=response.data;
            // })
            // let changetableordervo = new URLSearchParams();
            // changetableordervo.append('foodNo','fooddri1');
            // changetableordervo.append('tableNo','this.tableOrderVo.tableNo');
            // changetableordervo.append('orderNo','this.tableOrderVo.orderNo');
            // this.$axios({
            //     methods:"post",
            //     url:'/api/orderItem/deleteFood',
            //     data:changetableordervo
            // }).then((res)=>{
            //     undefined
            // })
            this.tableOrderVo.foodNo=orderItemList[index].foodNo;
            deleteFood(this.tableOrderVo).then((response) =>{
                this.orderItemList=response.data;
            })
            
        },
        
        comfirm(){
            console.log(this.tableOrderVo)
            comfirmOrder(this.tableOrderVo).then((response) =>{
               
            })
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
.el-table {
overflow: visible !important;

}
.el-pagination{
    width: 150px;
}
  
</style>
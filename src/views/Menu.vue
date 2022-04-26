<template>
    <div class="menu" >
        <el-container style="height:610px">
            <el-aside width="400px">
                <div >  
                    <div style="text-align: left; height:60px ">
                        <span lable="桌号">桌号:{{tablequeryParams.tableNo}}</span><br>
                        <span>人数：</span>
                        <el-input-number v-model="Orderitem.customer_num" size="mini" :min="1" :max="10" @change="customerNumchange(Orderitem.customer_num)"></el-input-number><br>
                        
                        
                    </div>
                    <div  > 
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
                            prop="details"
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
                    <el-tabs v-model="activeName"  style="height:520px ">
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
                            <div style="margin-left:1%;margin-right:1%;height:420px;overflow:auto" >
                                    <div style="margin-top:10px">   
                                        <el-descriptions class="margin-top" title="1" :column="3" border>
                                            <template slot="extra">
                                                <el-button type="primary" size="small" @click="addComboOrder(combo1.comboNo,combo1.comboItems[0].food.foodName,combo1.comboItems[1].food.foodName,combo1.comboItems[2].food.foodName)">添加</el-button>
                                            </template>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                套餐名
                                            </template>
                                            {{combo1.comboName}}
                                            </el-descriptions-item>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                价格
                                            </template>
                                            {{combo1.comboPrice}}
                                            </el-descriptions-item>
                                            <el-descriptions-item >
                                            <template slot="label" >
                                                套餐内容
                                            </template>
                                                <div v-for="food in combo1.comboItems" :key="foodId">
                                                            {{food.food.foodName}}
                                                </div> 
                                            </el-descriptions-item>
                                        </el-descriptions>
                                    </div>
                                    <div style="margin-top:10px">   
                                        <el-descriptions class="margin-top" title="2" :column="3" border>
                                            <template slot="extra">
                                                <el-button type="primary" size="small" @click="addComboOrder(combo2.comboNo,combo2.comboItems[0].food.foodName,combo2.comboItems[1].food.foodName,combo2.comboItems[2].food.foodName)">添加</el-button>
                                            </template>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                套餐名
                                            </template>
                                            {{combo2.comboName}}
                                            </el-descriptions-item>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                价格
                                            </template>
                                            {{combo2.comboPrice}}
                                            </el-descriptions-item>
                                            <el-descriptions-item >
                                            <template slot="label" >
                                                套餐内容
                                            </template>
                                            <div v-for="food in combo2.comboItems" :key="foodId">
                                                            {{food.food.foodName}}
                                                        </div> 
                                            </el-descriptions-item>
                                        </el-descriptions>
                                    </div>
                                    <div style="margin-top:10px">   
                                        <el-descriptions class="margin-top" title="3" :column="3" border>
                                            <template slot="extra">
                                                <el-button type="primary" size="small" @click="addComboOrder(combo3.comboNo,combo3.comboItems[0].food.foodName,combo3.comboItems[1].food.foodName,combo3.comboItems[2].food.foodName)">添加</el-button>
                                            </template>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                套餐名
                                            </template>
                                            {{combo3.comboName}}
                                            </el-descriptions-item>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                价格
                                            </template>
                                            {{combo3.comboPrice}}
                                            </el-descriptions-item>
                                            <el-descriptions-item >
                                            <template slot="label" >
                                                套餐内容
                                            </template>
                                            <div v-for="food in combo3.comboItems" :key="foodId">
                                                            {{food.food.foodName}}
                                                        </div> 
                                            </el-descriptions-item>
                                        </el-descriptions>
                                    </div>
                                    <div style="margin-top:10px">   
                                        <el-descriptions class="margin-top" title="4" :column="3" border>
                                            <template slot="extra">
                                                <el-button type="primary" size="small" @click="addComboOrder(combo4.comboNo,combo4_drink,combo4_rice,combo4_snack)">添加</el-button>
                                            </template>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                套餐名
                                            </template>
                                            {{combo4.comboName}}
                                            </el-descriptions-item>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                价格
                                            </template>
                                            {{combo4.comboPrice}}
                                            </el-descriptions-item>
                                            <el-descriptions-item >
                                            <template slot="label" >
                                                套餐内容
                                            </template>
                                            <div >
                                                <span>饮料:</span>
                                                <template>
                                                    <input type="radio" v-model="combo4_drink" :value="combo4.comboItems[0].food.foodName" >{{combo4.comboItems[0].food.foodName}}</input>
                                                    <input type="radio" v-model="combo4_drink" :value="combo4.comboItems[1].food.foodName" >{{combo4.comboItems[1].food.foodName}}</input>
                                                </template>
                                            </div>
                                            <div>
                                                <span>饭:</span>
                                                <template>
                                                    <input type="radio" v-model="combo4_rice" :value="combo4.comboItems[2].food.foodName">{{combo4.comboItems[2].food.foodName}}</input>
                                                    <input type="radio" v-model="combo4_rice" :value="combo4.comboItems[3].food.foodName">{{combo4.comboItems[3].food.foodName}}</input>
                                                </template>
                                            </div>
                                            <div>
                                                <span>小吃:</span>
                                                <template>
                                                    <input type="radio" v-model="combo4_snack" :value="combo4.comboItems[4].food.foodName">{{combo4.comboItems[4].food.foodName}}</input>
                                                    <input type="radio" v-model="combo4_snack" :value="combo4.comboItems[5].food.foodName">{{combo4.comboItems[5].food.foodName}}</input>
                                                </template>
                                            </div>
                                            </el-descriptions-item>
                                        </el-descriptions>
                                    </div>
                                    <div style="margin-top:10px">   
                                        <el-descriptions class="margin-top" title="5" :column="3" border>
                                            <template slot="extra">
                                                <el-button type="primary" size="small"  @click="addComboOrder(combo5.comboNo,combo5_pasta,combo5_pizza,combo5_soup)">添加</el-button>
                                            </template>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                套餐名
                                            </template>
                                            {{combo5.comboName}}
                                            </el-descriptions-item>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                价格
                                            </template>
                                            {{combo5.comboPrice}}
                                            </el-descriptions-item>
                                            <el-descriptions-item >
                                            <template slot="label" >
                                                套餐内容
                                            </template>
                                            <div >
                                                <span>意面:</span>
                                                <template>
                                                    <input type="radio" v-model="combo5_pasta" :value="combo5.comboItems[0].food.foodName" >{{combo5.comboItems[0].food.foodName}}</input>
                                                    <input type="radio" v-model="combo5_pasta" :value="combo5.comboItems[1].food.foodName" >{{combo5.comboItems[1].food.foodName}}</input>
                                                    <input type="radio" v-model="combo5_pasta" :value="combo5.comboItems[2].food.foodName" >{{combo5.comboItems[2].food.foodName}}</input>
                                                </template>
                                            </div>
                                            <div>
                                                <span>披萨:</span>
                                                <template>
                                                    <input type="radio" v-model="combo5_pizza" :value="combo5.comboItems[3].food.foodName">{{combo5.comboItems[3].food.foodName}}</input>
                                                    <input type="radio" v-model="combo5_pizza" :value="combo5.comboItems[4].food.foodName">{{combo5.comboItems[4].food.foodName}}</input>
                                                </template>
                                            </div>
                                            <div>
                                                <span>汤:</span>
                                                <template>
                                                    <input type="radio" v-model="combo5_soup" :value="combo5.comboItems[5].food.foodName">{{combo5.comboItems[5].food.foodName}}</input>
                                                    <input type="radio" v-model="combo5_soup" :value="combo5.comboItems[6].food.foodName">{{combo5.comboItems[6].food.foodName}}</input>
                                                </template>
                                            </div>
                                            </el-descriptions-item>
                                        </el-descriptions>
                                    </div>
                                    <div style="margin-top:10px">   
                                        <el-descriptions class="margin-top" title="6" :column="3" border>
                                            <template slot="extra">
                                                <el-button type="primary" size="small"  @click="addComboOrder(combo6.comboNo,combo6_snack,combo6_salad,combo6_dessert)">添加</el-button>
                                            </template>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                套餐名
                                            </template>
                                            {{combo6.comboName}}
                                            </el-descriptions-item>
                                            <el-descriptions-item>
                                            <template slot="label">
                                                价格
                                            </template>
                                            {{combo6.comboPrice}}
                                            </el-descriptions-item>
                                            <el-descriptions-item >
                                            <template slot="label" >
                                                套餐内容
                                            </template>
                                            <div >
                                                <span>小吃:</span>
                                                <template>
                                                    <input type="radio" v-model="combo6_snack" :value="combo6.comboItems[0].food.foodName" >{{combo6.comboItems[0].food.foodName}}</input>
                                                    <input type="radio" v-model="combo6_snack" :value="combo6.comboItems[1].food.foodName" >{{combo6.comboItems[1].food.foodName}}</input>
                                                </template>
                                            </div>
                                            <div>
                                                <span>沙拉:</span>
                                                <template>
                                                    <input type="radio" v-model="combo6_salad" :value="combo6.comboItems[2].food.foodName">{{combo6.comboItems[2].food.foodName}}</input>
                                                    <input type="radio" v-model="combo6_salad" :value="combo6.comboItems[3].food.foodName">{{combo6.comboItems[3].food.foodName}}</input>
                                                </template>
                                            </div>
                                            <div>
                                                <span>甜品:</span>
                                                <template>
                                                    <input type="radio" v-model="combo6_dessert" :value="combo6.comboItems[4].food.foodName">{{combo6.comboItems[4].food.foodName}}</input>
                                                    <input type="radio" v-model="combo6_dessert" :value="combo6.comboItems[5].food.foodName">{{combo6.comboItems[5].food.foodName}}</input>
                                                </template>
                                            </div>
                                            </el-descriptions-item>
                                        </el-descriptions>
                                    </div>
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
                                            <el-button type="text" class="button" @click="addSteak(steak.foodNo)">添加</el-button>                    
                                        </div>                
                                        </div>                
                                        </el-card>                
                                    </div>            
                                    </el-col>        
                                    </el-row>    
                            </div>
                            <el-dialog title="请选择" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
                                <el-form >
                                    <el-form-item label="酱汁"  :label-width="formLabelWidth">
                                    <el-select v-model="specification.sauce"  placeholder="请选择酱汁">
                                        <el-option 
                                        v-for="item in specificationlist[0].specificationItems"
                                        :key="item.specificationId"
                                        :label="item.specificationName"
                                        :value="item.specificationName">
                                        </el-option>
                                    </el-select>
                                    </el-form-item>
                                    <el-form-item label="熟度"  :label-width="formLabelWidth">
                                    <el-select v-model="specification.maturity"  placeholder="请选择酱汁">
                                        <el-option 
                                        v-for="item in specificationlist[1].specificationItems"
                                        :key="item.specificationId"
                                        :label="item.specificationName"
                                        :value="item.specificationName">
                                        </el-option>
                                    </el-select>
                                    </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="cancelhandleAddSteak">取 消</el-button>
                                    <el-button type="primary" @click="addSteakOrder(specification.sauce,specification.maturity)">确 定</el-button>
                                </div>
                                </el-dialog>
                        </el-tab-pane>
                        <el-tab-pane label="沙拉" name="6">
                            <div style="margin-left:1%;margin-right:1%;height:420px ">
                                <el-row>            
                                    <el-col :span="4" v-for="(salad) in saladList" :key="salad.foodId" :offset="1" >                
                                    <div style="margin-top:15px">                    
                                        <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                        <div>                    
                                        <span>{{salad.foodName}}</span><br>  
                                        <span>￥{{salad.foodPrice}}</span><br>                  
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="addFoodOrder(salad.foodNo)">添加</el-button>                    
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
                    <div>
                        <el-button type="primary" size="medium" class="button" @click="deleteVo(Orderitem.tableId)">取消点餐</el-button>
                        <el-button type="primary" size="medium" class="button" @click="comfirm()">登记</el-button>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {listFood , getListByPage} from '../api/food';
import {findTable} from "../api/table";
import {addFood,deleteFood,comfirmOrder} from "../api/orderItem";
import {gettableOrderVo,deleteVo} from "../api/order";
import {IdCategory} from "../api/category";
import {IdCombo} from "../api/combo";
import {listSpecification} from "../api/specification"
import {updateCustomerNum} from "../api/customer"
export default {
    data() {
      return {
          // 遮罩层
        loading: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        activeName: '2',
        combo4_drink: undefined,
        combo4_rice: undefined,
        combo4_snack: undefined,
        combo5_pasta: undefined,
        combo5_pizza: undefined,
        combo5_soup: undefined,
        combo6_snack: undefined,
        combo6_salad: undefined,
        combo6_dessert: undefined,
        combo1:[],
        combo2:[],
        combo3:[],
        combo4:[],
        combo5:[],
        combo6:[],
        foodList: [],
        drinkList:[],
        pastaList:[],
        riceList:[],
        snackList:[],
        pizzaList:[],
        soupList:[],
        saladList:[],
        dessertList:[],
        steakList:[],
        specificationlist:[],
        tableOrderVo:{
          tableNo: undefined,
          orderNo: undefined,
          foodNo: undefined,
          details: undefined,
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
        specification: {
            sauce:undefined,
            maturity:undefined,
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
            IdCombo(1).then((response) =>{
                this.combo1 =response.data;
            });
            IdCombo(2).then((response) =>{
                this.combo2 =response.data;
            });
            IdCombo(3).then((response) =>{
                this.combo3 =response.data;
            });
            IdCombo(4).then((response) =>{
                this.combo4 =response.data;
            });
            IdCombo(5).then((response) =>{
                this.combo5 =response.data;
            });
            IdCombo(6).then((response) =>{
                this.combo6 =response.data;
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
                this.saladList = response.data.foods;
            });
            IdCategory(8).then((response) =>{
                this.dessertList = response.data.foods;
            });
            IdCategory(9).then((response) =>{
                this.steakList = response.data.foods;
            });
            listSpecification(this.specificationlist).then((response) =>{
                this.specificationlist = response.data;
            });
        },
        getInfo(){
            let list = this;
            list.tableOrder = this.$route.params.tableOrder;
            console.log(typeof this.tableOrder);
            
            if((typeof this.tableOrder) =="object"){
                this.Orderitem.customer_num=this.tableOrder.customer_num;
                this.Orderitem.tableId=this.tableOrder.tableId;
                findTable(this.tableOrder.tableId).then((response) => {
                    this.tablequeryParams = response.data;
                });
                gettableOrderVo(this.tableOrder.tableId).then((response) => {
                    this.Orderitem2 = response.data;
                });
            }
            else{
                let list = this;
                list.oldtableOrder = this.$route.params.oldtableOrder;
                this.tablequeryParams.tableNo=this.oldtableOrder.tableNo;
                this.Orderitem2 = this.oldtableOrder;
                console.log(this.Orderitem2)
            }
            
            
        },
        customerNumchange(customer_num){
            this.Orderitem.customer_num=customer_num
            updateCustomerNum(this.Orderitem2.orderNo,this.Orderitem.customer_num).then((response)=>{
                console.log(this.Orderitem2.orderNo)
                console.log(this.Orderitem.customer_num)
            })
        },
        addFoodOrder(foodNo){
            this.tableOrderVo.tableNo=this.Orderitem2.tableNo;
            this.tableOrderVo.orderNo=this.Orderitem2.orderNo;
            this.tableOrderVo.foodNo=foodNo;
            this.tableOrderVo.details=null;
            addFood(this.tableOrderVo).then((response) => {
                this.orderItemList=response.data;
                
            }); 
        },
        addComboOrder(comboNo,food1,food2,food3){
            this.tableOrderVo.tableNo=this.Orderitem2.tableNo;
            this.tableOrderVo.orderNo=this.Orderitem2.orderNo;
            this.tableOrderVo.foodNo=comboNo;
            if(food1==null||food2==null||food3==null){
                this.$notify.error({
                title: '错误',
                message: '每一项都需要选择'
            });
            }
            else{
                this.tableOrderVo.details=food1+","+food2+","+food3;
                console.log(this.tableOrderVo)
                addFood(this.tableOrderVo).then((response) => {
                    this.orderItemList=response.data;
                    this.combo4_drink=undefined;
                    this.combo4_rice=undefined;
                    this.combo4_snack=undefined;
                    this.combo5_pasta=undefined;
                    this.combo5_pizza= undefined;
                    this.combo5_soup=undefined;
                    this.combo6_snack= undefined;
                    this.combo6_salad=undefined;
                    this.combo6_dessert=undefined;

                }); 
                console.log(food1);
                console.log(food2);
                console.log(food3);
            }
            
            
        },
        addSteak(foodNo){
            this.dialogFormVisible= true;
            this.tableOrderVo.tableNo=this.Orderitem2.tableNo;
            this.tableOrderVo.orderNo=this.Orderitem2.orderNo;
            this.tableOrderVo.foodNo=foodNo;
        },
        addSteakOrder(sauce,maturity){
            if(sauce==null||maturity==null){
                this.$notify.error({
                title: '错误',
                message: '每一项都需要选择'
            });
            }
            else{
            this.tableOrderVo.details=sauce+","+maturity;
            addFood(this.tableOrderVo).then((response) => {
                    this.orderItemList=response.data;
                    console.log(sauce+maturity);
                    console.log(this.tableOrderVo);
                });
                this.specification.sauce=undefined;
                this.specification.maturity=undefined;
                this.dialogFormVisible=false;
            }
        },
        cancelhandleAddSteak(){
            this.dialogFormVisible=false;
            this.tableOrderVo.foodNo=undefined;
            this.tableOrderVo.details=undefined;
            this.specification.sauce=undefined;
            this.specification.maturity=undefined;
        },
        deleteVo(tableId){
            deleteVo(tableId).then((response) =>{  
            })
            this.$router.push({name:'Ordering'})
        },
        handledeleteFood(index,orderItemList){
            this.tableOrderVo.foodNo=orderItemList[index].foodNo;
            deleteFood(this.tableOrderVo).then((response) =>{
                this.orderItemList=response.data;
            })
            
        },
        
        comfirm(){
            comfirmOrder(this.tableOrderVo).then((response) =>{
               this.$router.push({name:'Ordering'})
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
<template>
    <div class="kitchen">
        <el-tabs v-model="activeName">
            <el-tab-pane label="套餐" name="1">
                <div style="margin-left:1%;margin-right:1%;height:420px ">
                    <el-row>            
                        <el-col :span="4" v-for="(combo,index) in comboList" :key="combo.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{combo.details}}</span><br>                   
                                        <span>x{{combo.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(combo.orderItemId,'combo')" >制作完成</el-button>                    
                                        </div>                
                                    </div>                
                                </el-card>                
                            </div>            
                        </el-col>        
                    </el-row>    
                </div>            
            </el-tab-pane>
            <el-tab-pane label="饭" name="2">
                <div style="margin-left:1%;margin-right:1%;height:420px ">
                    <el-row>            
                        <el-col :span="4" v-for="(rice,index) in riceList" :key="rice.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{rice.details}}</span><br>                   
                                        <span>x{{rice.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(rice.orderItemId,'rice')" >制作完成</el-button>                    
                                        </div>                
                                    </div>                
                                </el-card>                
                            </div>            
                        </el-col>        
                    </el-row>    
                </div> 
            </el-tab-pane>
            <el-tab-pane label="意面" name="3">
                <div style="margin-left:1%;margin-right:1%;height:420px ">
                    <el-row>            
                        <el-col :span="4" v-for="(pasta,index) in pastaList" :key="pasta.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{pasta.details}}</span><br>                   
                                        <span>x{{pasta.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(pasta.orderItemId,'pasta')" >制作完成</el-button>                    
                                        </div>                
                                    </div>                
                                </el-card>                
                            </div>            
                        </el-col>        
                    </el-row>    
                </div> 
            </el-tab-pane>
            <el-tab-pane label="披萨" name="4">
                <div style="margin-left:1%;margin-right:1%;height:420px ">
                    <el-row>            
                        <el-col :span="4" v-for="(pizza,index) in pizzaList" :key="pizza.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{pizza.details}}</span><br>                   
                                        <span>x{{pizza.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(pizza.orderItemId,'pizza')" >制作完成</el-button>                    
                                        </div>                
                                    </div>                
                                </el-card>                
                            </div>            
                        </el-col>        
                    </el-row>    
                </div>
            </el-tab-pane>
            <el-tab-pane label="牛排" name="5">
                <div style="margin-left:1%;margin-right:1%;height:420px ">
                    <el-row>            
                        <el-col :span="4" v-for="(steak,index) in steakList" :key="steak.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{steak.details}}</span><br>                   
                                        <span>x{{steak.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(steak.orderItemId,'steak')" >制作完成</el-button>                    
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
                        <el-col :span="4" v-for="(salad,index) in saladList" :key="salad.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{salad.details}}</span><br>                   
                                        <span>x{{salad.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(salad.orderItemId,'salad')" >制作完成</el-button>                    
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
                        <el-col :span="4" v-for="(snack,index) in snackList" :key="snack.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{snack.details}}</span><br>                   
                                        <span>x{{snack.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(snack.orderItemId,'snack')" >制作完成</el-button>                    
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
                        <el-col :span="4" v-for="(dessert,index) in dessertList" :key="dessert.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{dessert.details}}</span><br>                   
                                        <span>x{{dessert.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(dessert.orderItemId,'dessert')" >制作完成</el-button>                    
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
                        <el-col :span="4" v-for="(soup,index) in soupList" :key="soup.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{soup.details}}</span><br>                   
                                        <span>x{{soup.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(soup.orderItemId,'soup')" >制作完成</el-button>                    
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
                        <el-col :span="4" v-for="(drink,index) in drinkList" :key="drink.foodId"  :offset="1" >                
                            <div style="margin-top:15px">                    
                                <el-card :body-style="{ padding: '0px'}" shadow="hover">                                        
                                    <div>     
                                        <span>{{index+1}}</span><br> 
                                        <span>{{drink.details}}</span><br>                   
                                        <span>x{{drink.willMake}}</span><br>                   
                                        <div class="bottom clearfix">                                 
                                            <el-button type="text" class="button" @click="handleMake(drink.orderItemId,'drink')" >制作完成</el-button>                    
                                        </div>                
                                    </div>                
                                </el-card>                
                            </div>            
                        </el-col>        
                    </el-row>    
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import {getMakeList,hasMakeOne} from "../api/orderItem"
export default {
    inject: ['reload'],
    data() {
      return {
        activeName: '1',
        comboList:[],
        drinkList:[],
        pastaList:[],
        riceList:[],
        snackList:[],
        pizzaList:[],
        soupList:[],
        saladList:[],
        dessertList:[],
        steakList:[],
      };
    },
    created(){
        this.getList();
        console.log(this.$data);

    },
    methods: {
        getList() {
            getMakeList("drink").then((response) => {
                this.drinkList = response.data;
                console.log(this.drinkList)
            });
            
            getMakeList("combo").then((response) => {
                this.comboList = response.data;
            });

            getMakeList("pasta").then((response) => {
                this.pastaList = response.data;
            });
            getMakeList("rice").then((response) => {
                this.riceList = response.data;
            });
            getMakeList("snack").then((response) => {
                this.snackList = response.data;
            });
            getMakeList("pizza").then((response) => {
                this.pizzaList = response.data;
            });
            getMakeList("soup").then((response) => {
                this.soupList = response.data;
            });
            getMakeList("salad").then((response) => {
                this.saladList = response.data;
            });
            getMakeList("dessert").then((response) => {
                this.dessertList = response.data;
            });
            getMakeList("steak").then((response) => {
                this.steakList = response.data;
            });
        },

        handleMake(orderItemId,keyWord){
            if(keyWord=="combo"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.comboList = response.data;
                });
            }
            else if(keyWord=="drink"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.drinkList = response.data;
                });
            }
            else if(keyWord=="pasta"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.pastaList = response.data;
                });                
            }
            else if(keyWord=="rice"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.riceList = response.data;
                });                
            }
            else if(keyWord=="snack"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.snackList = response.data;
                });               
            }
            else if(keyWord=="pizza"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.pizzaList = response.data;
                }); 
            }
            else if(keyWord=="soup"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.soupList = response.data;
                }); 
            }
            else if(keyWord=="salad"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.saladList = response.data;
                }); 
            }
            else if(keyWord=="dessert"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.dessertList = response.data;
                }); 
            }
            else if(keyWord=="steak"){
                hasMakeOne(orderItemId,keyWord).then((response) => {
                    this.steakList = response.data;
                }); 
            }
            
        },
    }
}
</script>

<style>

</style>
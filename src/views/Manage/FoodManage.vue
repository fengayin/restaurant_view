<template>
    <div>
        <el-table
            :data="foodList"
            style="width: 100%"
            
            >
            <el-table-column
            type="index"
            label="序号"
            width="150">
            </el-table-column>
            <el-table-column
            label="食物名"
            prop="foodName"
            width="350">
            </el-table-column>
            <el-table-column
            label="价格"
            prop="foodPrice"
            width="250">
            </el-table-column>
            <el-table-column
            label="种类"
            sortable
            prop="category.categoryName"
            width="250">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-button type="primary" @click="handleAdd()">+ 新增</el-button>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, foodList)">修改</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加食物" :visible.sync="dialogAddFormVisible" :modal-append-to-body='false'>
            <div >
                <el-form  :label-position="left"  label-width="80px" class="demo-form-inline">
                    <el-form-item label="食物名">
                        <el-input v-model="addFood.foodName" placeholder="如：柠檬汁"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="食物Id">
                        <el-input v-model="addFood.foodId" placeholder="如：38" ></el-input>
                    </el-form-item> -->
                    <el-form-item label="食物No">
                        <el-input v-model="addFood.foodNo" placeholder="如：fooddrink5" ></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input v-model="addFood.foodPrice" placeholder="如：20" ></el-input>
                    </el-form-item>
                    <el-form-item label="种类">
                        <el-select v-model="addFood.categoryId" placeholder="请选择种类">
                            <el-option 
                            v-for="item in ListCategory"
                            :key="item.categoryId"
                            :label="item.categoryName"
                            :value="item.categoryId">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="handleAddFood()">确定添加</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改食物信息" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
            <div >
                <el-form :inline="true" :label-position="left"  label-width="80px" class="demo-form-inline">
                    <el-form-item label="食物名">
                        <el-input v-model="food.foodName" ></el-input>
                    </el-form-item>
                    <el-form-item label="食物Id">
                        <el-input v-model="food.foodId"  :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="食物No">
                        <el-input v-model="food.foodNo"  :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input v-model="food.foodPrice"  ></el-input>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input v-model="foodcategory.categoryName" placeholder="种类" :disabled="true" ></el-input>
                    </el-form-item>
                    
                </el-form>
                <el-button type="primary" @click="handleeditFood()">确定修改</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import {listFood,exidFood,addFood} from "../../api/food"
import {ListCategory,IdCategory} from "../../api/category"

export default {
    inject: ['reload','User'],

    data() {
        return {
            foodList:[],
            food:[],
            addFood:{
                categoryId: undefined,
                comboItems:[],
                category:{
                    categoryId:undefined,
                    categoryName:undefined,
                    categoryNo:undefined,
                },
                foodName: undefined,
                foodNo: undefined,
                foodPrice: undefined
            },
            categoryList:[],
            foodcategory:[],
            dialogAddFormVisible:false,
            dialogFormVisible:false,
        }
    },
    created(){
        this.getList();
    },
    methods: {
        getList(){
            listFood(this.foodList).then((response) => {
                this.foodList=response.data
            })
            ListCategory(this.ListCategory).then((response) => {
                this.ListCategory=response.data
            })
        },
        handleAdd(){
            this.dialogAddFormVisible=true;
        },
        handleAddFood(){
             if(this.addFood.categoryId==undefined||
                this.addFood.foodName==undefined||
                this.addFood.foodNo==undefined||
                this.addFood.foodPrice==undefined
                ){
                this.$notify.error({
                        title: '错误',
                        message: '请填入信息'
                    });
            }
            else{
                IdCategory(this.addFood.categoryId).then((response)=>{
                    this.addFood.category.categoryId=response.data.categoryId;
                    this.addFood.category.categoryName=response.data.categoryName;
                    this.addFood.category.categoryNo=response.data.categoryNo;
                    
                })
                console.log(this.addFood)
                addFood(this.addFood).then((response) => {
                    this.dialogAddFormVisible=false;
                    this.addFood.categoryId=undefined;
                    this.addFood.foodName=undefined;
                    this.addFood.foodNo=undefined;
                    this.addFood.foodPrice=undefined;
                    console.log(this.foodList)
                    this.reload();
                })
            }
        },
        handleEdit(index, foodList) {
            this.food=foodList[index];
            this.foodcategory=foodList[index].category;
            this.dialogFormVisible=true;
            
      },
      handleeditFood(){
          if(this.food.foodName==""||this.food.foodPrice==""){
                this.$notify.error({
                        title: '错误',
                        message: '请填入信息'
                    });
            }
            else{
                exidFood(this.food).then((response) => {
                        
                        this.dialogFormVisible=false;
                    })
            }
      },
     
    },
}
</script>

<style >

</style>
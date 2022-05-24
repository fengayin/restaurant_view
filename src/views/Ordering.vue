<template>

  <div class="table" :data="tableList" >
    <!-- <div v-for="(table) in tableList" >
      <div class="tablecard">
        <el-col :span="6" >
          <el-card shadow="never"  >
              <div v-if="table.state == true" >
                <img class="img"  
                  src="@/assets/not_use.png" 
                  >
              </img>
              </div>
              <div v-else-if="table.state == false">
                <img class="img2" 
                  src="@/assets/in_use.png"
                  >
                </img>
              </div>
            <div >
              <span>{{table.tableName}}</span>
              <div class="bottom clearfix">
                <el-button type="text"  @click="handleAddTable(table.tableId) " class="button" >点餐</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div> -->
    <div class="tablecard">
      <el-row :gutter="20">
      <el-col :span="6" >
      <el-card shadow="never">
        <div v-if="istableVO1 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO1 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[0].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[0].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card> 
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO2 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO2 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[1].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[1].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO3 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO3 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[2].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[2].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO4 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO4 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
           />
        </div>
        <div>
          <span>{{tableList[3].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[3].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO5 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
           />
        </div>
        <div v-else-if="istableVO5 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
           />
        </div>
        <div>
          <span>{{tableList[4].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[4].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO6 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO6 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[5].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[5].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO7 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO7 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[6].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[6].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO8 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO8 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[7].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[7].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO9 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO9 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[8].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[8].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO10 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO10 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[9].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[9].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO11 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO11 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[10].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[10].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      <el-col  :span="6">
      <el-card shadow="never">
        <div v-if="istableVO12 == true" >
          <img class="img1"  
            src="@/assets/not_use.png" 
            />
        </div>
        <div v-else-if="istableVO12 == false">
          <img class="img2" 
            src="@/assets/in_use.png"
            />
        </div>
        <div>
          <span>{{tableList[11].tableName}}</span>
          <div class="bottom clearfix">
            <el-button type="text"  @click="handleAddTable(tableList[11].tableId) " class="button" >点餐</el-button>
          </div>
        </div>
      </el-card>
      </el-col>
      </el-row>
    </div>
    <el-dialog title="请选择" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
      <el-form :model="tableOrderVo,queryParams"
          ref="queryForm">
        <el-form-item label="餐桌" prop="tableNo"  :label-width="formLabelWidth">
          <span >{{queryParams.tableNo}}</span>
        </el-form-item>
        <el-form-item label="人数"  prop="customer_num" :label-width="formLabelWidth">
          <el-select v-model="tableOrderVo.customer_num" placeholder="请选择人数">
            <el-option 
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="员工编号" prop= "staffId" :label-width="formLabelWidth">
          <el-select v-model="tableOrderVo.staffId" placeholder="请选择员工编号">
            <el-option
                  v-for="(staff,staffId) in staffList"
                  :key="staffId"
                  :label="staff.staffName"
                  :value="staff.staffId"
                  @keyup.enter.native="handleAddTableVo"
                >
             </el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelhandleAddTableVo">取 消</el-button>
        <el-button type="primary" @click="handleAddTableVo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {listTable,findTable} from "../api/table";
//import {listStaff} from "../api/staff";
import {createOrder , gettableOrderVo} from "../api/order";
  export default {
    data() {
      
      return {
        
         // 遮罩层
        loading: false,
        
        tableList: [],
        istableVO1: undefined,
        istableVO2: undefined,
        istableVO3: undefined,
        istableVO4: undefined,
        istableVO5: undefined,
        istableVO6: undefined,
        istableVO7: undefined,
        istableVO8: undefined,
        istableVO9: undefined,
        istableVO10: undefined,
        istableVO11: undefined,
        istableVO12: undefined,

        queryParams: {
          tableId: undefined,
          tableName:undefined,
          tableNo: undefined,
        },
        tableOrderVo: {
          tableId: undefined,
          customer_num: undefined,
          orderNo: undefined,
        },
       
        dialogFormVisible: false,
        // zhuangtai:[],
        
        formLabelWidth: '120px',
        
        options: [{
          value: 1,
          label: 1
        }, {
          value: 2,
          label: 2
        }, {
          value: 3,
          label: 3
        }, {
          value: 4,
          label: 4
        }],
        value: ''
      }
      
    },
   
    created() {
      this.getList();
      console.log(this.$data)
      // //查询所有staff赋值staffList
      // listStaff().then((response) =>{
      //     this.staffList = response.data;
      // });
       
    },
    methods: {
      /** 查询桌子列表 */
      getList() {
        this.loading = true;
        // var idList= [];
        // var zhuangtai2=[]
        // listTable(this.tableList).then((response) => {
        //   this.tableList = response.data;
        //   this.loading = false;
        //   this.tableList.forEach((obj)=>{idList.push(obj.tableId)})
        //   for(var key in idList){
        //     gettableOrderVo(idList[key]).then((response) =>{
        //       zhuangtai2.push((typeof response.data)=="object" ? false : true);
        //       console.log(key)
        //       console.log(response.data)
        //       console.log(typeof response.data)
        //     });
        //   };
          
        //   setTimeout(() => {
        //     console.log(zhuangtai2)
        //     for(var i in zhuangtai2){
        //       this.tableList[i].state=zhuangtai2[i]
        //     }
        //   }, 1200);
        //   setTimeout( ()=> {
        //     this.$forceUpdate();
        //   }, 2000)
        
        // });
        // listStaff(this.queryParams).then((response) => {
        //   this.staffList = response.data;
        //   this.loading = false;
        // });
          listTable(this.tableList).then((response) => {
            this.tableList = response.data;
            this.loading = false;
          });
          gettableOrderVo(1).then((response) =>{
              this.istableVO1= ((typeof response.data)=="object" ? false : true)
          });
           gettableOrderVo(2).then((response) =>{
            this.istableVO2=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(3).then((response) =>{
            this.istableVO3=((typeof response.data)=="object" ? false : true)
          });
           gettableOrderVo(4).then((response) =>{
            this.istableVO4=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(5).then((response) =>{
            this.istableVO5=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(6).then((response) =>{
            this.istableVO6=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(7).then((response) =>{
            this.istableVO7=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(8).then((response) =>{
            this.istableVO8=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(9).then((response) =>{
            this.istableVO9=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(10).then((response) =>{
            this.istableVO10=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(11).then((response) =>{
            this.istableVO11=((typeof response.data)=="object" ? false : true)
          });
          gettableOrderVo(12).then((response) =>{
            this.istableVO12=(typeof response.data)=="object" ? false : true
          });

      }, 
      handleAddTable(val){
        this.tableOrderVo.tableId=parseInt(val);
        gettableOrderVo(val).then((response) =>{
              var OldtableOrderVo= response.data;
              if((typeof OldtableOrderVo) == "object"){
                this.$router.push({name:'Menu',params:{oldtableOrder : OldtableOrderVo}})
              }
              else{
                  this.dialogFormVisible= true;
                  findTable(this.tableOrderVo.tableId).then((response) => {
                  this.queryParams= response.data;
                });
        }
            });
            
        
        },

      handleAddTableVo(){
        
        if(this.tableOrderVo.customer_num==null){
          this.$notify.error({
            title: '错误',
            message: '请输入人数'
          });
        }
        else{
          createOrder(this.tableOrderVo.tableId,this.tableOrderVo.customer_num).then((response)=>{
            this.tableOrderVo.customer_num=response.data.customer_num;
            this.tableOrderVo.tableId=response.data.tableId;
        })  
       
        this.$router.push({name:'Menu',params:{tableOrder : this.tableOrderVo}})
        }
      
        
        
      },
      cancelhandleAddTableVo(){
        this.dialogFormVisible=false;
        this.tableOrderVo.tableId=undefined;
        this.tableOrderVo.customer_num=undefined;

      }
      
    },
  }
</script>
<style>
  .body{
    text-align: center;
    
    }
  .table{
    margin:0 auto;
  }
  .img1 {
     width: 100px; 
     height: 100px;
  }
  .img2 {
     width: 100px;
     height: 100px; 
  }
  /* .el-form-item{
    margin:  0;
  } */
</style>
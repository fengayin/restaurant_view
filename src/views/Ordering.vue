<template>
  <div class="table" :data="tableList" >
    <div v-for="(table,tableId) in tableList" :key="tableId" >
      <div class="tablecard">
        <el-col :span="6" >
          <el-card shadow="never"  >
              <div v-if="table.tableId !== tableOrderVo.tableId" >
                <img class="img"  
                  src="@/assets/not_use.png" 
                  >
              </img>
              </div>
              <div v-else-if="table.tableId === tableOrderVo.tableId">
                <img class="img2" 
                  src="@/assets/in_use.png"
                  >
                </img>
              </div>
            <div >
              <!-- <el-form  >
                  <el-form-item   >{{ table.tableNo }}</el-form-item>
              </el-form> -->
              <span>{{table.tableName}}</span>
              <div class="bottom clearfix">
                <el-button type="text"  @click="handleAddTable(table.tableId),dialogFormVisible= true " class="button" >点餐</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>
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
      // //查询所有staff赋值staffList
      // listStaff().then((response) =>{
      //     this.staffList = response.data;
      // });
       
    },
    methods: {
      /** 查询桌子列表 */
      getList() {
        this.loading = true;
        listTable(this.tableList).then((response) => {
          this.tableList = response.data;
          this.loading = false;
        });
        // listStaff(this.queryParams).then((response) => {
        //   this.staffList = response.data;
        //   this.loading = false;
        // });
        
      },
      // getVo(tableId){
      //   var tableOrderVolist={};
      //   gettableOrderVo(tableId).then((response) =>{
      //     tableOrderVolist = response;
      //     console.log(tableId);
      //     console.log(tableOrderVolist);
      //     return tableOrderVolist = null ? false : true ;
      //   }); 
        
        
        
      // },
      
      handleAddTable(val){
        this.tableOrderVo.tableId=parseInt(val);
          findTable(this.tableOrderVo.tableId).then((response) => {
          this.queryParams= response.data;
        });
        
        },

      handleAddTableVo(){
        
        createOrder(this.tableOrderVo.tableId,this.tableOrderVo.customer_num).then((response)=>{
          // this.tableOrderVo=response.data;
          this.tableOrderVo.tableId=response.data.tableId;
          this.tableOrderVo.customer_num=response.data.customer_num;
        })  
       
        this.$router.push({name:'Menu',params:{tableOrder : this.tableOrderVo}})
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
  .img {
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
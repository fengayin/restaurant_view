<template>
   <div>
       <el-table
            :data="staffList"
            border
            style="width: 100%">
            <el-table-column
            type="index"
            label="序号"
            width="120">
            </el-table-column>
            <el-table-column
            prop="staff.staffName"
            label="姓名"
            width="200">
            </el-table-column>
            <el-table-column
            prop="staff.staffNo"
            label="员工号"
            width="200">
            </el-table-column>
            <el-table-column
            prop="staff.staffTel"
            label="联系电话"
            width="200">
            </el-table-column>
            <el-table-column
            label="角色"
            prop="role"
            width="200">
            </el-table-column>

            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-button type="primary" @click="handleAdd()">+ 新增</el-button>
            </template>
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.$index,staffList)" >修改信息</el-button>
                <el-button type="text" size="small" @click="editRole(scope.$index,staffList)"  >修改角色</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加员工" :visible.sync="dialogAddFormVisible" :modal-append-to-body='false'>
            <div >
                <el-form  inline="true"  :label-position="left"  label-width="80px" class="demo-form-inline">
                   <el-form-item label="姓名">
                        <el-input v-model="staffobj.staffName" placeholder="如：有钱"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="员工Id">
                        <el-input  v-model="staffobj.staffId" placeholder="如：8" ></el-input>
                    </el-form-item> -->
                    <el-form-item label="员工号">
                        <el-input v-model="staffobj.staffNo" placeholder="如：C03" ></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model ="staffobj.staffAge" placeholder="如：25"></el-input>
                    </el-form-item>
                     <el-form-item label="性别" style="padding-right: 105px;width: 190px;">
                        <el-radio v-model="staffobj.staffSex" label="男">男</el-radio>
                        <el-radio v-model="staffobj.staffSex" label="女">女</el-radio>
                    </el-form-item>
                    <el-form-item label="身份证">
                        <el-input v-model="staffobj.satffIdnum" placeholder="如：201925716" ></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model ="staffobj.staffTel" placeholder="如：11253625874"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input  v-model="addStaff.password" ></el-input>
                    </el-form-item>
                    <el-form-item label="角色">
                        <el-select v-model="addStaff.role" placeholder="请选择新角色">
                            <el-option 
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="handleAddStaff()">确定添加</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改用户" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
            <div >
                <!-- <el-descriptions  direction="vertical" :column="4">
                    <el-descriptions-item label="姓名">{{user.staffName}}</el-descriptions-item>
                    <el-descriptions-item label="员工Id">{{user.staffId}}</el-descriptions-item>
                    <el-descriptions-item label="员工号">{{user.staffNo}}</el-descriptions-item>
                    <el-descriptions-item label="年龄">{{user.staffAge}}</el-descriptions-item>
                    <el-descriptions-item label="性别">{{user.staffSex}}</el-descriptions-item>
                    <el-descriptions-item label="身份证">{{user.satffIdnum}}</el-descriptions-item>
                    <el-descriptions-item label="联系电话">{{user.staffTel}}</el-descriptions-item>
                    <el-descriptions-item label="现角色">{{userRole.role}}</el-descriptions-item>
                </el-descriptions> -->
                <el-form :inline="true" :label-position="left"  label-width="80px" class="demo-form-inline">
                    <el-form-item label="姓名">
                        <el-input v-model="user.staffName" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="员工Id">
                        <el-input v-model="user.staffId" placeholder="员工Id" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="员工号">
                        <el-input v-model="user.staffNo" placeholder="员工号" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model="user.staffAge" placeholder="年龄"></el-input>
                    </el-form-item>
                     <el-form-item label="性别">
                        <el-input  v-model="user.staffSex" placeholder="性别" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证">
                        <el-input v-model="user.satffIdnum" placeholder="身份证" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="user.staffTel" placeholder="联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="现角色">
                        <el-input v-model="userRole.role" placeholder="现角色" :disabled="true"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="handleeditUser()">确定修改</el-button>
            </div>
            <!-- <div style="padding-top:10px">
                <el-select v-model="role" placeholder="请选择新角色">
                    <el-option 
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary"  @click="handleeditRole()" >确定修改</el-button>
            </div> -->
        </el-dialog>
        <el-dialog title="修改角色" :visible.sync="dialogeditRoleFormVisible" :modal-append-to-body='false'>
            <div>
                <el-descriptions  direction="vertical" :column="4">
                    <el-descriptions-item label="姓名">{{user.staffName}}</el-descriptions-item>
                    <el-descriptions-item label="员工Id">{{user.staffId}}</el-descriptions-item>
                    <el-descriptions-item label="员工号">{{user.staffNo}}</el-descriptions-item>
                    <el-descriptions-item label="年龄">{{user.staffAge}}</el-descriptions-item>
                    <el-descriptions-item label="性别">{{user.staffSex}}</el-descriptions-item>
                    <el-descriptions-item label="身份证">{{user.satffIdnum}}</el-descriptions-item>
                    <el-descriptions-item label="联系电话">{{user.staffTel}}</el-descriptions-item>
                    <el-descriptions-item label="现角色">{{userRole.role}}</el-descriptions-item>
                </el-descriptions>
            </div>
            <div style="padding-top:10px">
                <el-select v-model="role2" placeholder="请选择新角色">
                    <el-option 
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <br><br>
                <el-button  type="primary"  @click="handleeditRole()" >确定修改</el-button>
            </div>
        </el-dialog>
   </div>
</template> 

<script>
import {listuserRole,editRole,idUserRole} from "../../api/userRole"
import {listStaff,editStaff,addStaff} from "../../api/staff"

export default {
    inject: ['reload','User'],

    data() {
        return {
            loading: false,
            staffList:[],
            dialogFormVisible:false,
            dialogAddFormVisible:false,
            dialogeditRoleFormVisible:false,
            userRole:[],
            sysUserRole:[],
            user:[],
            addStaff:{
                staff:{
                    orders:[
                        // {
                        // staffId:undefined,
                        // }
                    ],
                    satffIdnum:undefined,
                    staffAge:undefined,
                    // staffId:undefined,
                    staffName:undefined,
                    staffNo:undefined,
                    staffSex:undefined,
                    staffTel:undefined,
                },
                password:undefined,
                role:undefined,
               
                
            },
            // addStaff:[],
            // password:undefined,
            staffobj:{
                    orders:[
                        // {
                        // staffId:undefined,
                        // }
                    ],
                    satffIdnum:undefined,
                    staffAge:undefined,
                    // staffId:undefined,
                    staffName:undefined,
                    staffNo:undefined,
                    staffSex:undefined,
                    staffTel:undefined,
                },
            options: [{
                value: "管理员",
                label: "管理员"
                }, {
                value: "服务员",
                label: "服务员"
                }, {
                value: "收银员",
                label: "收银员"
                }],
                role: '',
            options2: [{
                value: 1,
                label: "管理员"
                }, {
                value: 2,
                label: "服务员"
                }, {
                value: 3,
                label: "收银员"
                }],
                role2: ''
        }
    },
    created(){
        this.getList();
    },
    methods: {
        getList(){
            this.loading=true
            listStaff(this.staffList).then((response) => {
                this.staffList=response.data
                console.log(this.staffList)
               
            })
        },
        handleAdd(){
            this.dialogAddFormVisible=true;
            // this.addStaff=this.staffList[0]
            // this.addStaff.role=undefined;
        },

        handleAddStaff(){
            this.addStaff.staff=this.staffobj;
            // this.addStaff.staff.orders[0].staffId=this.staffobj.staffId;
            console.log(this.addStaff)
            if(this.addStaff.role==null||
            this.addStaff.staff.satffIdnum==null||
            this.addStaff.staff.staffAge==null||
            this.addStaff.staff.staffName==null||
            this.addStaff.staff.staffNo==null||
            this.addStaff.staff.staffSex==null||
            this.addStaff.staff.staffTel==null||
            this.addStaff.password==null){
                 this.$notify.error({
                        title: '错误',
                        message: '请填信息'
                    });
            }
            else{
                addStaff(this.addStaff).then((response) =>{
                console.log(this.addStaff)
                this.dialogAddFormVisible=false;
                this.addStaff.role=undefined;
                // this.addStafff.staff.orders[0].staffId=undefined
                this.addStaff.staff.satffIdnum=undefined;
                this.addStaff.staff.staffAge=undefined;
                // this.addStaff.staff.staffId=undefined;
                this.addStaff.staff.staffName=undefined;
                this.addStaff.staff.staffNo=undefined;
                this.addStaff.staff.staffSex=undefined;
                this.addStaff.staff.staffTel=undefined;
                this.addStaff.password=undefined;
                this.reload();
            })
            }
            
        },

        handleClick(index,staffList){
            this.userRole=staffList[index];
            this.user=staffList[index].staff;
            console.log(this.userRole)
            this.dialogFormVisible=true;
            

        },
        handleeditUser(){
            this.userRole.staff=this.user;
            if(this.userRole.staff.staffName==""||this.userRole.staff.sfaffTel==""||this.userRole.staff.staffAge==""){
                 this.$notify.error({
                        title: '错误',
                        message: '请补全信息'
                    });
            }
            else{
                editStaff(this.userRole.staff).then((response) => {
                    this.dialogFormVisible=false;
                })
            }
        },
        editRole(index,staffList){
            this.userRole=staffList[index]
            this.user=staffList[index].staff;
            this.dialogeditRoleFormVisible=true
        },
        handleeditRole(){
            console.log(this.role2)
            if(this.role2===""){
                this.$notify.error({
                        title: '错误',
                        message: '请选择新角色'
                    });
            }
            else{
                console.log(this.userRole.staff.staffId)
                idUserRole(this.userRole.staff.staffId).then((response) => {
                    this.sysUserRole=response.data
                    this.sysUserRole.roleId=this.role2
                    console.log(this.sysUserRole)
                    editRole(this.sysUserRole).then((response) => {
                        this.dialogFormVisible=false;
                        this.reload();
                    })
                })
                
            }
            
        }

    },
}
</script>

<style >

</style>
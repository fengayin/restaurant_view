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
            fixed="right"
            label="操作">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.$index,staffList)" >修改信息</el-button>
                <el-button type="text" size="small" >修改角色</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改用户角色" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
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
                        <el-input v-model="user.staffSex" placeholder="性别" :disabled="true"></el-input>
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
   </div>
</template> 

<script>
// import {listuserRole,editRole} from "../../api/userRole"
import {listStaff,editStaff} from "../../api/staff"

export default {
    inject: ['reload','User'],

    data() {
        return {
            loading: false,
            staffList:[],
            dialogFormVisible:false,
            userRole:[],
            user:[],
            options: [{
                value: 1,
                label: "管理员"
                }, {
                value: 2,
                label: "服务员"
                }, {
                value: 3,
                label: "收银员"
                }],
                role: ''
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
        handleClick(index,staffList){
            this.userRole=staffList[index];
            this.user=staffList[index].staff;
            console.log(this.userRole)
            this.dialogFormVisible=true;
            

        },
        handleeditUser(){
            this.userRole.staff=this.user;
            editStaff(this.userRole).then((response) => {
                console.log(this.userRole)
                this.dialogFormVisible=false;
            })
        },
        handleeditRole(){
            if(this.role==null){
                this.dialogFormVisible=false;
            }
            else{
                this.userRole.role=this.role
                console.log(this.userRole)
                // editRole(this.userRole).then((response) => {
                //     console.log(this.userRole)
                //     this.dialogFormVisible=false;
                // })
            }
            
        }

    },
}
</script>

<style >

</style>
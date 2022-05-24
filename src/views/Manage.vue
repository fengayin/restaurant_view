<template>
    <div class="order">
        <el-container style="border: 1px solid #eee">
            <el-aside style="width:250px;height:500px;overflow:hidden; border:1px solid #eee;"  >
                <el-menu >
                    <el-menu-item style="width:100%" index="FoodManage" @click="reloadRouter('/manage/foodManage')">菜单管理</el-menu-item>
                    <el-menu-item style="width:100%" index="StaffManage" @click="staffreloadRouter('/manage/staffManage')">员工管理</el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main style="height:500px;">
                <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import {manange} from "../api/login";
import {listStaff} from "../api/staff"
export default {
    inject: ['reload','Username'],

    data() {
        return {
            loading: false,
        }
    },
    created() {
        listStaff().then((response) => {
                console.log(response.data)
        })
        console.log(this.$data);

    },
    methods: {
        
        reloadRouter(path) {
            this.$router.replace({
                path:path,
                query: {
                nextPath: path
                }
            });
        },
        staffreloadRouter(path) {
            manange().then((response) => {
                console.log(response.data)
                if(response.data.msg == "管理界面"){
                    this.$router.replace({
                        path:path,
                        query: {
                        nextPath: path
                        }
                    });
                }
                else{
                    
                    this.$notify.error({
                        title: '错误',
                        message: '无法访问'
                    });
                }
                })
        },
    },
}
</script>
<style >
    
</style>
 
<template>
    <div class="order">
        <el-tabs v-model="activeName" style="height:520px ">
            <el-tab-pane label="未结账" name="1">
                <el-table
                    :data="orderList"
                    border
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序号"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="orderNo"
                    label="订单号"
                    width="400">
                    </el-table-column>
                    <el-table-column
                    prop="tableName"
                    label="桌号"
                    width="150">
                    </el-table-column>
                    <!-- <el-table-column
                    prop="city"
                    label="总数量"
                    width="200">
                    </el-table-column> -->
                    <el-table-column
                    prop="totalprice"
                    label="总金额"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="handleClick(scope.row)" >查看</el-button>
                        <el-button type="text" size="small">结账</el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="挂账" name="2">

            </el-tab-pane>
            <el-tab-pane label="已结账" name="3">

            </el-tab-pane>
            <el-tab-pane label="全部订单" name="4">

            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import {listOrder} from "../api/order";
export default {
    data() {
      return {
        activeName: '1',
        loading: false,
        orderList:[],
        }
    },
    created() {
        this.getList();
        console.log(this.$data);

    },
    methods: {
      /** 查询食物列表 */
        getList(){
            this.loading = true;
            listOrder(this.orderList).then((response) => {
                this.orderList = response.data;
                this.loading = false;
            });
        } 
    }
}
</script>
<style >
 
</style>
 
<template>
    <div class="order">
        <el-tabs v-model="activeName" style="height:520px ">
            <el-tab-pane label="未结账" name="1">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    label="序号"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="OrderNo"
                    label="订单号"
                    width="400">
                    </el-table-column>
                    <el-table-column
                    prop="province"
                    label="桌号"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    prop="city"
                    label="总数量"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="总金额"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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

export default {
    data() {
      return {
        activeName: '1',
        }
    }
}
</script>
<style >
 
</style>
 
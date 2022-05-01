<template>
    <div class="order">
        <el-tabs v-model="activeName" style="height:600px " @tab-click="routerchange">
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
                        <el-button type="text" size="small" @click="handleClick(scope.$index,orderList)" >查看</el-button>
                        <el-button type="text" size="small" @click="handleCharge(scope.$index,orderList)">挂账</el-button>
                        <el-button type="text" size="small" @click="handleCheckout(scope.$index,orderList)">结账</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="订单信息" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
                    <div>
                        <el-descriptions class="margin-top" direction="vertical" :column="4"  >
                            <el-descriptions-item label="订单号">{{IdorderList.orderNo}}</el-descriptions-item>
                            <el-descriptions-item label="桌号">{{IdorderList.tableName}}</el-descriptions-item>
                            <el-descriptions-item label="下单时间">{{IdorderList.orderTime}}</el-descriptions-item>
                            <el-descriptions-item label="总金额">{{IdorderList.totalprice}}</el-descriptions-item>
                            <el-descriptions-item label="食物明细">
                                <div v-for="food in IdorderList.orderItems" :key="orderItemId">
                                    {{food.details}} ￥{{food.foodPrice}} x{{food.foodQuantity}}
                                </div> 
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                    </el-dialog>
                    <el-dialog title="请填写"  :visible.sync="chargeFormVisible" :modal-append-to-body='false' :show-close='false'>
                        <div>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="订单编号">
                                    <span>{{charge.orderNo}}</span>
                                </el-form-item>
                                <el-form-item label="单位" >
                                    <el-input v-model="charge.chargeUnit"></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话" >
                                    <el-input v-model="charge.chargeTel"></el-input>
                                </el-form-item>
                                <el-form-item label="员工编号" prop= "staffId" :label-width="formLabelWidth">
                                    <el-select v-model="charge.staffId" placeholder="请选择员工编号">
                                        <el-option
                                            v-for="staff in staffList"
                                            :key="staffId"
                                            :label="staff.staffName"
                                            :value="staff.staffId"
                                            >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                        <div>
                            <el-button type="primary" @click="Addcharge()" >确认</el-button>
                            <el-button type="primary" @click="canclecharge()" >取消</el-button>
                        </div>
                    </el-dialog>
                    <el-dialog title="订单结算" :visible.sync="CheckoutFormVisible" :modal-append-to-body='false' >
                    <div>
                        <div>
                            <div>
                                桌子 {{IdorderList.tableName}} 的顾客本次共消费 {{IdorderList.totalprice}} 元，明细如下：
                            </div>
                            <div v-for="food in IdorderList.orderItems" :key="orderItemId">
                                {{food.details}} ￥{{food.foodPrice}} x{{food.foodQuantity}}
                            </div> 
                            <div slot="footer" class="dialog-footer">
                                <el-button type="primary"  @click="AddCheckout()">确定支付</el-button>
                                <el-button type="primary"  @click="cancelCheckoutFormVisible()">取消支付</el-button>
                            </div>
                        </div>
                    </div>
                    </el-dialog>
                    <el-dialog title="订单结算" :visible.sync="AddCheckoutFormVisible" :modal-append-to-body='false' :show-close='false'>
                    <div>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="实际金额">
                                    <span>{{IdorderList.totalprice}}</span>
                                </el-form-item>
                                <el-form-item label="折扣">
                                    <el-select v-model="discount" placeholder="请选择折扣" @change="selectChange()">
                                        <el-option 
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="应收款">
                                    <span>{{bill.receipts}}</span>
                                </el-form-item>
                                <el-form-item label="员工编号" prop= "staffId" :label-width="formLabelWidth">
                                    <el-select v-model="bill.staffId" placeholder="请选择员工编号">
                                        <el-option
                                            v-for="staff in staffList"
                                            :key="staffId"
                                            :label="staff.staffName"
                                            :value="staff.staffId"
                                            >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button type="primary"  @click="handlecashpayment()">现金支付</el-button>
                                <el-button type="primary"  @click="handlemobilepayment()">移动支付</el-button>
                                <el-button type="primary"  @click="cancelAddCheckoutFormVisible()">取消支付</el-button>
                            </div>
                        </div>
                    </el-dialog>
                    <el-dialog  :visible.sync="mobilepaymentVisible" :modal-append-to-body='false' :show-close='false'>
                        <div>
                            <span>请出示付款码</span>
                        </div>
                        <div>
                            <el-button type="primary"  @click="Addmobilepayment()">确认支付</el-button>
                        </div>
                    </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="挂账" name="2">
                <el-table 
                        :data="chargeList"
                        border
                        style="width: 100%">
                        <el-table-column
                        type="index"
                        label="序号"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="chargeNo"
                        label="挂账单编号"
                        width="300">
                        </el-table-column>
                        <el-table-column
                        prop="chargeUnit"
                        label="挂账单位"
                        width="250">
                        </el-table-column>
                        <el-table-column
                        prop="chargeTel"
                        label="挂账人联系方式"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="staffId"
                        label="负责员工id"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"  >查看</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
            </el-tab-pane>
                <el-tab-pane label="已结账" name="3">
                    <el-table
                        :data="billList"
                        border
                        style="width: 100%">
                        <el-table-column
                        type="index"
                        label="序号"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="billNo"
                        label="账单编号"
                        width="300">
                        </el-table-column>
                        <el-table-column
                        prop="payTime"
                        label="支付时间"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="receivable"
                        label="应收金额"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="receipts"
                        label="实收金额"
                        width="150">
                        </el-table-column>
                        <el-table-column
                        prop="staffId"
                        label="负责员工id"
                        width="100">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"  >查看</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            <el-tab-pane label="全部订单" name="4">
                    <el-table
                        :data="listOrder"
                        border
                        style="width: 100%">
                        <el-table-column
                        type="index"
                        label="序号"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="orderNo"
                        label="订单编号"
                        width="400">
                        </el-table-column>
                        <el-table-column
                        prop="tableName"
                        label="桌号"
                        width="250">
                        </el-table-column>
                        <el-table-column
                        prop="totalprice"
                        label="总金额"
                        width="250">
                        </el-table-column>
                        <el-table-column
                        fixed="right"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small"  @click="OrderCheck(scope.$index,listOrder)">查看</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-dialog title="订单信息" :visible.sync="OrderVisible" :modal-append-to-body='false'>
                    <div>
                        <el-descriptions class="margin-top" direction="vertical" :column="4"  >
                            <el-descriptions-item label="订单号">{{IdorderList.orderNo}}</el-descriptions-item>
                            <el-descriptions-item label="桌号">{{IdorderList.tableName}}</el-descriptions-item>
                            <el-descriptions-item label="下单时间">{{IdorderList.orderTime}}</el-descriptions-item>
                            <el-descriptions-item label="总金额">{{IdorderList.totalprice}}</el-descriptions-item>
                            <el-descriptions-item label="食物明细">
                                <div v-for="food in IdorderList.orderItems" :key="orderItemId">
                                    {{food.details}} ￥{{food.foodPrice}} x{{food.foodQuantity}}
                                </div> 
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                    </el-dialog>
                </el-tab-pane>   

            <el-tab-pane label="报表" name="5">
                <el-container style="border: 1px solid #eee">
                    <el-aside style="width:250px;height:500px;overflow:hidden"  >
                        <el-menu unique-opened="true">
                        <el-submenu index="1" style="width:100%">
                            <template slot="title">
                                门店业绩报表
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="OrderSumCount" @click="reloadRouter('/order/orderSumCount')">全部业绩报表</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="OptionalOrderSumCount" @click="reloadRouter('/order/optionalorderSumCount')">查询业绩报表</el-menu-item>
                            </el-menu-item-group>
                            
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2" style="width:100%">
                            <template slot="title">
                                菜品业绩报表
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="CategoryCount" @click="reloadRouter('/order/categoryCount')" >菜品类型业绩报表</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="ComboCount" @click="reloadRouter('/order/comboCount')">套餐业绩报表</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <el-menu-item index="FoodCount" @click="reloadRouter('/order/foodCount')">每份菜品业绩报表</el-menu-item>
                            </el-menu-item-group>
                            </el-submenu>
                        </el-submenu>
                        </el-menu>
                    </el-aside>
                    <el-container>
                        <el-main style="height:500px;">
                        <router-view></router-view>
                        </el-main>
                    </el-container>
                </el-container>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import {listOrder,IdOrder,unSettledList} from "../api/order";

import {listStaff} from "../api/staff";
import {payBill,ListBill} from "../api/bill";
import {payCharge,ListCharge} from "../api/charge";
export default {
    inject: ['reload'],
    data() {
        return {
            activeName: '1',
            loading: false,
            orderList:[],
            IdorderList:[],
            staffList:[],
            billList: [],
            chargeList:[],
            listOrder:[],
            dialogFormVisible: false,
            chargeFormVisible: false,
            CheckoutFormVisible: false,
            AddCheckoutFormVisible:false,
            mobilepaymentVisible:false,
            OrderVisible:false,
            bill:{
                orderId:undefined,
                receipts:undefined,
                staffId:undefined,
            },
            charge:{
                orderId: undefined,
                orderNo: undefined,
                chargeUnit: undefined,
                chargeTel: undefined,
                staffId: undefined,
                totalprice: undefined,
            },
            TableOrderVo:{
                tableNo: undefined,
                orderNo: undefined,
                foodNo: undefined,
                details: undefined,
            },
            options: [{
                value: 0.5,
                label: "五折"
                }, {
                value: 0.7,
                label: "七折"
                }, {
                value: 0.8,
                label: "八折"
                }, {
                value: 0.9,
                label: "九折"
                }, {
                value: 1,
                label: "原价"
                }],
                discount: ''
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
            unSettledList(this.orderList).then((response) => {
                this.orderList = response.data;
                this.loading = false;
            });
            
            listStaff(this.staffList).then((response) => {
                this.staffList = response.data;
            });
            ListBill(this.billList).then((response) => {
                this.billList = response.data;
            });
            ListCharge(this.chargeList).then((response) => {
                this.chargeList = response.data;
            });
            listOrder(this.listOrder).then((response) => {
                this.listOrder = response.data;
            });
        },
        handleClick(index,orderList){
            this.IdorderList=orderList[index];
            console.log(this.IdorderList);
            this.dialogFormVisible=true;
            
            
        }, 
        handleCharge(index,orderList){
            this.charge.orderId=orderList[index].orderId;
            this.charge.orderNo=orderList[index].orderNo;
            this.charge.totalprice=orderList[index].totalprice;
            this.chargeFormVisible=true;

        },
        Addcharge(){
            if(this.charge.staffId==null){
                this.$notify.error({
                    title: '错误',
                    message: '请输入员工号'
                });
            }
            else{
                payCharge(this.charge.orderId,this.charge.chargeUnit,this.charge.chargeTel,this.charge.staffId).then((response) => {
                    this.charge.orderId=undefined;
                    this.charge.orderNo=undefined;
                    this.charge.chargeUnit=undefined;
                    this.charge.chargeTel=undefined;
                    this.charge.staffId=undefined;
                    this.charge.totalprice=undefined;
                    this.chargeFormVisible=false;
                    this.reload();
                });
            }
        },
        canclecharge(){
            this.charge.orderId=undefined;
            this.charge.orderNo=undefined;
            this.charge.chargeUnit=undefined;
            this.charge.chargeTel=undefined;
            this.charge.staffId=undefined;
            this.charge.totalprice=undefined;
            this.chargeFormVisible=false;
        },
        handleCheckout(index,orderList){
            this.bill.orderId=orderList[index].orderId;
            this.IdorderList=orderList[index];
            this.CheckoutFormVisible=true;
        },
        AddCheckout(){
            this.CheckoutFormVisible=false;
            this.discount=this.options[4].value;
            this.bill.receipts=(this.discount)*(this.IdorderList.totalprice);
            this.AddCheckoutFormVisible=true;
        },
        selectChange(){
            this.bill.receipts=(this.discount)*(this.IdorderList.totalprice);
        },
        handlecashpayment(){
            if(this.bill.staffId==null){
                this.$notify.error({
                    title: '错误',
                    message: '请输入员工号'
                });
            }
            else{
                payBill(this.bill.orderId,this.bill.receipts,this.bill.staffId).then((response) => {
                    this.AddCheckoutFormVisible=false;
                    this.bill.orderId=undefined;
                    this.bill.receipts=undefined;
                    this.bill.staffId=undefined;
                    this.reload();
            });
            }
            
        },
        handlemobilepayment(){
            if(this.bill.staffId==null){
                this.$notify.error({
                    title: '错误',
                    message: '请输入员工号'
                });
            }
            else{
            this.AddCheckoutFormVisible=false;
            this.mobilepaymentVisible=true;
            }
        },
        Addmobilepayment(){
            payBill(this.bill.orderId,this.bill.receipts,this.bill.staffId).then((response) => {
                this.bill.orderId=undefined;
                this.bill.receipts=undefined;
                this.bill.staffId=undefined;
                this.mobilepaymentVisible=false;
                this.reload();
            });
        },
        cancelCheckoutFormVisible(){
            this.CheckoutFormVisible=false;
        },
        cancelAddCheckoutFormVisible(){
            this.bill.orderId=undefined;
            this.bill.receipts=undefined;
            this.bill.staffId=undefined;
            this.AddCheckoutFormVisible=false;
        },
        OrderCheck(index,listOrder){
             this.IdorderList=listOrder[index];
            console.log(this.IdorderList);
            this.OrderVisible=true;
        },
        // reloadRouter(path) {

        //     console.log(this.$route.path)
        // },
        reloadRouter(path) {
            this.$router.replace({
                path:path,
                query: {
                nextPath: path
                }
            });
        },
        routerchange(tab, event){
            const url ='/order'
            if (this.$route.path !== url) {
                this.$router.push(url)
            }
        }
    },
}
</script>
<style >
    
    .el-table__fixed-right::before {
       background-color: transparent !important; 
    }
    
</style>
 
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
                                    {{food.foodNo}} ￥{{food.foodPrice}} x{{food.foodQuantity}}
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
                                {{food.foodNo}} ￥{{food.foodPrice}} x{{food.foodQuantity}}
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

            </el-tab-pane>
            <el-tab-pane label="已结账" name="3">

            </el-tab-pane>
            <el-tab-pane label="全部订单" name="4">

            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import {listOrder,IdOrder} from "../api/order";
import {listStaff} from "../api/staff";
import {payBill} from "../api/bill";
import {payCharge} from "../api/charge";
export default {
    data() {
        return {
            activeName: '1',
            loading: false,
            orderList:[],
            IdorderList:[],
            staffList:[],
            dialogFormVisible: false,
            chargeFormVisible: false,
            CheckoutFormVisible: false,
            AddCheckoutFormVisible:false,
            mobilepaymentVisible:false,
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
            discount:undefined,
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
                value: ''
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
            listStaff(this.staffList).then((response) => {
                this.staffList = response.data;
            });
            
        },
        handleClick(index,orderList){
            this.IdorderList=orderList[index];
            this.dialogFormVisible=true;
        }, 
        handleCharge(index,orderList){
            this.charge.orderId=orderList[index].orderId;
            this.charge.orderNo=orderList[index].orderNo;
            this.charge.totalprice=orderList[index].totalprice;
            this.chargeFormVisible=true;

        },
        Addcharge(){
            payCharge(this.charge.orderId,this.charge.chargeUnit,this.charge.chargeTel,this.charge.staffId).then((response) => {
                this.charge.orderId=undefined;
                this.charge.orderNo=undefined;
                this.charge.chargeUnit=undefined;
                this.charge.chargeTel=undefined;
                this.charge.staffId=undefined;
                this.charge.totalprice=undefined;
                this.chargeFormVisible=false;
            });
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
            console.log(this.discount)
            console.log(this.IdorderList.totalprice)
            console.log(this.bill.receipts)
        },
        handlecashpayment(){
            payBill(this.bill.orderId,this.bill.receipts,this.bill.staffId).then((response) => {
                this.AddCheckoutFormVisible=false;
                this.bill.orderId=undefined;
                this.bill.receipts=undefined;
                this.bill.staffId=undefined;
                
            });
        },
        handlemobilepayment(){
            this.AddCheckoutFormVisible=false;
            this.mobilepaymentVisible=true;
            
        },
        Addmobilepayment(){
            payBill(this.bill.orderId,this.bill.receipts,this.bill.staffId).then((response) => {
                this.bill.orderId=undefined;
                this.bill.receipts=undefined;
                this.bill.staffId=undefined;
                this.mobilepaymentVisible=false;
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
        }

    },
}
</script>
<style >
 
</style>
 
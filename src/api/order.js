import request from '@/utils/request'
//查询订单列表
export function listOrder(query) {
  return request({
    url: '/order/list',
    method: 'get',
    params: query
  })
  
}
//查询未结账订单列表
export function unSettledList(query) {
  return request({
    url: '/order/unSettledList',
    method: 'get',
    params: query
  })
  
}


//创建订单
export function createOrder(tableId,customer_num) {
    return request({
      url: '/order/createOrder?tableId='+tableId+'&customer_num='+customer_num,
      method: 'get',
    })
    
  }

//通过主键查询单条数据
export function IdOrder(orderId) {
  return request({
    url: '/order/'+orderId,
    method: 'get',
  })
}



//查询订单Vo列表
export function gettableOrderVo(tableId) {
  return request({
    url: '/order/getVo?tableId='+tableId,
    method: 'get',
  })
  
}
//删除Vo
export function deleteVo(tableId) {
  return request({
    url: '/order/deleteVo?tableId='+tableId,
    method: 'get',
  })
  
}

//通过编号删除订单
export function deleteOrder(orderNo,tableId) {
  return request({
    url: '/order/deleteOrder?orderNo='+orderNo+'&tableId='+tableId,
    method: 'delete',
  })
  
}

//销售年月日报表
export function countSummaryCalculation(span) {
  return request({
    url: '/order/countSummaryCalculation?span='+span,
    method: 'get',
  })
  
}

//查询某一年的各月销售、查询某一月的各日销售
export function optionalSummaryCalculation(year,month) {
  return request({
    url: '/order/optionalSummaryCalculation?year='+year+'&month='+month,
    method: 'get',
  })
  
}
//单独查询某一年或者某一月、某一日的数据
export function showCalculation(year,month,day) {
  return request({
    url: '/order/showCalculation?year='+year+'&month='+month+'&day='+day,
    method: 'get',
  })
  
}
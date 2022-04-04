import request from '@/utils/request'
//查询订单列表
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

//修改数据
export function changeOrder(query) {
  return request({
    url: '/order',
    method: 'put',
    data:query
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


import request from '@/utils/request'
//查询订单列表
export function createOrder(tableId,customer_num) {
    return request({
      url: '/order/createOrder?tableId='+tableId+'&customer_num='+customer_num,
      method: 'get',
    })
    
  }
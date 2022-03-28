import request from '@/utils/request'
//查询订单列表
export function createOrder(query) {
    return request({
      url: '/order/createOrder',
      method: 'get',
      params: query
    })
  }
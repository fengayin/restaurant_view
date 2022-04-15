import request from '@/utils/request'

//查询账单列表
export function ListBill(query) {
    return request({
      url: '/bill/list',
      method: 'get',
      params: query
    })
  }

export function payBill(orderId,receipts,staffId){
    return request({
        url:"/bill/payBill/?orderId="+orderId+"&receipts="+receipts+"&staffId="+staffId,
        method:"get",
    });
  }
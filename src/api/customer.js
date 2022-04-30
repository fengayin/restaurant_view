import request from '@/utils/request'

//更改人数
export function updateCustomerNum(orderNo,customerNum) {
    return request({
      url: '/customer/updateCustomerNum?orderNo='+orderNo+'&customerNum='+customerNum,
      method: 'get',
    })
  }

  //根据订单编号显示顾客人数
export function showCustomerNum(orderNo) {
  return request({
    url: '/customer/showCustomerNum?orderNo='+orderNo,
    method: 'get',
  })
}

import request from '@/utils/request'

//查询账单列表
export function updateCustomerNum(orderNo,customerNum) {
    return request({
      url: '/customer/updateCustomerNum?orderNo='+orderNo+'&customerNum='+customerNum,
      method: 'get',
    })
  }
import request from '@/utils/request'

//查询挂账列表
export function ListCharge(query) {
    return request({
      url: '/charge/list',
      method: 'get',
      params: query
    })
  }


export function payCharge(orderId,chargeUnit,chargeTel,staffId){
    return request({
        url:"/charge/payCharge/?orderId="+orderId+"&chargeUnit="+chargeUnit+"&chargeTel="+chargeTel+"&staffId="+staffId,
        method:"get",
    });
  }
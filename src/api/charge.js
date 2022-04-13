import request from '@/utils/request'

export function payCharge(orderId,chargeUnit,chargeTel,staffId){
    return request({
        url:"/charge/payCharge/?orderId="+orderId+"&chargeUnit="+chargeUnit+"&chargeTel="+chargeTel+"&staffId="+staffId,
        method:"get",
    });
  }
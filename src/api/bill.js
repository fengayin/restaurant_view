import request from '@/utils/request'

export function payBill(orderId,receipts,staffId){
    return request({
        url:"/bill/payBill/?orderId="+orderId+"&receipts="+receipts+"&staffId="+staffId,
        method:"get",
    });
  }
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

//销售年月日报表
export function billcountSummaryCalculation(span) {
  return request({
    url: '/bill/countSummaryCalculation?span='+span,
    method: 'get',
  })
  
}
//查询某一年的各月销售、查询某一月的各日销售
export function billoptionalSummaryCalculation(year,month) {
  return request({
    url: '/bill/optionalSummaryCalculation?year='+year+'&month='+month,
    method: 'get',
  })
  
}
//单独查询某一年或者某一月、某一日的数据
export function billshowCalculation(year,month,day) {
  return request({
    url: '/bill/showCalculation?year='+year+'&month='+month+'&day='+day,
    method: 'get',
  })
  
}
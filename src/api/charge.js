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

  //销售年月日报表
export function chargecountSummaryCalculation(span) {
  return request({
    url: '/charge/countSummaryCalculation?span='+span,
    method: 'get',
  })
  
}
//查询某一年的各月销售、查询某一月的各日销售
export function chargeoptionalSummaryCalculation(year,month) {
  return request({
    url: '/charge/optionalSummaryCalculation?year='+year+'&month='+month,
    method: 'get',
  })
  
}
//单独查询某一年或者某一月、某一日的数据
export function chargeshowCalculation(year,month,day) {
  return request({
    url: '/charge/showCalculation?year='+year+'&month='+month+'&day='+day,
    method: 'get',
  })
  
}
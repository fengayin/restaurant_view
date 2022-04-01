import request from '@/utils/request'
export function addFood(tableNo,orderNo,foodNo){
    return request({
        url:"/orderItem/addFood?tableNo="+tableNo+"&orderNo="+orderNo+"&foodNo="+foodNo,
        methods:"get",
    });
  }
  
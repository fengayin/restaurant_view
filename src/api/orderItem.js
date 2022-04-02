import request from '@/utils/request'
//添加菜品到订单缓存中
export function addFood(tableNo,orderNo,foodNo){
    return request({
        url:"/orderItem/addFood?tableNo="+tableNo+"&orderNo="+orderNo+"&foodNo="+foodNo,
        methods:"get",
    });
  }
  //在缓存中删除菜品
  export function deleteFood(query){
    return request({
        url:"/orderItem/deleteFood",
        methods:"post",
        params: query
    });
  } 

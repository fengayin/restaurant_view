import request from '@/utils/request'
import qs from 'qs'
//添加菜品到订单缓存中
export function addFood(tableNo,orderNo,foodNo){
    return request({
        url:"/orderItem/addFood?tableNo="+tableNo+"&orderNo="+orderNo+"&foodNo="+foodNo,
        method:"get",
    });
  }
  // //在缓存中删除菜品
  // export function deleteFood(query){
  //   let sendObject={
  //     url:"/orderItem/deleteFood",
  //     methods:'post',
  //     headers:{

  //     },
  //     data:query
  //   };
  //   sendObject.data=qs.stringify(query);
  //   return request(sendObject)
  // } 
  //在缓存中删除菜品
  export function deleteFood(query){
    return request({
        url:"/orderItem/deleteFood",
        method:"post",
        data: query,
    });
  } 
  //将确认下单的菜单添加到数据库
  export function comfirmOrder(query){
    return request({
        url:"/orderItem/comfirmOrder",
        method:"post",
        data: query,
    });
  } 

  
  // //在缓存中删除菜品
  // export function deleteFood(tableNo,orderNo,foodNo){
  //   return request({
  //       url:"/orderItem/deleteFood?tableNo="+tableNo+"&orderNo="+orderNo+"&foodNo="+foodNo,
  //       methods:"get",
  //   });
  // } 

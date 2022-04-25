import request from '@/utils/request'
import qs from 'qs'
//添加菜品到订单缓存中
export function addFood(query){
    return request({
        url:"/orderItem/addFood",
        method:"post",
        data: query,
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

//返回不同种类的后厨加工列表
export function getMakeList(keyWord) {
  return request({
    url: '/orderItem/getMakeList/?keyWord='+keyWord,
    method: 'get',
  })
  
}
//减少已加工orderItem的数量
export function hasMakeOne(orderItemId,keyWord) {
  return request({
    url: '/orderItem/hasMake/?orderItemId='+orderItemId+'&keyWord='+keyWord,
    method: 'get',
  })
  
}
//菜品种类报表
export function countFoodCategoryByCategoryNo(query) {
  return request({
    url: '/orderItem/countFoodCategoryByCategoryNo',
    method: 'get',
    data:query,
  })
  
}
//套餐报表
export function countCombo(query) {
  return request({
    url: '/orderItem/countCombo',
    method: 'get',
    data:query,
  })
  
}
//统计每一类中不同食物的报表
export function countFoodByCategoryNo(categoryNo) {
  return request({
    url: '/orderItem/countFoodByCategoryNo?categoryNo='+categoryNo,
    method: 'get',
  })
  
}



  // //在缓存中删除菜品
  // export function deleteFood(tableNo,orderNo,foodNo){
  //   return request({
  //       url:"/orderItem/deleteFood?tableNo="+tableNo+"&orderNo="+orderNo+"&foodNo="+foodNo,
  //       methods:"get",
  //   });
  // } 

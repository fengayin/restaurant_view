import request from '@/utils/request'
//查询食物列表
export function listFood(query) {
    return request({
      url: '/food/list',
      method: 'get',
      params: query
    })
  }
  //查询食物名字
export function findFoodNo(foodNo) {
  return request({
    url: '/food/queryByFoodNo/'+ foodNo,
    method: 'get',
  })
}
//分页查询
export function getListByPage(query){
  return request({
      url:"/food/page",
      methods:"get",
      params:query
  });
}

import request from '@/utils/request'
//查询食物列表
export function listFood(query) {
    return request({
      url: '/food/list',
      method: 'get',
      params: query
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

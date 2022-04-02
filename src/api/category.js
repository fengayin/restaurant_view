import request from '@/utils/request'
//查询类别列表
export function ListCategory(query) {
    return request({
      url: '/category/list',
      method: 'get',
      params: query
    })
  }

  //查询类别单条数据
export function IdCategory(categoryId) {
  return request({
    url: '/category/'+categoryId,
    method: 'get',
  })
}
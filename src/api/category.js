import request from '@/utils/request'
//查询类别单挑数据
export function categoryIdList(query) {
    return request({
      url: '/category/list',
      method: 'get',
      params: query
    })
  }
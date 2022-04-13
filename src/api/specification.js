import request from '@/utils/request'
//查询规格列表
export function listSpecification(query) {
    return request({
      url: '/specification/list',
      method: 'get',
      params: query
    })
  }
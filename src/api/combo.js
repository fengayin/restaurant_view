import request from '@/utils/request'
//查询套餐列表
export function listCombo(query) {
    return request({
      url: '/combo/list',
      method: 'get',
      params: query
    })
  }
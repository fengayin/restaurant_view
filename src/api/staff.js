import request from '@/utils/request'
//查询员工列表
export function listStaff(query) {
    return request({
      url: '/staff/list',
      method: 'get',
      params: query
    })
  }
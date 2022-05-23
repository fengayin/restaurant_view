import request from '@/utils/request'
//查询员工列表
export function listStaff(query) {
    return request({
      url: '/staff/list',
      method: 'get',
      params: query
    })
  }
//根据id找名字
  export function fineName(id) {
    return request({
      url: '/staff/fineName?id='+id,
      method: 'get',
    })
  }

  
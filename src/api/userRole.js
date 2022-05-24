import request from '@/utils/request'
//
export function listuserRole(query) {
    return request({
      url: '/sysUserRole/list',
      method: 'get',
      params: query
    })
  }
//
  export function editRole(query) {
    return request({
      url: '/sysUserRole/edit',
      method: 'put',
      data:query
    })
  }

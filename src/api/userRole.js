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
      url: '/sysUserRole',
      method: 'put',
      data:query
    })
  }

  export function idUserRole(id) {
    return request({
      url: '/sysUserRole/'+id,
      method: 'get',
    })
  }

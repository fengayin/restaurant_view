import request from '@/utils/request'
//查询员工列表
export function listStaff(query) {
    return request({
      url: '/staff/list',
      method: 'get',
      params: query
    })
  }

  export function editStaff(query) {
    return request({
      url: '/staff',
      method: 'put',
      data:query
    })
  }

  // export function addStaff(staff,password,role) {
  //   return request({
  //     url: '/staff',
  //     method: 'post',
  //     data:staff,password,role
  //   })
  // }

  
  export function fineName(id) {
    return request({
      url: '/staff/fineName?id='+id,
      method: 'get',
    })
  }

  export function addStaff(query) {
    return request({
      url: '/staff',
      method: 'post',
      data:query
    })
  }



  
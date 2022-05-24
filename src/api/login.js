import request from '@/utils/request'

export function isLogin(query) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: query,
    })
  }

  export function manange() {
    return request({
      url: '/auth/manage',
      method: 'get',
    })
  }

  
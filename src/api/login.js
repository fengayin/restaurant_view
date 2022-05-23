import request from '@/utils/request'
//查询类别列表
export function isLogin(query) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: query,
    })
  }
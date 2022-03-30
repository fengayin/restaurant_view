import request from '@/utils/request'
export function addFood(query){
    return request({
        url:"/orderItem/addFood",
        methods:"get",
        params:query
    });
  }
  
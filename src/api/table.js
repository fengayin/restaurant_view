import request from '@/utils/request'
//  
export function listTable(query) {
    return request({
      url: '/table/list',
      method: 'get',
      params: query
    });
  }
 //根据桌子id查询桌子名字
export function findTable(tableId) {
  return request({
    url: "/table/" + tableId,
    method: 'get',
  });
}

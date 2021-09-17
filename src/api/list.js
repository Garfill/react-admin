import request from './request'

export function getList(data) {
  return request({
    url: '/article/list',
    method: 'get',
    data
  })
}
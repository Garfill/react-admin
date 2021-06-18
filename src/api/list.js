import request from './request'

export function getArticle(data) {
  return request({
    url: '/article/list',
    method: 'get',
    data
  })
}
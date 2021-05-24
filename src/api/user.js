import request from './request'

export function login() {
  return request({
    url: '/user/login',
    method: 'post',
  })
}

export function getUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params,
  })
}
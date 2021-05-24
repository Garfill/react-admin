import Mock from 'mockjs';
import user from './user'

import { param2Obj } from './utils';

export const mocks = [
  ...user
];

export function mockXHR() {

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  mocks.forEach(item => {
    Mock.mock(
      new RegExp(item.url),
      item.type || 'get',
      XHR2ExpressReqWrap(item.response)
    )
  })
}

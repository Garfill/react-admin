const users = [
  {
    id: 0,
    type: 0,
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'admin',
    desc: 'I am admin user'
  }
]

const mock = [
  {
    url: '/user/info.*',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: users[0],
        message: '',
      }
    }
  },
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: {
          id: 0,
          token: 'admin-token'
        },
      }
    }
  }
]

export default mock
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
      const { id } = config.query;
      if (!id) {
        return {
          code: 40004,
          message: 'There is not an id for search'
        }
      }
      
      const info = users[id];
      if (!info) {
        return {
          code: 50008,
          message: 'There is not a user in this ID'
        }
      }

      return {
        code: 20000,
        data: info,
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
const mock = [
  {
    url: '/article/list',
    type: 'get',
    response: {
      code: 20000,
      message: '',
      'data|1-10': [
        {
          "id|1-10": 1,
          "content|1-4": '今天是个好日子!'
        }
      ]
    }
  }
]

export default mock
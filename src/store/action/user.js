import { getToken } from 'utils/token'

const setUserDataAction = (id) => ({
  type: 'setUserData',
  value: {
    id,
    name: getToken()
  }
})

export function getUserData(id) {
  // async action
  return function(dispatch) {
    // Promise for ES6
    return Promise.resolve().then(() => {
      setTimeout(() => {
        dispatch(setUserDataAction(id))
      }, 1000)
      return id;
    })

    // Async/Await for ES7 可添加异步请求，结合async/await
    // return {
    //   type: 'setUserData',
    //   value: {
    //     id,
    //     name: getToken()
    //   }    
    // }
  }
}
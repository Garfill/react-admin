import { getUserInfo } from 'api/user';

export function getUserInfoAsync() {
  return async (dispatch) => {
    const { data } = await getUserInfo()
    dispatch({
      type: 'getUserData',
      payload: data
    })
    dispatch({
      type: 'getUserMenu'
    })
  }
}
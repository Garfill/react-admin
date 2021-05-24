import { getUserInfo } from 'api/user';

const setUserDataAction = (userData) => ({
  type: 'setUserData',
  value: userData
})

export function getUserData(id) {
  // async action
  return async function(dispatch) {
    const { data } = await getUserInfo({
      id
    })
    dispatch(setUserDataAction(data))
    return data;
  }
}
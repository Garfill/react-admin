import { getUserInfo } from 'api/user';

const setUserDataAction = (userData) => ({
  type: 'setUserData',
  value: userData
})

const setUserMenuAction = () => ({
  type: 'setUserMenu'
})

export function getUserData(id) {
  // async action
  return async function(dispatch) {
    const { data } = await getUserInfo({
      id
    })
    dispatch(setUserDataAction(data))
    dispatch(setUserMenuAction())
    return data;
  }
}
import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserInfo } from 'api/user';

function* getUserData() {
  try {
    const { data } = yield call(getUserInfo)
    yield put(genUserDataAction(data))
    yield put(genUserMenuAction())
  } catch (e) {
    yield put(genUserDataAction({}))
  }
}

function* getUserMenu() {
  try {
    yield put(genUserMenuAction())
  } catch {
    yield put(genUserMenuAction())
  }
}

const genUserDataAction = (userData) => ({
  type: 'getUserData',
  payload: userData
})

const genUserMenuAction = () => ({
  type: 'getUserMenu'
})

function* userSaga() {
  yield takeLatest('getUserData_saga', getUserData)
  yield takeLatest('getUserMenu_saga', getUserMenu)
}

export default userSaga;
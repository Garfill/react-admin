import { all } from 'redux-saga/effects'
import userSaga from 'store/action/user'


function* rootSaga () {
  yield all([
    userSaga()
  ])
}

export default rootSaga
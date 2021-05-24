import { put, takeEvery } from 'redux-saga/effects'

function* helloSaga(action) {
  console.log('helloSaga')
  console.log('action :>> ', action);
  yield put({
    type: 'helloSaga'
  })
}

export function* fetchHello() {
  yield takeEvery('hello_saga', helloSaga)
}


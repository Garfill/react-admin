import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
  
// 增强函数
const enhancer =  composeEnhancer(applyMiddleware(
  sagaMiddleware
))

const store = createStore(
  reducer,
  enhancer
)

sagaMiddleware.run(rootSaga)


export default store
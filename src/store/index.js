/*
 * @Author: dfh
 * @Date: 2020-11-12 18:16:17
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 20:36:55
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/index.js
 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '../redux-saga'
import reducers from './reducers'
// import counterSaga from './saga/counterSaga'
import rootSage from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSage)
window.store = store
export default store

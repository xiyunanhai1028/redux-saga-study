/*
 * @Author: dfh
 * @Date: 2020-11-10 19:45:14
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 19:59:18
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/index.js
 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sage'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store
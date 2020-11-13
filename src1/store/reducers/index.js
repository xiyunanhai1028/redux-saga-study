/*
 * @Author: dfh
 * @Date: 2020-11-10 19:45:22
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 18:21:19
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/reducers/index.js
 */
import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
export default combineReducers({
    counter,
    login
})
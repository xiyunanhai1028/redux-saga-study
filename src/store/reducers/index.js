/*
 * @Author: dfh
 * @Date: 2020-11-12 18:18:09
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-12 18:44:45
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/reducers/index.js
 */
import { combineReducers } from 'redux'
import counter from './counter'
export default combineReducers({
    counter
})

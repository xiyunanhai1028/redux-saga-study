/*
 * @Author: dfh
 * @Date: 2020-11-13 20:55:43
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 20:56:52
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/saga/logSaga.js
 */
import { takeEvery } from "../../redux-saga/effects";
import { ASYNCINCREMENT } from "../action-types";

function * logger(){
    console.log('logger')
}
export default function *(){
    yield takeEvery(ASYNCINCREMENT,logger)
    console.log('loggersaga结束')
}
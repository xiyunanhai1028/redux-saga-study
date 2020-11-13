/*
 * @Author: dfh
 * @Date: 2020-11-10 19:53:38
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 18:51:11
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/sage/index.js
 */
import {all} from 'redux-saga/effects'
import helloSaga from './helloSaga'
import watchAsyncCounter from './watchAsyncCounter'
import watchLogin from './watchLogin'
export default function* rootSaga(){
   yield all([
        helloSaga(),
        watchAsyncCounter(),
        watchLogin(),
    ])
}


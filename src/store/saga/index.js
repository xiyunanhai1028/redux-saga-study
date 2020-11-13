/*
 * @Author: dfh
 * @Date: 2020-11-12 18:23:37
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 20:57:59
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/saga/index.js
 */
import {all} from '../../redux-saga/effects'
import counterSaga from './counterSaga'
import logSaga from './logSaga'


export default function * rootSage(){
    yield all([
        counterSaga() ,
        logSaga()
    ])
    console.log('rootSage结束')
}
/*
 * @Author: dfh
 * @Date: 2020-11-12 18:24:27
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 19:59:48
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/saga/counterSaga.js
 */
import { take, put, takeEvery, call, delay, cps } from '../../redux-saga/effects'
import * as types from '../action-types'

const cpsDelay = (ms, callback) => {
    setTimeout(() => {
        callback(ms)
    }, ms)
}

// const delay = ms => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(ms)
//     }, ms)
// })
function* increment() {
    // const result = yield call(delay, 1000)
    // const result =yield delay(1000)
    const result = yield cps(cpsDelay, 1000)
    console.log('result=', result)
    yield put({ type: types.INCREMENT })
}
// export default function* counterSaga() {
//     for (let i = 0; i < 3; i++) {
//         //监听派发的ASYNCINCREMENT动作
//         const action = yield take(types.ASYNCINCREMENT)
//         console.log(action)
//         yield increment()//iterator
//     }
//     alert('最多执行3次')
// }

export default function* counterSaga() {
    yield takeEvery(types.ASYNCINCREMENT, increment)
}
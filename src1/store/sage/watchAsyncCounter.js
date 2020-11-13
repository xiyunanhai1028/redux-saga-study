/*
 * @Author: dfh
 * @Date: 2020-11-10 20:01:27
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 08:13:06
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/sage/watchAsyncCounter.js
 */
import { put, takeEvery ,delay} from "redux-saga/effects";
import { ASYNC_INCREAMENT, INCREAMENT } from "../action-types";

export function* asyncAdd() {
    yield delay(1000)
    yield put({ type: INCREAMENT })
}
export default function* watchAsyncCounter() {
    yield takeEvery(ASYNC_INCREAMENT, asyncAdd)
}
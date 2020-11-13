/*
 * @Author: dfh
 * @Date: 2020-11-10 19:48:04
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 19:48:55
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/actions/counter.js
 */
import { ASYNC_INCREAMENT, INCREAMENT } from "../action-types"

export default {
    increament() {
        return { type: INCREAMENT }
    },
    asyncIncreament() {
        return { type: ASYNC_INCREAMENT }
    }
}
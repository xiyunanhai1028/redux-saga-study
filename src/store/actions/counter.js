/*
 * @Author: dfh
 * @Date: 2020-11-12 18:17:18
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-12 18:18:02
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/actions/counter.js
 */
import * as types from '../action-types'
export default {
    asyncIncrement() {
        return { type: types.ASYNCINCREMENT }
    }
}
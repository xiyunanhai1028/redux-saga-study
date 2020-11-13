/*
 * @Author: dfh
 * @Date: 2020-11-10 19:45:37
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 19:47:53
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/reducers/counter.js
 */
import * as types from '../action-types'

const initialState = { num: 0 }
export default function (state = initialState, action) {
    switch (action.type) {
        case types.INCREAMENT:
            return { num: state.num + 1 };
        default:
            return state;
    }
}   
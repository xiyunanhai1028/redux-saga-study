/*
 * @Author: dfh
 * @Date: 2020-11-12 18:18:13
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-12 18:47:07
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/reducers/counter.js
 */
import * as types from '../action-types'
const initialState = { number: 0 }
export default function (state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return { number: state.number + 1 };
        default:
            return state;
    }
}
/*
 * @Author: dfh
 * @Date: 2020-11-11 18:18:59
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 19:09:01
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/reducers/login.js
 */
import * as types from '../action-types'
const initialState = {}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {token:action.payload};
        case types.LOGINOUT:
            return {};
        default:
            return state;
    }
}
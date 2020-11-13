/*
 * @Author: dfh
 * @Date: 2020-11-11 18:13:38
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 22:17:41
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/actions/login.js
 */
import * as types from '../action-types'
export default {
    login(username, password) {
        return { type: types.LOGIN, payload: { username, password } }
    },
    loginout() {
        return { type: types.LOGINOUT }
    }
}
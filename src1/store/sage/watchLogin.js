import { call, put, take } from "redux-saga/effects";
import { LOGIN, LOGINOUT, LOGIN_ERROR, LOGIN_SUCCESS,LOGINOUT_SUCCESS } from "../action-types";
import { login } from '../../api/Api'

/*
 * @Author: dfh
 * @Date: 2020-11-11 18:24:37
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 22:19:11
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/sage/watchLogin.js
 */

function* loginRequest({ username, password }) {
    try {
        const token = yield call(login,username, password)
        return token
    } catch (error) {
        alert(error)
        put({ type: LOGIN_ERROR })
    }
}

export default function* watchLogin() {//监听login
    while (true) {
        //监听登录
        const action = yield take(LOGIN)
        const token = yield call(loginRequest, action.payload)
        if (token) {
            console.log('token',token)
            yield put({ type: LOGIN_SUCCESS, payload: token })
            //监听登出
            yield take(LOGINOUT)
            //派发退出动作
            yield put({type:LOGINOUT})
        }

    }
}
/*
 * @Author: dfh
 * @Date: 2020-11-11 18:32:13
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 22:15:48
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/api/Api.js
 */
export function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username + password)
        }, 1000);
    })
}
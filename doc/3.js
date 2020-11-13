/*
 * @Author: dfh
 * @Date: 2020-11-13 21:00:59
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 21:11:25
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/doc/3.js
 */
function* gen(){
    yield 1
    yield 2
    yield 3
}
const it=gen()
console.log(it.next())
console.log(it.return())
console.log(it.next())
console.log(it.next())


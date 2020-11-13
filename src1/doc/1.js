/*
 * @Author: dfh
 * @Date: 2020-11-11 22:23:56
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 22:29:30
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/doc/1.js
 */
function* genMethod() {
    yield 1
    console.log('a')
    yield 2
    console.log('b')
    yield 3
    console.log('c')
}

//生成生成器
const it = genMethod()
const r1 = it.next()
console.log('r1', r1)
const r2 = it.next()
console.log('r2', r2)
const r3 = it.next()
console.log('r3', r3)
const r4 = it.next()
console.log('r4', r4)
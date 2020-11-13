/*
 * @Author: dfh
 * @Date: 2020-11-11 08:06:29
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 08:20:52
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/store/sage/test.spec.js
 */
import test from 'tape'
import { delay,put } from 'redux-saga/effects'
import { asyncAdd } from './watchAsyncCounter'
import { INCREAMENT } from "../action-types";

test('test asyncAdd', (asserts) => {
    //生成generator生成器
    const gen = asyncAdd()
    //第一个参数为第一个yield执行结果，第二个为对比的值，第三个参数为提示信息
    asserts.deepEqual(
        gen.next().value,
        delay(1000),
        'delay 1s'
    )

    asserts.deepEqual(
        gen.next().value,
        put({ type: INCREAMENT }),
        'add 1'
    )
    asserts.end()
})
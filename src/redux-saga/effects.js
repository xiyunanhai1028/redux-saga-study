/*
 * @Author: dfh
 * @Date: 2020-11-12 19:59:17
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 21:16:48
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/redux-saga/effects.js
 */
export function take(actionType) {
    return {
        type: 'TAKE',
        actionType
    }
}

export function put(action) {
    return {
        type: 'PUT',
        action
    }
}

export function fork(task) {//task是一个generator
    return {
        type: 'FORK',
        task
    }
}

export function* takeEvery(actionType, generator) {
    yield fork(function* () {
        while (true) {
            yield take(actionType)//=>yield take(types.ASYNCINCREMENT)
            yield generator()//=>yield increment()//iterator
        }
    })
}

export function call(fn, ...args) {
    return {
        type: 'CALL',
        fn,
        args
    }
}

const innerDelay = ms => new Promise((resovle, reject) => {
    setTimeout(() => {
        resovle(ms)
    }, ms);
})
export function delay(...args) {
    return call(innerDelay, args)
}

export function cps(fn,...args){
    return {
        type:'CPS',
        fn,
        args
    }
}

export function all(fns){
    return {
        type:'ALL',
        fns
    }
}

export function cannel(task){
    return {
        type:'CANNEL',
        task
    }
}
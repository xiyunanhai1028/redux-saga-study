/*
 * @Author: dfh
 * @Date: 2020-11-12 19:49:53
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-13 21:00:47
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/redux-saga/index.js
 */
export default function createSagaMiddleware() {//返回一个sagaMiddleware中间件
    //实现一个发布订阅
    function createChannel() {
        let listeners = {}
        //订阅
        function subscribe(actionType, listener) {
            listeners[actionType] = listener
        }
        //发布
        function publish(action) {
            if (listeners[action.type]) {
                let next = listeners[action.type]
                delete listeners[action.type]
                next(action)
            }
        }
        return { subscribe, publish }
    }

    //创建channel
    let channel = createChannel()

    //是一个中间件
    function sagaMiddleware({ dispatch, getState }) {
        //执行generator
        function run(generator, callback) {
            //generator可能是一个迭代器或者是一个生成器
            const it = typeof generator[Symbol.iterator] === 'function' ? generator : generator()
            function next(action) {
                //value={type: 'TAKE',actionType:'ASYNCINCREMENT'}
                const { value: effect, done } = it.next(action)//执行一步generator
                if (!done) {//判断generator是否执行完成
                    if (typeof effect[Symbol.iterator] === 'function') {
                        //如果是一个迭代器的话直接进入run方法执行
                        run(effect)
                        next()
                    } else if (typeof effect.then === 'function') {
                        effect.then(next)
                    } else {
                        switch (effect.type) {
                            case 'TAKE'://监听某个动作，当动作发生时执行一次
                                channel.subscribe(effect.actionType, next)//订阅
                                break;
                            case 'PUT'://value={type:'PUT',action:{type:INCREMENT}}
                                dispatch(effect.action)//派发某个动作
                                next()//执行下一步
                                break;
                            case 'FORK'://value={type:'FORK',task}  task是一个生成器
                                const task = effect.task()//迭代器
                                run(task)
                                next(task)
                                break;
                            case 'CANNEL'://value={type:'CANNEL',task}  task是一个生成器
                                effect.task.return('接收掉')
                                break;
                            case 'CALL':
                                effect.fn(...effect.args).then(next)
                            case 'CPS':
                                effect.fn(...effect.args, next)
                            case 'ALL':
                                const times = (cb, len) => {
                                    let index = 0
                                    return () => {
                                        if (++index === len) cb()
                                    }
                                }
                                const fns = effect.fns
                                const done = times(next, fns.length)
                                fns.forEach(fn => run(fn, done));
                                break;
                            default:
                                break;
                        }
                    }
                } else {
                    callback && callback()
                }
            }
            next()
        }
        sagaMiddleware.run = run
        return next => action => {
            //发布消息
            channel.publish(action)
            next(action)
        }
    }
    return sagaMiddleware
}
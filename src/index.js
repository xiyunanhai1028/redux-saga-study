/*
 * @Author: dfh
 * @Date: 2020-11-12 18:14:20
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-12 18:23:25
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>, document.getElementById('root')
)
/*
 * @Author: dfh
 * @Date: 2020-11-10 19:43:35
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 18:24:09
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import Login from './components/Login'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(<Provider store={store}><Login /></Provider>, document.getElementById('root'))
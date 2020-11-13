/*
 * @Author: dfh
 * @Date: 2020-11-10 19:44:18
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 19:58:42
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/components/Counter.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'

class Counter extends Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={this.props.increament}>+</button>
                <button onClick={this.props.asyncIncreament}>asyncIncreament</button>
            </div>
        )
    }
}
export default connect(
    state => state.counter,
    actions
)(Counter)
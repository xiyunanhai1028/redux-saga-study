/*
 * @Author: dfh
 * @Date: 2020-11-12 18:14:46
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-12 18:47:47
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/components/Counter.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'

class Counter extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.asyncIncrement}>+</button>
            </div>
        )
    }
}
export default connect(
    state => state.counter,
    actions
)(Counter)
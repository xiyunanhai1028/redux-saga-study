/*
 * @Author: dfh
 * @Date: 2020-11-11 18:11:42
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-11 22:18:20
 * @Modified By: dfh
 * @FilePath: /redux-saga-study/src/components/Login.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/login'

class Login extends Component {
    constructor(props) {
        super(props)
        this.usernameRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    login = () => {
        const username = this.usernameRef.current.value
        const password = this.passwordRef.current.value
        this.props.login(username, password)
    }

    loginout = () => {
        this.props.loginout()
    }

    render() {
        const login = (
            <div>
                <label>用户名：</label><input ref={this.usernameRef} /> <br />
                <label>密  码：</label><input ref={this.passwordRef} /><br />
                <button onClick={this.login}>登录</button>
            </div>)
        const loginout = (
            <div>
                <p>{this.props.token}</p> <br />
                <button onClick={this.loginout}>退出</button>
            </div>
        )
        return (
            this.props.token ? loginout : login
        )
    }
}

export default connect(
    state => state.login,
    actions
)(Login)

import React, { Component } from "react";
import { connect } from "react-redux";

import Login from '../components/login'
import {
  updateDataInput,
  login
} from './../actions/login.action'

class LoginContainer extends Component {
  render () {
    const {
      email,
      password,
      updateDataInput,
      login,
      loginLoading
    } = this.props
    return (
      <div className="container" id="login-comp">
        <Login
          email={email}
          password={password}
          updateDataInput={updateDataInput}
          login={login}
          loginLoading={loginLoading}
        />
      </div>
    )
  }
}

function mapStateToProps ({ login: { email, password, loginLoading } }) {
  return {
    email: email,
    password: password,
    loginLoading: loginLoading
  };
}

export default connect(
  mapStateToProps,
  {
    updateDataInput,
    login
  }
)(LoginContainer);
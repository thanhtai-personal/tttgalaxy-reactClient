import React, { Component } from "react";
import { connect } from "react-redux";

import Login from '../components/login'
import {
  updateDataInput
} from './../actions/login.action'

class LoginContainer extends Component {
  render () {
    const {
      email,
      password,
      updateDataInput
    } = this.props
    return (
      <div className="container" id="login-comp">
        <Login
          email={email}
          password={password}
          updateDataInput={updateDataInput}
        />
      </div>
    )
  }
}

function mapStateToProps ({ login: { email, password} }) {
  return {
    email: email,
    password: password
  };
}

export default connect(
  mapStateToProps,
  {
    updateDataInput
  }
)(LoginContainer);
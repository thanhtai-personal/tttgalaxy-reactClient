import React, { Component } from "react";
import { connect } from "react-redux";

import Login from '../components/login'
import ActionService from './../actions'

class LoginContainer extends Component {
  render () {
    const {
      email,
      password,
      updateDataInput,
      login,
      loginLoading,
      redirectData,
      updateRedirectData,
      history
    } = this.props
    return (
      <div className="container" id="login-comp">
        <Login
          email={email}
          password={password}
          updateDataInput={updateDataInput}
          login={login}
          loginLoading={loginLoading}
          redirectData={redirectData}
          updateRedirectData={updateRedirectData}
          history={history}
        />
      </div>
    )
  }
}

function mapStateToProps ({ login: { email, password, loginLoading }, common: { redirectData } }) {
  return {
    email: email,
    password: password,
    loginLoading: loginLoading,
    redirectData: redirectData
  };
}

export default connect(
  mapStateToProps,
  {
    updateDataInput: ActionService.updateDataInputLogin,
    login: ActionService.login,
    updateRedirectData: ActionService.updateRedirectData
  }
)(LoginContainer);
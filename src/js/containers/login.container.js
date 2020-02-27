import React, { Component } from "react";
import { connect } from "react-redux";

import Login from '../components/login'
import ActionService from './../actions'

class LoginContainer extends Component {

  componentWillMount() {
    if (window.localStorage.getItem('jwtToken')) {
      this.props.history.push('/home')
    }
  }

  render() {
    const {
      email,
      password,
      updateDataInput,
      login,
      loginLoading,
      redirectData,
      updateRedirectData,
      history,
      language
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
          language={language}
        />
      </div>
    )
  }
}

function mapStateToProps({ login: { email, password, loginLoading }, common: { redirectData, language } }) {
  return {
    email: email,
    password: password,
    loginLoading: loginLoading,
    redirectData: redirectData,
    language: language.login
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
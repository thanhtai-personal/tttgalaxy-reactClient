import React, { Component } from "react";
import { connect } from "react-redux";

import ActionService from './../actions/'

import SignUp from "../components/signup";

class SignUpContainer extends Component {
  render() {
    const {
      email,
      password,
      updateDataInput,
      signup,
      loadingSubmit,
      redirectData,
      history,
      updateRedirectData,
      language
    } = this.props
    return (
      <div className="container" id="login-comp">
        <SignUp
          email={email}
          password={password}
          updateDataInput={updateDataInput}
          signup={signup}
          loadingSubmit={loadingSubmit}
          redirectData={redirectData}
          updateRedirectData={updateRedirectData}
          history={history}
          language={language}
        />
      </div>
    )
  }
}

function mapStateToProps({ signup: { email, password, passwordConfirm, loadingSubmit }, common: { redirectData, language } }) {
  return {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    loadingSubmit: loadingSubmit,
    redirectData: redirectData,
    language: language.register
  };
}

export default connect(
  mapStateToProps,
  {
    updateDataInput: ActionService.updateDataInputSignup,
    signup: ActionService.signup,
    updateRedirectData: ActionService.updateRedirectData
  }
)(SignUpContainer);
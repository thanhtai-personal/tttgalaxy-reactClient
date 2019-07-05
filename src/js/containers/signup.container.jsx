import React, { Component } from "react";
import { connect } from "react-redux";

import ActionService from './../actions/'

import SignUp from "../components/signup";

class SignUpContainer extends Component {
  render () {
    const {
      email,
      password,
      updateDataInput,
      signup,
      loadingSubmit,
      redirectData,
      history,
      updateRedirectData
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
        />
      </div>
    )
  }
}

function mapStateToProps ({ signup: { email, password, passwordConfirm, loadingSubmit }, common: { redirectData } }) {
  return {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    loadingSubmit: loadingSubmit,
    redirectData: redirectData
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
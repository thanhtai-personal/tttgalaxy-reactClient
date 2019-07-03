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
      loadingSubmit
    } = this.props
    return (
      <div className="container" id="login-comp">
        <SignUp
          email={email}
          password={password}
          updateDataInput={updateDataInput}
          signup={signup}
          loadingSubmit={loadingSubmit}
        />
      </div>
    )
  }
}

function mapStateToProps ({ signup: { email, password, passwordConfirm, loadingSubmit } }) {
  return {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    loadingSubmit: loadingSubmit
  };
}

export default connect(
  mapStateToProps,
  {
    updateDataInput: ActionService.updateDataInputSignup,
    signup: ActionService.signup
  }
)(SignUpContainer);
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateDataInput,
  signUp
} from './../actions/signUp.action'

import SignUp from "../components/signup";

class SignUpContainer extends Component {
  render () {
    const {
      email,
      password,
      updateDataInput,
      signUp
    } = this.props
    return (
      <div className="container" id="login-comp">
        <SignUp
          email={email}
          password={password}
          updateDataInput={updateDataInput}
          signUp={signUp}
        />
      </div>
    )
  }
}

function mapStateToProps ({ signup: { email, password, passwordConfirm } }) {
  return {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateDataInput,
    signUp
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
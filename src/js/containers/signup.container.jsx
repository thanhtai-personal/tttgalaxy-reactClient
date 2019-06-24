import React, { Component } from "react";
import { connect } from "react-redux";

import {
  updateDataInput
} from './../actions/signUp.action'

import SignUp from "../components/signup";

class SignUpContainer extends Component {
  render () {
    const {
      email,
      password,
      updateDataInput
    } = this.props
    return (
      <div className="container" id="login-comp">
        <SignUp
          email={email}
          password={password}
          updateDataInput={updateDataInput}
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
    updateDataInput: (data) => { dispatch(updateDataInput(data)) },

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
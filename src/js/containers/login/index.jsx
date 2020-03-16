import React, { PureComponent } from "react"
import { connect } from "react-redux"

import LoginComponent from '../../components/login'
import actionService from '../../actions'

class LoginContainer extends PureComponent {
  render () {
    const {
    } = this.props
    return (
      <LoginComponent />
    )
  }
}

function mapStateToProps ({ }) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {}
)(LoginContainer);
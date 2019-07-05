import React, { Component } from "react";
import { connect } from "react-redux";

import Home from '../components/home'

class HomeContainer extends Component {
  render () {
    // const {
    // } = this.props
    return (
      <Home
      />
    )
  }
}

function mapStateToProps (state) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {}
)(HomeContainer);
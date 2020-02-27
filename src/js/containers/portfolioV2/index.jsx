import React, { Component } from "react";
import { connect } from "react-redux";

import PortfolioV2 from '../../components/portfolio/v2'
import actionService from '../../actions'

class PortfolioContainer extends Component {

  render () {
    const {
    } = this.props
    return (
      <PortfolioV2 />
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
)(PortfolioContainer);
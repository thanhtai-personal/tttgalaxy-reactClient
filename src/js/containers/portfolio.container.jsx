import React, { Component } from "react";
import { connect } from "react-redux";

import Portfolio from '../components/portfolio'

class PortfolioContainer extends Component {
  render () {
    const {
      skill, basicInfo, experiences, education, profileImageUrl
    } = this.props
    return (
      <Portfolio
        profileImageUrl={profileImageUrl}
        skill={skill}
        basicInfo={basicInfo}
        experiences={experiences}
        education={education}
      />
    )
  }
}

function mapStateToProps ({ portfolio: { skill, basicInfo, experiences, education, profileImageUrl } }) {
  return {
    skill, basicInfo, experiences, education, profileImageUrl
  };
}

export default connect(
  mapStateToProps,
  {}
)(PortfolioContainer);
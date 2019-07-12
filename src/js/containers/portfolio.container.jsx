import React, { Component } from "react";
import { connect } from "react-redux";

import Portfolio from '../components/portfolio'
import actionService from '../actions'

class PortfolioContainer extends Component {
  render () {
    const {
      skill, basicInfo, experiences, education, profileImageUrl, updatePortfolioData, updatePortfolioDataWithObjectKey
    } = this.props
    return (
      <Portfolio
        profileImageUrl={profileImageUrl}
        skill={skill}
        basicInfo={basicInfo}
        experiences={experiences}
        education={education}
        updateContentData={updatePortfolioData}
        updatePortfolioDataWithObjectKey={updatePortfolioDataWithObjectKey}
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
  {
    updatePortfolioData: actionService.updatePortfolioData,
    updatePortfolioDataWithObjectKey: actionService.updatePortfolioDataWithObjectKey
  }
)(PortfolioContainer);
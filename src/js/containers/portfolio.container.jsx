import React, { Component } from "react";
import { connect } from "react-redux";

import Portfolio from '../components/portfolio'
import actionService from '../actions'

class PortfolioContainer extends Component {

  render () {
    const {
      skill, basicInfo, experiences, education,
      profileImageUrl, updatePortfolioData, updatePortfolioDataWithObjectKey,
      submitDataUpdatePortfolio, getProfolioData,
      publicProfile,
      publicKey
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
        validateDataUpdate={actionService.validateDataUpdate}
        submitDataUpdate={submitDataUpdatePortfolio}
        getProfolioData={getProfolioData}
        publicProfile={publicProfile}
        paramPublicKey={this.props.match && this.props.match.params ? this.props.match.params.publicKey : null}
        publicKey={publicKey}
      />
    )
  }
}

function mapStateToProps ({ portfolio: { skill, basicInfo, experiences, education, profileImageUrl, publicProfile, publicKey } }) {
  return {
    skill, basicInfo, experiences, education, profileImageUrl, publicProfile, publicKey
  };
}

export default connect(
  mapStateToProps,
  {
    updatePortfolioData: actionService.updatePortfolioData,
    updatePortfolioDataWithObjectKey: actionService.updatePortfolioDataWithObjectKey,
    submitDataUpdatePortfolio: actionService.submitDataUpdatePortfolio,
    getProfolioData: actionService.getProfolioData
  }
)(PortfolioContainer);
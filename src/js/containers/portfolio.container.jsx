import React, { Component } from "react";
import { connect } from "react-redux";

import Portfolio from '../components/portfolio'

class PortfolioContainer extends Component {
  render () {
    const {
      skillData,
      basicInfo,
      experiencesData,
      educationData
    } = this.props
    return (
      <Portfolio
        skillData={skillData}
        basicInfo={basicInfo}
        experiencesData={experiencesData}
        educationData={educationData}
      />
    )
  }
}

function mapStateToProps ({ portfolio: { skillData, basicInfo, experiencesData, educationData } }) {
  return {
    skillData: skillData,
    basicInfo: basicInfo,
    experiencesData: experiencesData,
    educationData: educationData
  };
}

export default connect(
  mapStateToProps,
  {}
)(PortfolioContainer);
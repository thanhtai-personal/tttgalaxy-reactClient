import React, { Component } from "react";
import { connect } from "react-redux";

import Home from '../components/home'

class HomeContainer extends Component {
  render() {
    const {
      skillData,
      basicInfo,
      experiencesData,
      educationData
    } = this.props
    return (
      <Home 
        skillData={skillData}
        basicInfo={basicInfo}
        experiencesData={experiencesData}
        educationData={educationData}
      />
    )
  }
}

function mapStateToProps ({home: {skillData, basicInfo, experiencesData, educationData}}) {
  return {
    skillData: skillData,
    basicInfo: basicInfo,
    experiencesData: experiencesData,
    educationData: educationData
  };
}

export default connect(
  mapStateToProps,
  {  }
)(HomeContainer);
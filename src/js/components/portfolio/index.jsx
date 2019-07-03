import React, { PureComponent } from "react";
import Banner from './banner'
import Content from './content'

import './portfolio.scss'


class Portfolio extends PureComponent {
  render() {
    const {
      skillData,
      basicInfo,
      experiencesData,
      educationData
    } = this.props
    return (
      <div className="container-fluid" id="home">
        <Content 
          skillData={skillData}
          basicInfo={basicInfo}
          experiencesData={experiencesData}
          educationData={educationData}
        />
      </div>
    )
  }
}

export default Portfolio
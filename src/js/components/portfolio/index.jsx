import React, { PureComponent } from "react";
import Content from './content'
import $ from 'jquery'

import './portfolio.scss'


class Portfolio extends PureComponent {

  componentDidMount() {
    $('#header-7319').css({display: 'none'})
  }

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
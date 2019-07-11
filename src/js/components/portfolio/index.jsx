import React, { PureComponent } from "react";
import Content from './content'

import './portfolio.scss'


class Portfolio extends PureComponent {

  render () {
    const {
      skill,
      basicInfo,
      experiences,
      education,
      profileImageUrl
    } = this.props
    return (
      <div className="container-fluid" id="home">
        <Content
          profileImageUrl={profileImageUrl}
          skill={skill}
          basicInfo={basicInfo}
          experiences={experiences}
          education={education}
        />
      </div>
    )
  }
}

export default Portfolio
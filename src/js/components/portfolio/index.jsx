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
      profileImageUrl,
      updateContentData,
      updatePortfolioDataWithObjectKey
    } = this.props
    return (
      <div className="container-fluid" id="home">
        <Content
          profileImageUrl={profileImageUrl}
          skill={skill}
          basicInfo={basicInfo}
          experiences={experiences}
          education={education}
          updateData={updateContentData}
          updateDataWithObjectKey={updatePortfolioDataWithObjectKey}
        />
      </div>
    )
  }
}

export default Portfolio
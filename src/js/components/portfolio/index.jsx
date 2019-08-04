import React, { PureComponent } from "react";
import Content from './content'

import './portfolio.scss'


class Portfolio extends PureComponent {

  componentWillMount() {
    this.props.getProfolioData(this.props.paramPublicKey)
  }

  render () {
    const {
      skill,
      basicInfo,
      experiences,
      education,
      profileImageUrl,
      updateContentData,
      updatePortfolioDataWithObjectKey,
      submitDataUpdate,
      validateDataUpdate,
      publicProfile,
      paramPublicKey,
      publicKey
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
          submitDataUpdate={submitDataUpdate}
          validateDataUpdate={validateDataUpdate}
          publicProfile={publicProfile}
          paramPublicKey={paramPublicKey}
          publicKey={publicKey}
        />
      </div>
    )
  }
}

export default Portfolio
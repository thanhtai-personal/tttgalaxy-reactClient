import React, { PureComponent } from "react";
import Banner from './banner'
import Content from './content'

import './home.scss'


class Home extends PureComponent {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {
      skillData,
      basicInfo,
      experiencesData,
      educationData
    } = this.props
    return (
      <div className="container-fluid" id="home">
        <Banner />
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

export default Home
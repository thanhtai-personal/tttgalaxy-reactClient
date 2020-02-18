import React, { PureComponent } from "react";

import './style.scss'

import Slider from './slider'
import Service from './service'
// import PortfolioArea from './portfolio'
import AboutMe from './aboutMe'
import Counter from './counter'
import $ from 'jquery'


class Portfolio extends PureComponent {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    $('body').css({background: 'none'})
  }

  componentWillMount() {
    // this.props.getPortfolioData(this.props.paramPublicKey)
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
      publicKey,
      isLoading
    } = this.props
    return (
      <React.Fragment>
        <Slider />
        <Service />
        {/* <PortfolioArea /> */}
        <AboutMe />
        <Counter />
      </React.Fragment>
    )
  }
}

export default Portfolio
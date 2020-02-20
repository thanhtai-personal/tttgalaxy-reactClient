import React, { PureComponent } from 'react';
import _ from 'lodash'

import './snow.scss'
// import { Snow } from './snowStyled'
class SnowFallEffect extends PureComponent {

  constructor(props) {
    super(props)
    // this.excuteEffect = this.excuteEffect.bind(this)
  }

  // excuteEffect () {

  // }

  // componentDidMount () {
  //   this.excuteEffect()
  // }

  render() {
    const { layer1 = true, layer2 = false, layer3 = false } = this.props
    return (
      <div className={this.props.className || ''}>
        {/* <Snow> */}
        <div className="wrapper">
          {layer1 && <div className="snow layer1 a"></div>}
          {layer1 && <div className="snow layer1"></div>}
          {layer2 && <div className="snow layer2 a"></div>}
          {layer2 && <div className="snow layer2"></div>}
          {layer3 && <div className="snow layer3 a"></div>}
          {layer3 && <div className="snow layer3"></div>}
        </div>
        {/* </Snow> */}
      </div>
    )
  }
}

export default SnowFallEffect
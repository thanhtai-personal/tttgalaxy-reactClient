import React, { PureComponent } from 'react';
import _ from 'lodash'

import './snow.scss'
import snowImage from './img/snowflake.png'


const snowImageCount = 45;
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

  renderSnow() {
    let snows = []
    for (let i = 0; i < snowImageCount; i++) {
      snows.push(<snowflake key={`snow-flake-${i}`}><img src={snowImage} />️</snowflake>)
    }
    return snows
  }

  render() {
    return (
      <div className={this.props.className || ''}>
        <snowfall>
          <snowflake><span>❄️</span>️️</snowflake>
          {/* <snowflake><span>🍂</span>️️</snowflake> */}
          {/* <snowflake><span>💝</span>️️</snowflake> */}
          {/* <snowflake><span>🌟</span>️</snowflake> */}
          {this.renderSnow()}
        </snowfall>
      </div>
    )
  }
}

export default SnowFallEffect
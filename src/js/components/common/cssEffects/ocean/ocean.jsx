import React, { PureComponent } from 'react';
import _ from 'lodash'

// import './ocean.scss'
import { Ocean } from './oceanStyled'

class OceanEffect extends PureComponent {

  constructor (props) {
    super(props)
    this.excuteEffect = this.excuteEffect.bind(this)
  }

  excuteEffect () {

  }

  componentDidMount () {
    this.excuteEffect()
  }

  render () {
    return (
      <Ocean>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </Ocean>
    )
  }
}

export default OceanEffect
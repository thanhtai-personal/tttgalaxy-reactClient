import React, { PureComponent } from 'react';
import _ from 'lodash'

// import './space.scss'
import { Space } from './spaceStyled'

class SpaceEffect extends PureComponent {

  constructor (props) {
    super(props)
    // this.excuteEffect = this.excuteEffect.bind(this)
  }

  // excuteEffect () {

  // }

  // componentDidMount () {
  //   this.excuteEffect()
  // }

  render () {
    return (
      <div className={this.props.className || ''}>
        <Space>
          <div className="container demo">
            <div className="content">
              <div id="large-header" className="large-header">
                <canvas id="demo-canvas"></canvas>
              </div>
            </div>
          </div>
        </Space>
      </div>
    )
  }
}

export default SpaceEffect
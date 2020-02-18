import React, { Component } from 'react';
import SeaWaveEffect from './../common/cssEffects/seaWave/seaWave'
import WaveEffect from './../common/cssEffects/waveCloud/wave'
import OceanEffect from './../common/cssEffects/ocean/ocean'
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

class SeaFooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clientWidth: document.getElementById('root').offsetWidth
    }
    this.handleResize = this.handleResize.bind(this)
    this.renderWeb = this.renderWeb.bind(this)
    this.renderMobile = this.renderMobile.bind(this)
  }

  handleResize (e) {
    this.setState({ clientWidth: e.target.innerWidth })
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  renderMobile () {
    return (
      <SeaWaveEffect />
    );
  }

  renderWeb () {
    return (
      <React.Fragment>
        <WaveEffect />
        <OceanEffect />
      </React.Fragment>
    )
  }

  render () {
    return isMobile || this.state.clientWidth < 600 ? this.renderMobile() : this.renderWeb()
  }
}

export default SeaFooter;

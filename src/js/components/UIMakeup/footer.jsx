import React, { Component } from 'react';
import './footer.scss'
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
      <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px' y='0px' width='100vw' height='150px' viewBox='0 0 800 350'
        style={{ enableBackground: 'new 0 0 800 400', left: 0, bottom: 0, position: 'fixed' }} xmlSpace='preserve'>
      <style type='text/css'>
        {`.st0{opacity:0.76;}
        .st1{fill:url(#SVGID_1_);width:100%;}
        .st2{fill:url(#SVGID_2_);width:100%;}
        .st3{fill:url(#SVGID_3_);width:100%;}
        .st4{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;width:100%;}`}
      </style>
      <g id='DarkWaves' className='DarkWaves'>
      <g>
      <linearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='400.0005' y1='602' x2='400.0005' y2='202.3545'>
      <stop offset='0' style={{stopColor:'#0000FF'}}></stop>
      <stop offset='0.1789' style={{stopColor:'#0020EC'}}></stop>
      <stop offset='0.4149' style={{stopColor:'#0043D7'}}></stop>
      <stop offset='0.6374' style={{stopColor:'#005CC8'}}></stop>
      <stop offset='0.8386' style={{stopColor:'#006CBF'}}></stop>
      <stop offset='1' style={{stopColor:'#0071BC'}}></stop>
      </linearGradient>
      <path className='st2' d='M761.8,202.4c-24.7,0-36.7,7.2-49.5,14.7c-13.2,7.8-26.8,15.9-53.8,15.9c-27,0-40.6-8.1-53.8-15.9
            c-12.8-7.6-24.9-14.7-49.6-14.7c-24.7,0-36.8,7.2-49.6,14.7c-13.2,7.8-26.8,15.9-53.8,15.9c-27,0-40.7-8.1-53.8-15.9
            c-12.8-7.6-24.9-14.7-49.6-14.7c-24.7,0-36.8,7.2-49.6,14.7c-13.2,7.8-26.8,15.9-53.8,15.9c-27,0-40.7-8.1-53.8-15.9
            c-12.8-7.6-24.9-14.7-49.6-14.7c-24.7,0-36.8,7.2-49.6,14.7C78.7,224.9,65,232.9,38,232.9c-27,0-40.4-8.1-53.6-15.9
            c-12.1-7.1-24.3-13.9-45.4-14.6V602h922V232.9c-22.6-0.8-37.2-8.4-49.7-15.8C798.5,209.5,786.5,202.4,761.8,202.4z'></path>
      </g>
      </g>
      <g id='LightWaves' className='LightWaves'>
      <g>
      <linearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='400.0005' y1='600' x2='400.0005' y2='214.3545'>
      <stop offset='0' style={{stopColor:'#0000FF'}}></stop>
      <stop offset='0.1643' style={{stopColor:'#0B2CF7'}}></stop>
      <stop offset='0.3574' style={{stopColor:'#1559F0'}}></stop>
      <stop offset='0.5431' style={{stopColor:'#1E7DEA'}}></stop>
      <stop offset='0.7168' style={{stopColor:'#2496E6'}}></stop>
      <stop offset='0.874' style={{stopColor:'#28A6E3'}}></stop>
      <stop offset='1' style={{stopColor:'#29ABE2'}}></stop>
      </linearGradient>
      <path className='st3' d='M750.9,229.8c-14.8-7.9-28.7-15.4-57.2-15.4c-28.5,0-42.4,7.5-57.2,15.4c-15.2,8.2-30.9,16.6-62.1,16.6
            s-46.9-8.4-62.1-16.6c-14.8-7.9-28.7-15.4-57.2-15.4c-28.5,0-42.4,7.5-57.2,15.4c-15.2,8.2-30.9,16.6-62.1,16.6
            c-31.2,0-46.9-8.4-62.1-16.6c-14.8-7.9-28.7-15.4-57.2-15.4c-28.5,0-42.4,7.5-57.2,15.4c-15.2,8.2-30.9,16.6-62.1,16.6
            c-31.2,0-46.9-8.4-62.1-16.6c-14.8-7.9-28.9-15.4-57.3-15.4c-16.9,0-28.8,2.6-38.8,6.4V600h922V237c-12,5.3-26,9.4-47.8,9.4
            C782.1,246.4,766.1,237.9,750.9,229.8z'></path>
      </g>
      </g>
      <g id='WhiteWaves' className='WhiteWaves'>
      <g className='st0'>
      <path className='st4' d='M-71,220c94.2,0,94.2,18,188.4,18c94.2,0,94.2-18,188.4-18c94.2,0,94.2,18,188.4,18c94.2,0,94.2-18,188.4-18
            s94.2,18,188.4,18'></path>
      </g>
      </g>
      </svg>
    );
  }

  renderWeb () {
    return (
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-top.png')`}}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')`}}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')`}}></div>
        </div>
      </div>
    )
  }

  render () {
    return isMobile || this.state.clientWidth < 600 ? this.renderMobile() : this.renderWeb()
  }
}

export default SeaFooter;

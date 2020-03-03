import React, { PureComponent, Suspense } from "react"
import $ from 'jquery'
import './style.scss'
import { withEventEmitter } from '../../../middleware'
import { EVENT_EMITTER_COMMAND } from './../../../constants/enums'
import RainEffect from './../../common/cssEffects/rain/rain'
import SnowFallEffect from './../../common/cssEffects/snowFall/snowFall'
import SnowFallSlowEffect from './../../common/cssEffects/snowFallSlow/snowFall'
import LoadingPage from './../../common/loadingPage'
import { Music } from './../../common/music/music'
// import YoutubePanel from './../../common/youtube'

const Slider = React.lazy(() => import('./slider'))
const Skill = React.lazy(() => import('./service'))
const PortfolioArea = React.lazy(() => import('./portfolio'))
const Contact = React.lazy(() => import('./aboutMe'))
const Projects = React.lazy(() => import('./counter'))
const Hobbies = React.lazy(() => import('./hobbies'))
const YoutubeSlider = React.lazy(() => import('./youtube'))

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const SeaFooter = React.lazy(() => import('./../../UIMakeup/footer'))

const showDefault = {
  showSpace: false,
  showOcean: false,
  showRain: false,
  showSnow: false,
  showTraveler: false,
  showSnowSlow: !isMobile
}

const rainBackground = 'gray', defaultBackground = 'none', defaultTimeStart = 0, maxTime = 120

class Portfolio extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      ...showDefault
    }
    this.renderLoading = this.renderLoading.bind(this)
    this.time = defaultTimeStart
    this.animateInterval = this.animateInterval.bind(this)
  }

  animateInterval() {
    if (this.time === 10) {
      this.setState({ showRain: true, showTraveler: true })
    }
    // if (this.time === 30) {
    //   this.setState({ showOcean: true })
    // }
    if (this.time === 40) {
      this.setState({ showTraveler: false })
    }
    if (this.time === 60) {
      this.setState({ showSnow: true, showSnowSlow: false })
    }
    if (this.time === 100) {
      this.setState({ showSnowSlow: true, showSnow: false })
    }
    if (this.time === maxTime) {
      this.time = defaultTimeStart
      this.setState({ ...showDefault, showSnowSlow: true })
    }
    this.time = this.time + 1
  }

  componentDidMount() {
    $('body').css({ background: this.state.showRain ? rainBackground : defaultBackground })
    this.props.eventEmitter.on('promp-action', (message) => {
      switch (message) {
        case EVENT_EMITTER_COMMAND.clearOcean:
          this.setState({ showOcean: false })
          break
        case EVENT_EMITTER_COMMAND.clearRain:
          this.setState({ showRain: false })
          break
        case EVENT_EMITTER_COMMAND.clearSpace:
          this.setState({ showSpace: false })
          break
        case EVENT_EMITTER_COMMAND.clearAll:
          this.setState({
            showSpace: false,
            showOcean: false,
            showRain: false,
            showSnow: false,
            showSnowSlow: false,
            showTraveler: false
          })
          break
        case EVENT_EMITTER_COMMAND.show:
          this.setState({ ...showDefault })
          break
        case EVENT_EMITTER_COMMAND.showAll:
          this.setState({
            showSpace: true,
            showOcean: true,
            showRain: true,
            showSnow: true,
            showTraveler: true,
            showSnowSlow: true
          })
          break
        case EVENT_EMITTER_COMMAND.showOcean:
          this.setState({ showOcean: true })
          break
        case EVENT_EMITTER_COMMAND.showSpace:
          this.setState({ showSpace: true })
          break
        case EVENT_EMITTER_COMMAND.showRain:
          this.setState({ showRain: true, background: rainBackground })
          break
        case EVENT_EMITTER_COMMAND.showTraveler:
          this.setState({ showTraveler: true })
          break
        case EVENT_EMITTER_COMMAND.clearTraveler:
          this.setState({ showTraveler: false })
          break
        case EVENT_EMITTER_COMMAND.removeAnimate:
          clearInterval(this.animateIntervalId)
          this.setState({
            showSpace: false,
            showOcean: false,
            showRain: false,
            showSnow: false,
            showTraveler: false
          })
          break
        case EVENT_EMITTER_COMMAND.excuseAnimate:
          this.animateIntervalId = setInterval(this.animateInterval, 1000)
          break
        case EVENT_EMITTER_COMMAND.showSnow:
          this.setState({ showSnow: true })
          break
        case EVENT_EMITTER_COMMAND.clearSnow:
          this.setState({ showSnow: false })
          break
        case EVENT_EMITTER_COMMAND.showSnowSlow:
          this.setState({ showSnowSlow: true, showRain: false })
          break
        case EVENT_EMITTER_COMMAND.clearSnowSlow:
          this.setState({ showSnowSlow: false })
          break
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.animateIntervalId)
  }

  componentWillMount() {
    // this.props.getPortfolioData(this.props.paramPublicKey)
  }

  renderLoading() {
    return (
      <LoadingPage width='100%' height='100%' position='relative' />
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showRain !== this.state.showRain) {
      $('body').css({ background: this.state.showRain ? rainBackground : defaultBackground })
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showRain &&
          <RainEffect />
        }
        {this.state.showSnow && <SnowFallEffect />}
        {this.state.showSnowSlow && <SnowFallSlowEffect />}
        <Suspense fallback={this.renderLoading()}><Slider /></Suspense>
        <Suspense fallback={this.renderLoading()}><Skill /></Suspense>
        <Suspense fallback={this.renderLoading()}><PortfolioArea /> </Suspense>
        <Suspense fallback={this.renderLoading()}><Contact /> </Suspense>
        <Suspense fallback={this.renderLoading()}><Projects /> </Suspense>
        <Suspense fallback={this.renderLoading()}><Hobbies /> </Suspense>
        <div className='row'>
            <div className='col-xl-12 col-md-12'>
              <Suspense fallback={this.renderLoading()}>
                <YoutubeSlider />
              </Suspense>
            </div>
          </div>
        {this.state.showOcean &&
          <Suspense fallback={this.renderLoading()}>
            <SeaFooter />
          </Suspense>}
        <Music listAudioUrl={[]}/>
      </React.Fragment>
    )
  }
}

export default withEventEmitter(Portfolio)
import React, { PureComponent, Suspense } from 'react';
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import './style.scss'
import Header from './header'
import SeaFooter from './footer'

const Banner = React.lazy(() => import('./banner'));
const Info = React.lazy(() => import('./info'));
const RainEffect = React.lazy(() => import('./../common/cssEffects/rain/rain'))
const MosaicGround = React.lazy(() => import('./../common/cssEffects/mosaicGround/mosaic'))

const experienceData = [
  {
    name: 'TiTan Technology',
    time: '01/2019 to present',
    isActive: true,
    position: 'Full Stack Web Developer, ReactJS and .Net core',
    description: 'Participate in Front-end/Back-end develop a web app using ReactJS, .Net core. Familiar with Docker, jira, .Net core micro-service'
  },
  {
    name: 'KoLab LLC',
    time: '04/2017 to 12/2018',
    position: 'Frond end Web Developer, ReactJS',
    description: 'Participate in Front-end develop some web apps using ReactJS, .Net core. Familiar with Docker, jira, .Net core micro-service.',
    projects: 'Maestro - event building, work ID - recruitment, 7Sport and UFA Sport - Bet games'
  },
  {
    name: 'CityNow Company',
    time: '10/2016 to 04/2017',
    position: 'Full stack Web Developer, ReactJS and Scala',
    description: 'Participate in Front-end/Back-end develop some web apps using Scala, ReactJS.',
    projects: 'Delorean - ERP, Swallow - Japanese job brokerage web page (product)'
  },
  {
    name: 'Gameloft Company',
    time: '10/2015 to 10/2016',
    position: 'Game dev',
    description: 'Participate to build and fix some issues in mobile game.',
    projects: 'Asphalt Nitro, PES 2015'
  },
  {
    name: 'Fujinet Company',
    time: '07/2015 to 09/2015',
    position: 'Intern',
    description: 'Learn how to build a website with java - spring - hibernate'
  },
]

const educationData = [
  {
    name: 'VNUHCM-University of Science',
    isActive: true,
    position: 'Specialized in software engineering',
    time: '09/2011 to 09/2015',
    description: 'When I was a student, I studied a lot about career development in software technology and then I decided to choose web programming because I particularly like customize and draw on my websites.',
    projects: 'news offline - windows phone, shopping online web - ASP.NET MVC 4, TankVN - Game - MS XNA 4.0',
    references: [
      {
        name: 'Shopping online',
        url: 'https://www.youtube.com/watch?v=QkPch76obeM'
      },
      {
        name: 'TankVN',
        url: 'https://www.youtube.com/watch?v=LwJa69CBARk'
      }
    ]
  }
]

class UIMakeUp extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.renderPersonalInfo = this.renderPersonalInfo.bind(this)
    this.renderExperience = this.renderExperience.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
  }

  componentDidMount () {
    $('body').css({ margin: '0 0 0 0' })
  }

  componentWillUnmount () {
    $('body').css({ margin: '18px 12vw 34px' })
  }

  renderPersonalInfo () {
    return (
      <div className='info-content'>
        <h1>TRẦN THANH TÀI</h1>
        <div className='address'>643/16 · Xô Viết Nghệ Tĩnh, Bình Thạnh, TP HCM, Việt Nam </div>
        mail: <a href='mailto:thanhtai.tttgalaxy@gmail.com'>thanhtai.tttgalaxy@gmail.com</a>
        <p className='welcome'>Welcome to visit my CV online!</p>
        <p className=''>
          I am experienced in <strong>Javascript (ReactJS, Scala, ExpressJS), .NET Core, Java, Postgres, MS SQL Server,...etc</strong>. My
            current target are <strong>ReactJS, .NET core</strong>.
            Have a little experience in using <strong>AWS Console of Amazon Web Services</strong>...<br/>
          (｡◕‿‿◕｡)
        </p>
        <p className='account'>
          Accounts: <br />
          @github: <a target='_blank' href='https://github.com/thanhtai-personal'>https://github.com/thanhtai-personal</a><br/>
          @npm: <a target='_blank' href='https://www.npmjs.com/settings/demonking/packages'>https://www.npmjs.com/demonking</a><br/>
          @linkedIn: <a target='_blank' href='https://www.linkedin.com/in/tran-thanh-tai-539250129/'>https://www.linkedin.com/</a><br/>
        </p>
      </div>
    )
  }

  renderExperience (listData) {
    return (
      <div className='info-content'>
        {listData.map((data, index) => {
          return (
          <styled.ExperienceList key={`info-content-${data.name}-${index}`}>
            <div className='organization-data' key={`info-content-2-${data.name}-${index}`}>
              <div className='organization-name'>{data.name}</div>
              <div className='organization-time'>{data.time}</div>
              {data.position && <div className='organization-pos'>{data.position}</div>}
              <div className='organization-des'>{data.description}</div>
              {data.projects && <div className='organization-des'>Projects: {data.projects}</div>}
              {data.references && <div className='organization-ref'>
                {data.references.map((ref, index) => (
                    <div className='organization' key={`ref-${data.name}-${index}`}>{ref.name}: 
                      <a href={ref.url} target='_blank'> {ref.url}</a>
                    </div>
                ))}
              </div>}
            </div>
          </styled.ExperienceList>
        )})}
      </div>
    )
  }

  renderLoading () {
    return (
      <div className='loading'><h2>Loading...</h2></div>
    )
  }

  render () {
    return (
      <React.Fragment>
        <Suspense fallback={this.renderLoading()}>
          <RainEffect />
        </Suspense>
        <Header />
        <div className='home-page-background-color'></div>
        <div className='home-page'>
          <div className='home-page-body'>
            <div className='body-content'>
              <Suspense fallback={this.renderLoading()}>
                <Banner />
              </Suspense>
              <Suspense fallback={this.renderLoading()}>
                <Info title='Personal Info' content={this.renderPersonalInfo()} />
              </Suspense>
              <Suspense fallback={this.renderLoading()}>
                <Info title='Experience' content={this.renderExperience(experienceData)} />
              </Suspense>
              <Suspense fallback={this.renderLoading()}>
                <Info title='Education' content={this.renderExperience(educationData)} />
              </Suspense>
              {/* <Suspense fallback={this.renderLoading()}>
                <MosaicGround />
              </Suspense> */}
              <Suspense fallback={this.renderLoading()}>
                <Info title='' content={(<div><br/><br/><br/></div>)} />
              </Suspense>
            </div>
            <Suspense fallback={this.renderLoading()}>
              <SeaFooter />
            </Suspense>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UIMakeUp
import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import { TabManagerWrapper } from 'window-tabs-management'
import AudioPlayer from './../utils/audioPlayer'
import PopUp from './../utils/popup/index.jsx'

// import music from './resource/background.mp3'
// import tae from './resource/tinh_anh_em.mp3'
// import hongnhan from './resource/Hong-Nhan-Piano-Version-Jack-Liam.mp3'
// import nguoi_theo_duoi_anh_sang from './resource/nguoi_theo_duoi_anh_sang.mp3'
// import hkda from './resource/Hao-Khi-Dong-A-Doan-CMN-Sao-Bien-Phu-Yen.mp3'
// import playing_mot_khuc_hong_tran from './resource/playing_mot_khuc_hong_tran.mp3'
// import hkvn from './resource/Hao-Khi-Viet-Nam-Phan-Dinh-Tung.mp3'
// import muon_ca_the_gian_biet_ta_yeu_nguoi from './resource/muon_ca_the_gian_biet_ta_yeu_nguoi.mp3'
// import cho_toi_xin_mot_ve_di_tuoi_tho from './resource/cho_toi_xin_mot_ve_di_tuoi_tho.mp3'
// import cho_toi_xin_mot_ve_di_tuoi_tho_beat from './resource/cho_toi_xin_mot_ve_di_tuoi_tho_beat.mp3'
// import co_gai_den_tu_hom_qua from './resource/co_gai_den_tu_hom_qua.mp3'
import co_gai_den_tu_hom_qua_beat from './resource/co_gai_den_tu_hom_qua_beat.mp3'
// import ngay_hom_qua from './resource/ngay_hom_qua.mp3'
// import yen_binh from './resource/yen_binh.mp3'
// import diep_khuc_tuoi_tho from './resource/diep_khuc_tuoi_tho.mp3'


const avatarUrls = [
  './images/avatar5.jpg',
  './images/stock-photo.jpg',
  './images/avatar2.jpg',
  './images/avatar3.jpg',
  './images/avatar4.jpg',
  './images/avatar.jpg',
  './images/avatar6.jpg',
  './images/avatar7.jpg',
]
const backgroundAudioList = [
  // {
  //   name: 'Cho tôi xin một vé đi tuổi thơ',
  //   src: cho_toi_xin_mot_ve_di_tuoi_tho
  // },
  // {
  //   name: 'Điệp khúc tuổi thơ',
  //   src: diep_khuc_tuoi_tho
  // },
  // {
  //   name: 'Cô gái đến từ hôm qua',
  //   src: co_gai_den_tu_hom_qua
  // },
  // {
  //   name: 'Ngày hôm qua',
  //   src: ngay_hom_qua
  // },
  {
    name: 'Cô gái đến từ hôm qua beat',
    src: co_gai_den_tu_hom_qua_beat
  },
  // {
  //   name: 'Cho tôi xin một vé đi tuổi thơ beat',
  //   src: cho_toi_xin_mot_ve_di_tuoi_tho_beat
  // },
  // {
  //   name: 'Yên Bình',
  //   src: yen_binh
  // }
]



const menuKeys = {
  about: 'about',
  experience: 'experience', 
  education: 'education', 
  skills: 'skills', 
  projects: 'projects',
  interests: 'interests', 
  the_end: 'the_end',
}

const menus = [
  { key: menuKeys.about, text: 'ABOUT' },
  { key: menuKeys.experience, text: 'EXPERIENCE' },
  { key: menuKeys.education, text: 'EDUCATION' },
  { key: menuKeys.skills, text: 'SKILLS' },
  { key: menuKeys.projects, text: 'PROJECTS' },
  { key: menuKeys.interests, text: 'INTERESTS' },
  { key: menuKeys.the_end, text: 'THE END' },
]

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

class Blog extends PureComponent {
  constructor(props) {
    super(props)
    this.avatarNumber = avatarUrls.length - 1
    this.state = {
      avatarImageIndex: 0,
      isOpenMusicBox: false,
      backgroundMusicState: 'play'
    }
    this.menus = menus.map((menu, index) => ({ ...menu, id: `menu-item-${index}` }))
    this.menus[0].isActive = true
    this.experienceData = experienceData
    this.educationData = educationData
    this.handleClickAvatar = this.handleClickAvatar.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.renderTab = this.renderTab.bind(this)
    this.renderTabContent = this.renderTabContent.bind(this)
    this.renderAbout = this.renderAbout.bind(this)
    this.renderExperience = this.renderExperience.bind(this)
    this.renderProjects = this.renderProjects.bind(this)
    this.renderSkills = this.renderSkills.bind(this)
    this.renderEnd = this.renderEnd.bind(this)
    this.renderInterest = this.renderInterest.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.tabManager = props.tabManager
    this.tabData = props.tabData
    this.tabManager.setManagerData([{ key: 'isRedirect', value: false }])
    this.handleRedirectApp = this.handleRedirectApp.bind(this)
    this.setMusicState = this.setMusicState.bind(this)
  }

  handleKeyDown (event) {
    if (event.altKey) {
      switch (event.keyCode) {
        case 80:
        case '80':
          this.setMusicState(this.state.backgroundMusicState === 'play' ? 'pause' : 'play')
          break;
        case 83:
        case '83':
          this.setMusicState('stop')
          break;
        case 78:
        case '78':
          if (event.shiftKey) 
            this.setMusicState('play', () => {
              this.audio.prev()
            })
          else
            this.setMusicState('play', () => {
              this.audio.next()
            })
          break;
        default:
          break;
      }
    }
  }

  componentDidMount() {
    $('body').css({
      fontFamily: '"Permanent Marker", cursive',
      margin: '18px 12vw 34px',
      backgroundImage: 'none',
      backgroundColor: '#B2EBF2'
    })
    this.tabManager.addTabListener((event) => {
      if (event.key) {
        let oldData = {}, newData = {}
        try {
          oldData = event.oldValue ? JSON.parse(event.oldValue) : {}
          newData = event.newValue ? JSON.parse(event.newValue) : {}
        } catch (error) {
          oldData = event.oldValue
          newData = event.newValue
        }
        
        if (oldData.musicStartedTime !== newData.musicStartedTime) {
          this.setMusicState('stop')
          this.tabManager.setTab(this.tabData.id, [{ key: 'isOpenMusic', value: false }])
        }
      }
      if (this.tabManager.getData('isRedirect')) {
        window.location.replace('/login')
      }
    })
    this.audio = AudioPlayer({ src: backgroundAudioList, isVideo: false })
    setTimeout(() => {
      this.setMusicState('play')
    }, 7000)
    document.addEventListener('keydown', this.handleKeyDown)
    
  }

  handleRedirectApp () {
    this.tabManager.emit('isRedirect', true) //emit to other tab redirect
    window.location.replace('/login')
  }

  componentWillUnmount() {
    $('body').css({
      background: 'url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562129381/web_images/background_jath9x.png) center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    })
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleClickAvatar() {
    if (this.state.avatarImageIndex < this.avatarNumber) {
      let newImg = this.state.avatarImageIndex + 1
      this.setState({ avatarImageIndex: newImg })
    } else {
      this.setState({ avatarImageIndex: 0 })
    }
  }

  renderMenu() {
    return (
      <styled.Menu>
        {this.menus.map((menu) => (
          <li className={menu.isActive ? 'active' : ''}
            id={menu.id}
            key={menu.id}
            onClick={(e) => {
              this.menus = this.menus.map((men) => {
                if (men.id === e.target.id) men.isActive = true
                else men.isActive = false
                return men
              })
              this.forceUpdate()
            }}
            onMouseOver={(e) => {
              this.menus = this.menus.map((men) => {
                if (men.id === e.target.id) men.isOnHover = true
                return men
              })
              this.forceUpdate()
            }}
            onMouseLeave={(e) => {
              this.menus = this.menus.map((men) => {
                if (men.id === e.target.id) men.isOnHover = false
                return men
              })
              this.forceUpdate()
            }}
          >{menu.text}</li>
        ))}
        <li className='other-profile' onClick={() => {
          window.open('https://www.tttgalaxy.co.uk/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ', '_blank')
        }}>
            Other public CV
        </li>
      </styled.Menu>
    )
  }

  renderTab() {
    let menusTabElement = this.menus.map((menu) => {
      return (
        <styled.Tab key={menu.id}>
          <div className={`title ${menu.isActive ? 'active-tab' : menu.isOnHover ? 'hover-tab' : 'test'}`}>{menu.text}</div>
        </styled.Tab>
      )
    })
    menusTabElement.push(
      <styled.Tab key='redirect-button'>
        <div className='title redirect-button'
          onClick={this.handleRedirectApp}
        >Login my site</div>
      </styled.Tab>
    )
    return <styled.TabList>{menusTabElement}</styled.TabList>
  }

  renderAbout () {
    return (
      <styled.About>
        <h1>TRẦN THANH TÀI</h1>
        <div className='address'>643/16 · Xô Viết Nghệ Tĩnh, Bình Thạnh, TP HCM, Việt Nam </div>
        mail: <a href='mailto:thanhtai.tttgalaxy@gmail.com'>thanhtai.tttgalaxy@gmail.com</a>
        <p className="welcome">Welcome to visit my CV online!</p>
        <p className="">
          I am experienced in <strong>Javascript (ReactJS, Scala, ExpressJS), .NET Core, Java, Postgres, MS SQL Server,...etc</strong>. My
            current target are <strong>ReactJS, .NET core</strong>.
            Have a little experience in using <strong>AWS Console of Amazon Web Services</strong>...<br/>
          (｡◕‿‿◕｡)
        </p>
        <p className="account">
          Accounts: <br />
          @github: <a target='_blank' href='https://github.com/thanhtai-personal'>https://github.com/thanhtai-personal</a><br/>
          @npm: <a target='_blank' href='https://www.npmjs.com/settings/demonking/packages'>https://www.npmjs.com/demonking</a><br/>
          @linkedIn: <a target='_blank' href='https://www.linkedin.com/in/tran-thanh-tai-539250129/'>https://www.linkedin.com/</a><br/>
        </p>
      </styled.About>
    )
  }

  handleClickMoveDataButton (key, isNext, event) {
    let _listData = key === 'education' ? _.clone(this.educationData) : _.clone(this.experienceData)
    let index = _listData.findIndex((data) => data.isActive)
    _listData[index].isActive = false
    if (isNext) {
      if (index > 0) index = index - 1
    } else {
      if (index < _listData.length - 1) index = index + 1
    }
    _listData[index].isActive = true
    if (key === 'education') this.educationData = _listData
    else this.experienceData = _listData
    this.forceUpdate()
  }

  renderExperience (key) {
    let experienceElement = ''
    let listData = key === 'education' ? this.educationData : this.experienceData
    listData.forEach((data) => {
      if (data.isActive)
        experienceElement = (<styled.Experience>
          <div className='organization-data'>
            <span className='organization-name'>{data.name}</span>
            {data.position && <div className="organization-pos">{data.position}</div>}
            <div className='organization-des'>{data.description}</div>
            {data.projects && <div className="organization-des">Projects: {data.projects}</div>}
            {data.references && <div className="organization-ref">
              {data.references.map((ref) => (
                  <div className="organization">{ref.name}: 
                  <a href={ref.url} target='_blank'> {ref.url}</a>
                  </div>
              ))}
            </div>}
          </div>
          <span className='organization-time'>{data.time}</span>
        </styled.Experience>)
    })
    return (
      <React.Fragment>
        <styled.ButtonGroup>
          <span className='left' onClick={this.handleClickMoveDataButton.bind(this, key, true)}>{'<<<<'}</span>
          <span className='right' onClick={this.handleClickMoveDataButton.bind(this, key, false)}>{'>>>>'}</span>
        </styled.ButtonGroup>
        {experienceElement}
      </React.Fragment>
    )
  }

  renderProjects () {
    return (
      <styled.Experience>
        <div className="organization-name">Projects</div>
        <div className="organization-des">
          My personal site: <a target='_blank' href='https://tttgalaxy.co.uk'>https://tttgalaxy.co.uk</a>
        </div>
        <div className="organization-des">
          NPM packages: <a target='_blank' href='https://www.npmjs.com/package/window-tabs-management'>https://www.npmjs.com/package/window-tabs-management</a>
        </div>
      </styled.Experience>
    )
  }

  renderSkills () {
    const skillItemData = [
      {
        className: 'devicon-react-original colored',
        title: 'React'
      },
      {
        className: 'devicon-javascript-plain colored',
        title: 'Javascript'
      },
      {
        className: 'devicon-html5-plain-wordmark colored',
        title: 'HTML'
      },
      {
        className: 'devicon-jquery-plain-wordmark colored',
        title: 'Jquery'
      },
      {
        className: 'devicon-bootstrap-plain-wordmark colored',
        title: 'Bootstrap'
      },
      {
        className: 'devicon-css3-plain-wordmark colored',
        title: 'CSS'
      },
      {
        className: 'devicon-dot-net-plain colored',
        title: '.NET'
      },
      {
        className: 'devicon-nodejs-plain-wordmark colored',
        title: 'NodeJS'
      },
      {
        className: 'devicon-java-plain colored',
        title: 'Java'
      },
      {
        className: 'devicon-docker-plain-wordmark colored',
        title: 'Docker'
      },
      {
        className: 'devicon-trello-plain-wordmark colored',
        title: 'Trello'
      }, 
      {
        className: 'devicon-slack-plain-wordmark colored',
        title: 'Slack'
      }, 
      {
        className: 'devicon-github-plain colored',
        title: 'Github'
      }, 
      {
        className: 'devicon-git-plain colored',
        title: 'Git'
      },
      {
        className: 'fab fa-npm',
        title: 'NPM'
      },
    ]
    let skillItemDataElement = skillItemData.map((item) => (
      <li className="list-inline-item">
        <i className={item.className} title={item.title}></i>
      </li>
    ))
    return (
      <styled.Experience>
        <div className="organization-name">Programming Languages &amp; Tools</div>
        <div className="organization-des">
          <ul className="list-inline dev-icons">
            {skillItemDataElement}
          </ul>
        </div>
        <div className="organization-des">
          My current target are ReactJS and .NET core.
        </div>
      </styled.Experience>
    )
  }

  renderEnd () {
    return (
      <styled.Experience>
        <div className="organization-name">All of that!</div>
        <div className="organization-des">
          Finally, I would like to say "Thank You" for spent time to look at my CV profile.
        </div>
        <div className="organization-des">
          You're a flower on earth, let's make your life beautiful and meaningful (◕‿↼)
        </div>
        <div className="organization-des">
          "Có ai cả cuộc đời giữ được một sơ tâm. Có ai cả đời chẵng thay đổi..."
        </div>
      </styled.Experience>
    )
  }

  renderInterest () {
    return (
      <styled.Experience>
        <div className="organization-name">Interests</div>
        <div className="organization-des">
          Apart from being a developer, I enjoy most of my spare time to listen beautiful relaxing music, read history books.
        </div>
        <div className="organization-des">
          In addition, I like to make coffee ☕ alone, watching football, play soccer and many of other sports.
        </div>
        
        <div className="organization-des">
          <a target='_blank' href='https://www.manutd.com/'>
            <styled.ImageShow src='./images/manchester_united.png' alt='mu'/>
          </a>
          <a target='_blank' href='https://tiki.vn/su-viet-12-khuc-trang-ca-tai-ban-bo-sung-ban-do-minh-hoa-p30739432.html'>
            <styled.ImageShow src='./images/sv12.jpg' alt='su_viet'/>
          </a>
        </div>
      </styled.Experience>
    )
  }


  renderTabContent () {
    let contentElement = ''
    const renderTabContentData = (data) => {
      switch (data.key) {
        case menuKeys.about:
          return this.renderAbout()
        case menuKeys.education:
          return this.renderExperience('education')
        case menuKeys.experience:
          return this.renderExperience('experience')
        case menuKeys.projects:
          return this.renderProjects()
        case menuKeys.skills:
          return this.renderSkills()
        case menuKeys.interests:
          return this.renderInterest()
        case menuKeys.the_end:
          return this.renderEnd()
      }
    }
    this.menus.forEach((menu) => {
      if (menu.isActive) {
        contentElement = (
          <styled.TabContent key={menu.id}>
            {renderTabContentData(menu)}
          </styled.TabContent>
        )
      }
    })
    return contentElement
  }

  setMusicState (key, cb) {
    if (key === 'play') {
      this.tabData = this.tabManager.setTab(this.tabData.id, [{ key: 'isOpenMusic', value: true }]) || this.tabData
      this.tabData = this.tabManager.getTab(this.tabData.id)
      this.tabManager.setManagerData([{ key: 'musicStartedTime', value: new Date() }])
    }
    this.setState({ backgroundMusicState: key }, () => {
      if (cb && typeof cb === 'function') cb()
      else if (key === 'stop') {
        this.audio.run('pause')
        this.audio.setData('currentTime', 0)
      } else {
        this.audio.run(key)
      }
      
    })
  }

  render() {
    return (
      <div id='blog-page'>
        <styled.SideNavWrapper>
          <styled.Title>TTTGALAXY</styled.Title>
          <styled.ElasticStroke >
            <symbol id="s-text">
              <text textAnchor="middle"
                x="35%"
                y="60%"
              >
                Tài Trần
              </text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#s-text"
                className="text-copy text-copy-1"></use>
              <use xlinkHref="#s-text"
                className="text-copy text-copy-2"></use>
              <use xlinkHref="#s-text"
                className="text-copy text-copy-3"></use>
              <use xlinkHref="#s-text"
                className="text-copy text-copy-4"></use>
              <use xlinkHref="#s-text"
                className="text-copy text-copy-5"></use>
            </g>
          </styled.ElasticStroke>
          <styled.CenterWrapper>
            <styled.ImageAvatar
              alt="avatar"
              title="Don't touch me!"
              src={avatarUrls[this.state.avatarImageIndex]}
              onClick={this.handleClickAvatar}
            />
          </styled.CenterWrapper>
          <styled.CenterWrapper>
            {this.renderMenu()}
          </styled.CenterWrapper>
        </styled.SideNavWrapper>
        <styled.MainWrapper>
          {this.renderTab()}
          {this.renderTabContent()}
          <div onClick={() => {
            this.setState({
              isOpenMusicBox: !this.state.isOpenMusicBox
            })
          }}>
            {/* <styled.OpenForm>Music Box</styled.OpenForm> */}
          </div>
        </styled.MainWrapper>
        <styled.MusicBox>
          {/* <PopUp 
            id='music-box'
            className='music-box'
            open={this.state.isOpenMusicBox}
            header={(<div>{this.audio ? this.audio.getCurrentSoundData().name : 'Music box'}</div>)}
            content={(<div>
              <br /> Music state: {this.state.backgroundMusicState}<br /><br />
              <styled.MusicButton onClick={() => {
                this.setMusicState('play')
              }}>Play (Alt + P)</styled.MusicButton><br />
              <styled.MusicButton onClick={() => {
                this.setMusicState('pause')
              }}>Pause (Alt + P)</styled.MusicButton><br />
              <styled.MusicButton onClick={() => {
                this.setMusicState('stop')
              }}>Stop (Alt + S)</styled.MusicButton><br />
              <styled.MusicButton onClick={() => {
                this.setMusicState('play', () => {
                  this.audio.next()
                })
              }}>Next (Alt + N)</styled.MusicButton><br />
              <styled.MusicButton onClick={() => {
                this.setMusicState('play', () => {
                  this.audio.prev()
                })
              }}>Prev (Alt + Shift + N)</styled.MusicButton>
            </div>)}
          /> */}
        </styled.MusicBox>
      </div>
    )
  }
}

export default TabManagerWrapper(Blog, 'blog-page', { isActive: false })
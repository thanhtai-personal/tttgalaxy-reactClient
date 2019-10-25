import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'

const avatarUrls = [
  './images/stock-photo.jpg',
  './images/avatar.jpg',
  './images/avatar2.jpg',
  './images/avatar3.jpg',
  './images/avatar4.jpg',
  './images/avatar5.jpg',
  './images/avatar6.jpg',
  './images/avatar7.jpg',
  './images/avatar8.jpg',
]



const menuKeys = {
  about: 'about',
  experience: 'experience', 
  education: 'education', 
  skills: 'skills', 
  projects: 'projects', 
  the_end: 'the_end',
}

const menus = [
  { key: menuKeys.about, text: 'ABOUT' },
  { key: menuKeys.experience, text: 'EXPERIENCE' },
  { key: menuKeys.education, text: 'EDUCATION' },
  { key: menuKeys.skills, text: 'SKILLS' },
  { key: menuKeys.projects, text: 'PROJECTS' },
  { key: menuKeys.the_end, text: 'THE END' },
]

const experienceData = [
  {
    name: 'TiTan Technology',
    time: '01/2019 to present',
    isActive: true,
    description: ''
  },
  {
    name: 'KoLabs LLC',
    time: '01/2019 to present',
    description: ''
  }
]

const educationData = [
  {
    name: 'TiTan Technology',
    time: '01/2019 to present',
    description: ''
  }
]

class Blog extends PureComponent {
  constructor(props) {
    super(props)
    this.avatarNumber = avatarUrls.length - 1
    this.state = {
      avatarImageIndex: 0
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
  }

  componentDidMount() {
    $('body').css({
      fontFamily: '"Permanent Marker", cursive',
      margin: '18px 12vw 34px',
      backgroundImage: 'none',
      backgroundColor: '#B2EBF2'
    })
  }

  componentWillUnmount() {
    $('body').css({
      background: 'url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562129381/web_images/background_jath9x.png) center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    })
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
      </styled.Menu>
    )
  }

  renderTab() {
    return this.menus.map((menu) => {
      return (
        <styled.Tab key={menu.id}>
          <div className={`title ${menu.isActive ? 'active-tab' : menu.isOnHover ? 'hover-tab' : 'test'}`}>{menu.text}</div>
        </styled.Tab>
      )
    })
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
          @github: <a href='https://github.com/thanhtai-personal'>https://github.com/thanhtai-personal</a><br/>
          @npm: <a href='https://www.npmjs.com/settings/demonking/packages'>https://www.npmjs.com/demonking</a><br/>
          @linkedIn: <a href='https://www.linkedin.com/in/tran-thanh-tai-539250129/'>https://www.linkedin.com/</a><br/>
        </p>
      </styled.About>
    )
  }

  handleClickMoveDataButton (e, key, isNext) {
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

  renderExperience (e, key, isNext) {
    let experienceElement = ''
    let listData = key === 'education' ? this.educationData : this.experienceData
    listData.forEach((data) => {
      if (data.isActive)
        experienceElement = (<styled.Experience>
          <div className='organization-name'>{data.name}</div>
          <div className='organization-time'>{data.time}</div>
          <div className='organization-des'>{data.description}</div>
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
    
  }

  renderSkills () {
    
  }

  renderEnd () {
    
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
          return this.renderExperience()
        case menuKeys.projects:
          return this.renderProjects()
        case menuKeys.skills:
          return this.renderSkills()
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

  render() {
    return (
      <div id='blog-page'>
        <styled.SideNavWrapper>
          <styled.Title>TTTGALAXY</styled.Title>
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
        </styled.MainWrapper>
      </div>
    )
  }
}

export default Blog
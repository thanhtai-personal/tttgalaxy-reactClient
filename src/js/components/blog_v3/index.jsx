import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import { TabManagerWrapper } from 'window-tabs-management'


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

class Blog extends PureComponent {
  constructor (props) {
    super(props)
    this.avatarNumber = avatarUrls.length - 1
    this.tabManager = props.tabManager
    this.tabData = props.tabData
    let listTab = this.tabManager.getTabList()
    let isFirstTab = !listTab || (listTab && _.isEmpty(listTab)) || (listTab && listTab.length === 1)
    if (isFirstTab) {
      this.tabManager.setManagerData([{ key: 'isMagical', value: true }])
    }
    this.state = {
      avatarImageIndex: 0,
      isOpenMusicBox: false,
      backgroundMusicState: 'play',
      isMagical: isFirstTab ? true : this.tabManager.getData('isMagical')
    }
    this.menus = menus.map((menu, index) => ({ ...menu, id: `menu-item-${index}` }))
    this.menus[0].isActive = true
    this.handleClickAvatar = this.handleClickAvatar.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown (event) {
    if (event.altKey) {
      switch (event.keyCode) {
        case 71:
        case '71':
          this.setState({ isMagical: false }, () => {
            this.tabManager.setManagerData([{ key: 'isMagical', value: false }])
          })
          break;
        default:
          break;
      }
    }
  }


  componentDidMount () {
    $('body').css({
      fontFamily: '"Permanent Marker", cursive',
      backgroundImage: 'none',
      backgroundColor: '#B2EBF2'
    })
    document.addEventListener('beforeunload', () => {
      let listTab = this.tabManager.getTabList()
      if (!listTab || (listTab && _.isEmpty(listTab)) || (listTab && listTab.length === 1)) {
        this.tabManager.setManagerData([{ key: 'isMagical', value: true }])
      }
    })
    this.tabManager.addTabListener((event) => {
      if (!this.tabManager.getData('isMagical') && this.state.isMagical) {
        this.setState({ isMagical: false })
      }
    })
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    $('body').css({
      background: 'url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562129381/web_images/background_jath9x.png) center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    })
    document.removeEventListener('beforeunload', () => {
      let listTab = this.tabManager.getTabList()
      if (!listTab || (listTab && _.isEmpty(listTab)) || (listTab && listTab.length === 1)) {
        this.tabManager.setManagerData([{ key: 'isMagical', value: true }])
      }
    })
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleClickAvatar () {
    if (this.state.avatarImageIndex < this.avatarNumber) {
      let newImg = this.state.avatarImageIndex + 1
      this.setState({ avatarImageIndex: newImg })
    } else {
      this.setState({ avatarImageIndex: 0 })
    }
  }

  renderMenu () {
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

  render () {
    if (this.state.isMagical) {
      return (
        <styled.MagicalPanel>
          <styled.ElasticStrokeFree>
            <symbol id="s-text">
              <text textAnchor="middle"
                x="45%"
                y="60%"
              >
                __,``._,``-ooOOO_TTTGALAXY_OOOoo-``,_.``,__
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
          </styled.ElasticStrokeFree>
        </styled.MagicalPanel>
      )
    }
    return (
      <div id='blog-page'>
        <styled.SideNavWrapper>
          <styled.Title>TTTGALAXY</styled.Title>
          <styled.ElasticStroke>
            <symbol id="s-text">
              <text textAnchor="middle"
                x="45%"
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
      </div>
    )
  }
}

export default TabManagerWrapper(Blog, 'blog-page', { isActive: false })
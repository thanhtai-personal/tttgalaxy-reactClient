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
    this.handleClickAvatar = this.handleClickAvatar.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
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
        <li className='other-profile' onClick={() => {
          window.open('https://www.tttgalaxy.co.uk/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ', '_blank')
        }}>
            Other public CV
        </li>
      </styled.Menu>
    )
  }

  render() {
    return (
      <div id='blog-page'>
        <styled.SideNavWrapper>
          <styled.Title>TTTGALAXY</styled.Title>
          <styled.ElasticStroke viewBox="0 0 25vw 80">
            <symbol id="s-text">
              <text text-anchor="middle"
                x="45%"
                y="60%"
              >
                Tài Trần
              </text>
            </symbol>
            <g class="g-ants">
              <use xlinkHref="#s-text"
                class="text-copy text-copy-1"></use>
              <use xlinkHref="#s-text"
                class="text-copy text-copy-2"></use>
              <use xlinkHref="#s-text"
                class="text-copy text-copy-3"></use>
              <use xlinkHref="#s-text"
                class="text-copy text-copy-4"></use>
              <use xlinkHref="#s-text"
                class="text-copy text-copy-5"></use>
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
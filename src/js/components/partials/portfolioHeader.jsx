import React from 'react'
import { connect } from 'react-redux'

import '../portfolio/v2/template/melan/css/style.css'

import ActionService from '../../actions'

import { withEventEmitter } from './../../middleware'
import { EVENT_EMITTER_COMMAND } from './../../constants/enums'
import styled from 'styled-components'

const Promp = styled.input`
width: 150px;
color: lightblue;
background: darkblue;
opacity: 0.5;
border-radius: 5px;
padding-left: 8px;
margin-left: 35px;
`


class PortfolioHeader extends React.PureComponent {

  constructor (props) {
    super(props)
    this.onPrompKeydown = this.onPrompKeydown.bind(this)
  }

  componentWillReceiveProps(nextProps) {
  }

  onPrompKeydown = (e) => {
    if (e.keyCode === 13) {
      Object.keys(EVENT_EMITTER_COMMAND).forEach((key) => {
        if (e.target.value === EVENT_EMITTER_COMMAND[key]) {
          this.props.eventEmitter.emit('promp-action', e.target.value ? e.target.value.trim() : '')
        }
      })
    }
  }

  render() {
    // const { props: { setLanguage, language } } = this
    return (
      <header>
        <div className='header-area '>
          <div id='sticky-header' className='main-header-area'>
            <div className='container-fluid'>
              <div className='row align-items-center'>
                <div className='col-xl-3 col-lg-2'>
                  <div className='logo'>
                    <Promp onKeyDown={this.onPrompKeydown} placeholder='Type an action' />  
                  </div>
                </div>
                <div className='col-xl-6 col-lg-7'>
                  <div className='main-menu  d-none d-lg-block'>
                    <nav>
                      <ul id='navigation'>
                        <li><a className='active' href='/public/portfolio'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/games'>Services</a></li>
                        <li><a href='/blog'>Blog <i className='ti-angle-down'></i></a>
                          <ul className='submenu'>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/single-blog'>Single Blog</a></li>
                          </ul>
                        </li>
                        <li><a href='#'>Pages <i className='ti-angle-down'></i></a>
                          <ul className='submenu'>
                            <li><a href='/portfolio'>Portfolio</a></li>
                          </ul>
                        </li>
                        <li><a href='/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ'>Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                  <div className='Appointment'>
                    <div className='book_btn d-none d-lg-block'>
                      <a target='_blank' href='/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ' className='btn contact-me'>Contact Me</a>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='mobile_menu d-block d-lg-none'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


function mapStateToProps({ common: { language } }) {
  return {
    language: language.header
  };
}

export default connect(mapStateToProps, { logout: ActionService.logout })(withEventEmitter(PortfolioHeader))
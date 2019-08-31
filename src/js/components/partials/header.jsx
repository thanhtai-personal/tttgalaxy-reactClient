import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkToken } from './../../helper'

import ActionService from '../../actions'

import './header.scss'

class Header extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps (nextProps) {
    console.error('next', nextProps)
  }

  render() {
    const { props: { setLanguage, language } } = this
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ttt-custom-header" id="header-7319">
        <div className="navbar-brand logo">
          TTTGalaxy
        </div>
        <ul className="navbar-nav">
          <li className="nav-item home active"><Link to="/home">{language.home}</Link></li>
          <li className="nav-item portfolio"><Link to="/portfolio">{language.makeYourPortfolio}</Link></li>
          {/* <li className="nav-item games"><Link to="/games">{language.game}</Link></li> */}
          {/* <li className="nav-item shopping"><Link to="/novals">language.novel</Link></li> */}
          {/* <li className="nav-item shopping"><Link to="/mpthaotrang">PV Thao Trang shopping</Link></li> */}
        </ul>
        <div className="dropdown right">
          <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            {language.language}
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-item"><span className="cursor-pointer" onClick={() => { setLanguage('en') }}>English</span></div>
            <div className="dropdown-item"><span className="cursor-pointer" onClick={() => { setLanguage('vi') }}>Vietnamese</span></div>
          </div>
        </div>
        {checkToken() &&
          <div className="dropdown right">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              {language.userSetting}
            </button>
            <div className="dropdown-menu">
              {/* <div className="dropdown-item"><Link to="/#">Profile</Link></div> */}
              {/* <div className="dropdown-item"><Link to="/#">Blog</Link></div> */}
              <div className="dropdown-item logout"><Link to="#" onClick={this.props.logout}>{language.logout}</Link></div>
            </div>
          </div>
        }
      </nav>
    )
  }
}


function mapStateToProps({ common: { language } }) {
  return {
    language: language.header
  };
}

export default connect(mapStateToProps, { logout: ActionService.logout })(Header)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkToken } from './../../helper'

import ActionService from '../../actions'

import './header.scss'

class Header extends React.PureComponent {
  render () {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ttt-custom-header" id="header-7319">
        <div className="navbar-brand logo">
          TTTGalaxy
        </div>
        <ul className="navbar-nav">
          <li className="nav-item home active"><Link to="/home">Home</Link></li>
          <li className="nav-item portfolio"><Link to="/portfolio">About</Link></li>
          <li className="nav-item games"><Link to="/games">Games</Link></li>
          <li className="nav-item shopping"><Link to="/novals">Novals</Link></li>
          <li className="nav-item shopping"><Link to="/mpthaotrang">PV Thao Trang shopping</Link></li>
        </ul>
        {checkToken() &&
          <div className="dropdown right">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              User Setting
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item"><Link to="/#">Profile</Link></div>
              <div className="dropdown-item"><Link to="/#">Blog</Link></div>
              <div className="dropdown-item logout"><Link to="/#" onClick={this.props.logout}>Logout</Link></div>
            </div>
          </div>
        }
      </nav>
    )
  }
}


function mapStateToProps ({ state }) {
  return {
  };
}

export default connect(mapStateToProps, { logout: ActionService.logout })(Header)
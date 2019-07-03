import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

class Header extends React.PureComponent {
  render () {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ttt-custom-header" id="header-7319">
        <a className="navbar-brand" href="#">
          TTTGalaxy
        </a>
        <ul className="navbar-nav">
          <li className="nav-item home active"><Link to="/home">Home</Link></li>
          <li className="nav-item portfolio"><Link to="/portfolio">Portfolio</Link></li>
          <li className="nav-item games"><Link to="/games">Games</Link></li>
          <li className="nav-item shopping"><Link to="/mpthaotrang">PV Thao Trang shopping</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header
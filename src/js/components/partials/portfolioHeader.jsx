import React from 'react'
import { connect } from 'react-redux'

import '../portfolio/v2/template/melan/css/style.css'

import ActionService from '../../actions'


class PortfolioHeader extends React.PureComponent {

  componentWillReceiveProps(nextProps) {
  }

  render() {
    // const { props: { setLanguage, language } } = this
    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <a href="index.html">
                      <img src="img/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a className="active" href="index.html">home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="#">blog <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="single-blog.html">single-blog</a></li>
                          </ul>
                        </li>
                        <li><a href="#">pages <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="elements.html">elements</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                      <a href="#">Contact Me</a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
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

export default connect(mapStateToProps, { logout: ActionService.logout })(PortfolioHeader)
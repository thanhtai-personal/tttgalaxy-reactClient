import React from 'react'
import { connect } from 'react-redux'

import '../portfolio/v2/template/melan/css/style.css'

import ActionService from '../../actions'

class PortfolioFooter extends React.PureComponent {

  componentWillReceiveProps(nextProps) {
  }

  render() {
    // const { props: { setLanguage, language } } = this
    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-6">
                <div className="menu_links">
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="socail_links">
                  <ul>
                    <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-google-plus"></i> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}


function mapStateToProps({ common: { language } }) {
  return {
    language: language.header
  };
}

export default connect(mapStateToProps, { logout: ActionService.logout })(PortfolioFooter)
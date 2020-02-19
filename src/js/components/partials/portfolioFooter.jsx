import React from 'react'
import { connect } from 'react-redux'


import '../portfolio/v2/template/melan/css/style.css'

import ActionService from '../../actions'

class PortfolioFooter extends React.PureComponent {

  componentDidMount() {

  }

  scrollToElement (eId) {
    let elmnt = document.getElementById(eId);
    elmnt && elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    // const { props: { setLanguage, language } } = this
    return (
      <footer className='footer'>
        <div className='footer_top'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-xl-6 col-md-6'>
                <div className='menu_links'>
                  <ul>
                    <li><a onClick={() => { this.scrollToElement('about-me') }} title='go to about area'>Contact</a></li>
                    <li><a onClick={() => { this.scrollToElement('skills') }} title='go to projects area'>Skills</a></li>
                    <li><a onClick={() => { this.scrollToElement('projects') }} title='go to portfolio area'>Projects</a></li>
                    <li><a onClick={() => { this.scrollToElement('hobbies') }} title='go to hobbies & interest area'>Hobbies</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-6 col-md-6'>
                <div className='socail_links'>
                  <ul>
                    <li><a href='https://www.facebook.com/tai.tranthanh1604' target='_blank' rel="noopener noreferrer" title='Facebook'> 
                      <i className='fab fa-facebook'></i> </a></li>
                    <li><a href='https://www.linkedin.com/in/tran-thanh-tai-539250129/' target='_blank' rel="noopener noreferrer" 
                        title='LinkedIn'> <i className='fab fa-linkedin'></i> </a></li>
                    <li><a href='https://www.tttgalaxy.co.uk/about' target='_blank' rel="noopener noreferrer" title='other CV'>
                        <i className='fab fa-instagram'></i> </a></li>
                    <li><a href='https://www.npmjs.com/~demonking' target='_blank' rel="noopener noreferrer" title='NPM packages'>
                        <i className='fab fa-npm'></i> </a></li>
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
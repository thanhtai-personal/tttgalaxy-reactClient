import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { checkToken } from './../../helper'

// import ActionService from '../../actions'

import './header.scss'
import './footer.scss'

class Footer extends React.PureComponent {
  render () {
    return (
      <div className="footer">

      </div>
    )
  }
}


function mapStateToProps ({ state }) {
  return {
  };
}

export default connect(mapStateToProps, { })(Footer)
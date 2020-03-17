import React from 'react'

import Styled from './styled'

class PopUp extends React.PureComponent {
  render() {
    return (
      <Styled.form id={`popup-${this.props.id}`}>
        <div className={`${this.props.open ? 'open' : 'hide'}`}>
          <div className={`form-popup ${this.props.className}`}>
            <form className="form-container">
              {this.props.header || ''}
              {this.props.content || ''}
              {this.props.footer || ''}
            </form>
          </div>
        </div>
      </Styled.form>
    )
  }
}

export default PopUp
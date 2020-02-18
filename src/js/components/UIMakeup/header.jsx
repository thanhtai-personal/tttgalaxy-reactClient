import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom"
import { withEventEmitter } from './../../middleware/index'
import { EVENT_EMITTER_COMMAND } from './../../constants/enums'

class Header extends React.PureComponent {
  constructor (props) {
    super(props)
    this.onPrompKeydown = this.onPrompKeydown.bind(this)
  }

  onPrompKeydown = (e) => {
    if (e.keyCode === 13) {
      switch (e.target.value) {
        case EVENT_EMITTER_COMMAND.clearContent:
        case EVENT_EMITTER_COMMAND.clearOcean:
        case EVENT_EMITTER_COMMAND.clearRain:
        case EVENT_EMITTER_COMMAND.clearSpace:
        case EVENT_EMITTER_COMMAND.clearAll:
        case EVENT_EMITTER_COMMAND.show:
        case EVENT_EMITTER_COMMAND.showAll:
        case EVENT_EMITTER_COMMAND.showOcean:
        case EVENT_EMITTER_COMMAND.showContent:
        case EVENT_EMITTER_COMMAND.showSpace:     
        case EVENT_EMITTER_COMMAND.showRain:
          this.props.eventEmitter.emit('promp-action', e.target.value)
          break;
      }
    }
  }
  render () {
    const { name } = this.props
    return (
      <div className={name}>
        <div className="header-container">
          <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/">
              {name}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <input style={{ width: '100px' }} onKeyDown={this.onPrompKeydown} />
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/games">
                    Games
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default withEventEmitter(Header);

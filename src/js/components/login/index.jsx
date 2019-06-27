import React, { PureComponent } from "react";

import './login.scss'


class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.location = window.location
    this.updateDataEmail = this.updateDataEmail.bind(this)
    this.updateDataPassword = this.updateDataPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateDataEmail (e) {
    let { value } = e.target
    this.props.updateDataInput('email', value)
  }

  updateDataPassword (e) {
    let { value } = e.target
    this.props.updateDataInput('password', value)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.updateDataInput('loginLoading', true)
    this.props.login()
  }

  render () {
    const {
      props: { email, password, loginLoading },
      updateDataPassword,
      updateDataEmail,
      handleSubmit
    } = this
    return (
      <form className="login-form">
        <div className="form-group">
          <big id="title" className="form-text title">Welcome to TTT Galaxy!</big>
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email address</label>
          <input 
            onChange={updateDataEmail}
            type="email" className="form-control" id="email-input" aria-describedby="email-help" placeholder="Enter email" defaultValue={email} />
          <small id="email-help" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Password</label>
          <input 
            onChange={updateDataPassword}
            type="password" className="form-control" id="password-input" placeholder="Password" defaultValue={password} />
        </div>
        <div className="button-wrapper center">
          <button 
            onClick={handleSubmit}
            disabled={loginLoading}
            type="submit" className="btn btn-primary">Login</button>
        </div>
        <small id="register-help" className="form-text text-muted center">
          <a href={`${this.location.origin}/register`}>If not register here!</a>
        </small>
      </form>
    )
  }
}

export default Login
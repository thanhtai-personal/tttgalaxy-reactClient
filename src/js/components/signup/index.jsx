import React, { PureComponent } from "react";

import './signup.scss'


class SignUp extends PureComponent {
  constructor (props) {
    super(props)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this)
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this)
  }

  onSubmitSignUp (e) {
    e.preventDefault()
    this.props.updateDataInput('loadingSubmit', true)
    this.props.signup()
  }

  handleChangeEmail (e) {
    let { value } = e.target
    this.props.updateDataInput('email', value)
  }

  handleChangePassword (e) {
    let { value } = e.target
    this.props.updateDataInput('password', value)
  }

  handleChangePasswordConfirm (e) {
    let { value } = e.target
    this.props.updateDataInput('passwordConfirm', value)
  }

  render () {
    const {
      props: { email, password, passwordConfirm, loadingSubmit },
      handleChangeEmail,
      handleChangePassword,
      handleChangePasswordConfirm,
      onSubmitSignUp
    } = this
    return (
      <form className="login-form">
        <div className="form-group">
          <big id="title" className="form-text title">Let me know who are you</big>
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email address</label>
          <input
            onChange={handleChangeEmail}
            type="email" className="form-control" id="email-input" aria-describedby="email-help" placeholder="Enter email" defaultValue={email} />
          <small id="email-help" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Password</label>
          <input
            onChange={handleChangePassword}
            type="password" className="form-control" id="password-input" placeholder="Password" defaultValue={password} />
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Password confirm</label>
          <input
            onChange={handleChangePasswordConfirm}
            type="password" className="form-control" id="password-input" placeholder="Confirm password" defaultValue={passwordConfirm} />
        </div>
        <div className="button-wrapper center">
          <button
            onClick={onSubmitSignUp} 
            disabled={loadingSubmit}
            type="submit" className={`btn btn-primary btn-signup ${loadingSubmit ? 'btn-disable': ''}`}>Register</button>
        </div>
      </form>
    )
  }
}

export default SignUp
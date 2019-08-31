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

  componentDidUpdate () {
    let { redirectData : { isRedirect, from, to }, updateRedirectData } = this.props
    if (isRedirect && from === window.location.pathname) {
      updateRedirectData()
      this.props.history.push(to)
    }
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
      props: { email, password, passwordConfirm, loadingSubmit, language },
      handleChangeEmail,
      handleChangePassword,
      handleChangePasswordConfirm,
      onSubmitSignUp,
    } = this
    return (
      <form className="login-form">
        <div className="form-group">
          <big id="title" className="form-text title">{language.letMeKnowWhoAreYou}</big>
        </div>
        <div className="form-group">
          <label htmlFor="email-input">{language.emailAddress}</label>
          <input
            onChange={handleChangeEmail}
            type="email" className="form-control" id="email-input" aria-describedby="email-help" placeholder={language.enterEmail} defaultValue={email} />
          <small id="email-help" className="form-text text-muted">{language.neverShareEmail}</small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">{language.password}</label>
          <input
            onChange={handleChangePassword}
            type="password" className="form-control" id="password-input" placeholder={language.password} defaultValue={password} />
        </div>
        <div className="form-group">
          <label htmlFor="password-input">{language.confirmPassword}</label>
          <input
            onChange={handleChangePasswordConfirm}
            type="password" className="form-control" id="password-input" placeholder={language.confirmPassword} defaultValue={passwordConfirm} />
        </div>
        <div className="button-wrapper center">
          <button
            onClick={onSubmitSignUp} 
            disabled={loadingSubmit}
            type="submit" className={`btn btn-primary btn-signup ${loadingSubmit ? 'btn-disable': ''}`}>{language.register}</button>
        </div>
      </form>
    )
  }
}

export default SignUp
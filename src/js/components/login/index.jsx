import React, { Suspense, PureComponent } from "react";
import LoadingPage from './../common/loadingPage'
import { LoginButtonStyled } from './styled'
import './login.scss'

const FacebookLoginButton = React.lazy(() => import('./../common/facebook/login'))
const GoogleLoginButton = React.lazy(() => import('./../common/google/login'))

class Login extends PureComponent {
  constructor (props) {
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

  componentDidUpdate () {
    let { redirectData : { isRedirect, from, to }, updateRedirectData } = this.props
    if (isRedirect && from === window.location.pathname) {
      updateRedirectData()
      this.props.history.push(to)
    }
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
      props: { email, password, loginLoading, language },
      updateDataPassword,
      updateDataEmail,
      handleSubmit,
    } = this
    return (
      <form className="login-form">
        <div className="form-group">
          <big id="title" className="form-text title">{language.welcomeToTTTGalaxy}</big>
        </div>
        <div className="form-group">
          <label htmlFor="email-input">{language.emailAddress}</label>
          <input
            onChange={updateDataEmail}
            type="email" className="form-control" id="email-input" aria-describedby="email-help" placeholder={language.enterEmail} defaultValue={email} />
          <small id="email-help" className="form-text text-muted">{language.neverShareEmail}</small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">{language.password}</label>
          <input
            onChange={updateDataPassword}
            type="password" className="form-control" id="password-input" placeholder={language.password} defaultValue={password} />
        </div>
        <div className="button-wrapper center">
          <button
            onClick={handleSubmit}
            disabled={loginLoading}
            type="submit" className={`btn btn-primary btn-login ${loginLoading ? "btn-disable" : ""}`}>{language.login}</button>
        </div>
        <small id="register-help" className="form-text text-muted center">
          <a href={`${this.location.origin}/register`}>{language.ifNotRegisterHere}</a>
        </small>
        <LoginButtonStyled>
          <Suspense fallback={() => <LoadingPage />}>
            <FacebookLoginButton
              icon='fa-facebook'
            />
          </Suspense>
        </LoginButtonStyled>
        <LoginButtonStyled>
          <Suspense fallback={() => <LoadingPage />}>
            <GoogleLoginButton
              buttonText={language.loginWithGoogle}//'LOGIN WITH GOOGLE'
            />
          </Suspense>
        </LoginButtonStyled>
      </form>
    )
  }
}

export default Login
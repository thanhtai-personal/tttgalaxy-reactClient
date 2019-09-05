
import React from 'react'
import _ from 'lodash'
import actionService from './../actions'
import eng from './../language/eng'
import vi from './../language/vi'
import store from './../store'
import {
  UPDATE_LANGUAGE
} from './../constants/action-types'
// import apiInstant from './../api'

export const logger = store => next => action => {
  // debugger
  // console.log('dispatching', action)
  // let result = next(action)
  // console.log('next state', store.getState())
  // return result
}

export const RequireAuth = (ComposedComponent) => {
  class RequireAuthComponent extends React.PureComponent {
    // Push to login route if not authenticated on mount

    getToken() {
      return window.localStorage.getItem('jwtToken');
    }

    componentWillMount() {
      if (_.isNil(this.getToken())) {
        this.props.history.push('/login')
      } else {
        actionService.getAuthData()
      }
    }

    componentDidUpdate() {
      let { redirectData: { isRedirect, from, to } } = this.props
      if (isRedirect && from === 'token_failed') {
        actionService.resetRedirectData()
        this.props.history.push(to)
      }
    }

    // Push to login route if not authenticated on update
    componentWillUpdate(nextProps) {
      if (_.isNil(this.getToken())) {
        this.props.history.push('/login')
      }
    }

    // Otherwise render the original component
    render() {
      return <ComposedComponent {...this.props} />
    }

  }

  return RequireAuthComponent

}

export const UserLayout = (Layout, ComposedComponent) => {
  class UseHeaderComponent extends React.PureComponent {
    render() {
      const { setLanguage } = this.props
      return (
        < React.Fragment >
          {Layout.header && <Layout.header setLanguage={setLanguage}  />}
          <ComposedComponent {...this.props} />
          {Layout.footer && <Layout.footer />}
        </React.Fragment >
      )
    }

  }

  return UseHeaderComponent

}

export const Localization = (ComposedComponent) => {
  class Localization extends React.PureComponent {
    constructor(props) {
      super(props)
      this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
    }

    componentWillMount() {
      this.handleChangeLanguage(window.localStorage.getItem('language') || 'vi')
    }

    handleChangeLanguage(languageKey) {
      switch (languageKey) {
        case 'vi':
          window.localStorage.setItem('language', 'vi')
          store.dispatch({ type: UPDATE_LANGUAGE, payload: { language: vi } })
          break
        case 'en':
          window.localStorage.setItem('language', 'en')
          store.dispatch({ type: UPDATE_LANGUAGE, payload: { language: eng } })
            break
        default:
            store.dispatch({ type: UPDATE_LANGUAGE, payload: { language: eng } })
            break
      }
    }

    render() {
      return (
        <ComposedComponent setLanguage={this.handleChangeLanguage} {...this.props} />
      )
    }

  }

  return Localization

}
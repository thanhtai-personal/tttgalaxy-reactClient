/* eslint-disable */ 
import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash'
// import ActionService from './../actions'
// import eng from './../language/eng'
// import vi from './../language/vi'
// import store from './../store'
import eventEmitter from 'event-emitter'
// import {
//   UPDATE_LANGUAGE
// } from './../constants/action-types'
// import apiInstant from './../api'

const _eventEmitter = eventEmitter()

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
        this.props.getAuthData()
      }
    }

    componentDidUpdate() {
      let { isRedirect, from, to, updateRedirectData } = this.props
      if (isRedirect && from === window.location.pathname) {
        updateRedirectData()
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

  function mapStateToProps({ 
    // common: { redirectData: { isRedirect, from, to } } 
  }) {
    return {
      // isRedirect, from, to
    };
  }
  
  return connect(mapStateToProps, { 
    // updateRedirectData: ActionService.updateRedirectData,
    // getAuthData: ActionService.getAuthData 
  })(RequireAuthComponent)

}

export const UseLayout = (Layout, ComposedComponent) => {
  class UseHeaderComponent extends React.PureComponent {
    render() {
      const { setLanguage = () => { } } = this.props
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

export const withEventEmitter = (ComposedComponent) => {
  class WithEventComponent extends React.PureComponent {
    render () {
      return <ComposedComponent
        eventEmitter={_eventEmitter}
        {...this.props}
    />
    }
  } 
  return WithEventComponent
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
          // store.dispatch({ type: UPDATE_LANGUAGE, payload: { language: vi } })
          break
        case 'en':
          window.localStorage.setItem('language', 'en')
          // store.dispatch({ type: UPDATE_LANGUAGE, payload: { language: eng } })
            break
        default:
            // store.dispatch({ type: UPDATE_LANGUAGE, payload: { language: eng } })
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
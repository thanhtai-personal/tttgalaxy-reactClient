
import React from 'react'
import _ from 'lodash'
// import actionService from './../actions'
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

    getToken () {
      return window.localStorage.getItem('jwtToken');
    }

    componentWillMount () {
      if (_.isNil(this.getToken())) {
        this.props.history.push('/login')
      }
    }

    // Push to login route if not authenticated on update
    componentWillUpdate (nextProps) {
      if (_.isNil(this.getToken())) {
        this.props.history.push('/login')
      }
    }

    // Otherwise render the original component
    render () {
      return <ComposedComponent {...this.props} />
    }

  }

  return RequireAuthComponent

}

export const UserLayout = (Layout, ComposedComponent) => {
  class UseHeaderComponent extends React.PureComponent {
    render () {
      return (
        < React.Fragment >
          {Layout.header && <Layout.header />}
          <ComposedComponent {...this.props} />
          {Layout.footer && <Layout.footer />}
        </React.Fragment >
      )
    }

  }

  return UseHeaderComponent

}
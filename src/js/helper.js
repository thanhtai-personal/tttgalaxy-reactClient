import _ from 'lodash'

export const checkToken = () => {
  return !_.isNil(window.localStorage.getItem('jwtToken'))
}
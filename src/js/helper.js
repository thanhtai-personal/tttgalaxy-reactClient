import _ from 'lodash'

export const checkToken = () => {
  return !_.isNil(window.localStorage.getItem('jwtToken'))
}

export const getAuthenHeader = () => {
  return {
    'x-access-token': window.localStorage.getItem('jwtToken')
  }
}
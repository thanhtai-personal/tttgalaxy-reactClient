
import _ from 'lodash'

import {
  UPDATE_DATA_INPUT_LOGIN,
  USER_LOGIN,
  RESET_ALL_STATE,
  UPDATE_REDIRECT_DATA,
  GET_AUTH_DATA
} from "../constants/action-types";

// import apiInstant from './../api'
import store from './../store'

export const updateDataInputLogin = (valuePath, value) => {
  let payload = {}
  _.set(payload, valuePath, value)
  return { type: UPDATE_DATA_INPUT_LOGIN, payload };
}

export const login = (data) => {
  return { type: USER_LOGIN, payload: { data } };
}

export const logout = () => {
  window.localStorage.removeItem('jwtToken')
  window.localStorage.clear()
  // apiInstant.setToken(null)
  return { type: RESET_ALL_STATE };
}

export const getAuthData = () => {
  return { type: GET_AUTH_DATA, payload: {} }
}

export const resetRedirectData = () => {
  store.dispatch({
    type: UPDATE_REDIRECT_DATA, payload: { isRedirect: false, from: '#', to: '#' }
  })
}
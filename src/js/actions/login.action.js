
import _ from 'lodash'

import {
  UPDATE_DATA_INPUT_LOGIN,
  USER_LOGIN,
  RESET_ALL_STATE
} from "../constants/action-types";

import apiInstant from './../api'

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
  apiInstant.setToken(null)
  return { type: RESET_ALL_STATE };
}
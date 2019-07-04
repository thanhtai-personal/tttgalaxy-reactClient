
import _ from 'lodash'

import {
  UPDATE_DATA_INPUT_LOGIN,
  USER_LOGIN,
  UPDATE_USER_DATA
} from "../constants/action-types";

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
  return { type: UPDATE_USER_DATA, payload: { userData: {} } };
}
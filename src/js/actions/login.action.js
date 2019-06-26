import _ from 'lodash'

import store from './../store'

import { 
  UPDATE_DATA_INPUT_LOGIN
} from "../constants/action-types";

export const updateDataInput = (valuePath, value) => {
  let payload = {}
  _.set(payload, valuePath, value)
  return { type: UPDATE_DATA_INPUT_LOGIN, payload };
}


export const login = () => {
  let { email, password } = store.getState().login
  let dataRequest = { email, password  }
  apiService.login(dataRequest)
    .then((res, err) => {
      if (err) return console.error("api return", err)
      let dataResponse = res.result
      console.log(dataResponse)
    })
    .catch(error => {
      console.error(error)
    })
}
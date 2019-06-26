import _ from 'lodash'


import { 
  UPDATE_DATA_INPUT_SIGNUP
} from "../constants/action-types";

import store from './../store'

export const updateDataInput = (valuePath, value) => {
  let payload = {}
  _.set(payload, valuePath, value)
  return { type: UPDATE_DATA_INPUT_SIGNUP, payload };
}

export const signUp = () => {
  let { email, password, passwordConfirm } = store.getState().signup
  let dataRequest = { email, password, passwordConfirm  }
  apiService.signUp(dataRequest)
    .then((res, err) => {
      if (err) return console.error("api return", err)
      let dataResponse = res.result
      console.log(dataResponse)
    })
    .catch(error => {
      console.error(error)
    })
}
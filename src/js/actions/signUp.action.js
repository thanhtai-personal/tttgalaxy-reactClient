import _ from 'lodash'


import { 
  UPDATE_DATA_INPUT_SIGNUP,
  SUBMIT_SIGNUP
} from "../constants/action-types";

// import store from './../store'

export const updateDataInput = (valuePath, value) => {
  let payload = {}
  _.set(payload, valuePath, value)
  return { type: UPDATE_DATA_INPUT_SIGNUP, payload };
}

export const signup = () => {
  return { type: SUBMIT_SIGNUP, payload: {} };
}

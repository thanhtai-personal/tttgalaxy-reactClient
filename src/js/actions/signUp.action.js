import _ from 'lodash'
// eslint-disable-next-line
import store from './../store'

import { 
  UPDATE_DATA_INPUT_SIGNUP
} from "../constants/action-types";

export const updateDataInput = (valuePath, value) => (dispatch, getState) => {
  let payload = {}
  _.set(payload, valuePath, value)
  return { type: UPDATE_DATA_INPUT_SIGNUP, payload };
}
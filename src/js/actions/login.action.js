import _ from 'lodash'

import { 
  UPDATE_DATA_INPUT_LOGIN
} from "../constants/action-types";

export const updateDataInput = (valuePath, value) => (dispatch, getState) => {
  let payload = {}
  _.set(payload, valuePath, value)
  return { type: UPDATE_DATA_INPUT_LOGIN, payload };
}
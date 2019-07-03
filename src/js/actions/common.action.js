
import _ from 'lodash'

import { 
  UPDATE_REDIRECT_DATA
} from "../constants/action-types";

export const updateRedirectData = (data = { isRedirect: false, from: '#', to: '#' }) => {
  return { type: UPDATE_REDIRECT_DATA, payload: data };
}
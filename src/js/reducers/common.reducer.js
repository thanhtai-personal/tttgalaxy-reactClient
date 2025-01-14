import {
  UPDATE_REDIRECT_DATA,
  RESET_ALL_STATE,
  VERIFY_TOKEN_FAILED,
  UPDATE_LANGUAGE
} from "../constants/action-types";

import vi from './../language/vi'

const initialState = {
  redirectData: {
    isRedirect: false,
    to: '#',
    from: ''
  },
  language: vi
};

function commonReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_REDIRECT_DATA:
      return { ...state, redirectData: { ...state.redirectData, ...action.payload } }
    case UPDATE_LANGUAGE:
      return { ...state, ...action.payload }
    case VERIFY_TOKEN_FAILED:
      return {redirectData: {
        isRedirect: true,
        to: '/login',
        from: 'token_failed'
      }}
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default commonReducer;
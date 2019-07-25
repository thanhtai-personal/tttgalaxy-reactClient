import {
  UPDATE_REDIRECT_DATA,
  RESET_ALL_STATE
} from "../constants/action-types";

const initialState = {
  redirectData: {
    isRedirect: false,
    to: '#',
    from: ''
  }
};

function commonReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_REDIRECT_DATA:
      return { ...state, redirectData: { ...state.redirectData, ...action.payload } }
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default commonReducer;
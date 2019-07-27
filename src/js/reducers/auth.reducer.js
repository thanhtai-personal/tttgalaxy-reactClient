import { 
  UPDATE_USER_DATA,
  RESET_ALL_STATE,
  GET_AUTH_DATA,
  VERIFY_TOKEN_FAILED
} from "../constants/action-types";

const initialState = {
  userData: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA: 
    case GET_AUTH_DATA:
        return {...state, ...action.payload}
    case VERIFY_TOKEN_FAILED:
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default authReducer;
import { 
  UPDATE_USER_DATA,
  RESET_ALL_STATE
} from "../constants/action-types";

const initialState = {
  userData: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA: 
      return {...state, ...action.payload}
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default authReducer;
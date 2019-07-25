import {
  UPDATE_DATA_INPUT_LOGIN,
  USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_ALL_STATE
} from "../constants/action-types";

const initialState = {
  email: '',
  password: '',
  loginLoading: false
};

function loginReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA_INPUT_LOGIN:
    case USER_LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
      return { ...state, ...action.payload }
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default loginReducer;
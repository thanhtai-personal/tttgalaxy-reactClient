import {
  UPDATE_DATA_INPUT_LOGIN,
  USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "../constants/action-types";

const initialState = {
  email: '',
  password: '',
  loginLoading: false
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA_INPUT_LOGIN:
    case USER_LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
        let newState = { ...state, ...action.payload }
        return newState
    default:
      return state
  }
}

export default loginReducer;
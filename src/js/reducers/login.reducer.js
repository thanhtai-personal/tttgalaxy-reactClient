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
      return {...state, ...action.payload}
    case USER_LOGIN:
      return { ...state, ...action.payload }
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload }
    case LOGIN_FAILED:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default loginReducer;
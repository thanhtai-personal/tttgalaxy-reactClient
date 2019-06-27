import {
  UPDATE_DATA_INPUT_SIGNUP,
  SUBMIT_SIGNUP,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from "../constants/action-types";

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  loadingSubmit: false
};

function signupReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA_INPUT_SIGNUP:
    case SUBMIT_SIGNUP:
    case REGISTER_SUCCESS:
    case REGISTER_FAILED:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default signupReducer;
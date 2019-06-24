import {
  UPDATE_DATA_INPUT_SIGNUP
} from "../constants/action-types";

const initialState = {
  email: '',
  password: '',
  passwordConfirm: ''
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA_INPUT_SIGNUP: 
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default signupReducer;
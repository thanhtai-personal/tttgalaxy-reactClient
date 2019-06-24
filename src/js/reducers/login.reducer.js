import {
  UPDATE_DATA_INPUT_LOGIN
} from "../constants/action-types";

const initialState = {
  email: '',
  password: ''
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA_INPUT_LOGIN: 
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default loginReducer;
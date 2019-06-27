import { UPDATE_USER_DATA } from "../constants/action-types";

const initialState = {
  userData: {}
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA: 
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default authReducer;
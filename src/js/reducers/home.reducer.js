import {
  RESET_ALL_STATE
} from "../constants/action-types";

const initialState = {
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default homeReducer;
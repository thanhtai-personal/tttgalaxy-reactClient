import {
} from "../constants/action-types";

const initialState = {
};

function shopReducer (state = initialState, action) {
  switch (action.type) {
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default shopReducer;
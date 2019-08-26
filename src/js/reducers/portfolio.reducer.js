import {
  UPDATE_PORTFOLIO_DATA,
  SUBMIT_PORTFOLIO_FAILED,
  SUBMIT_PORTFOLIO_SUCCESS,
  SUBMIT_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA,
  RESET_ALL_STATE,
  UPDATE_PUBLIC_PROFILE,
  GET_PORTFOLIO_DATA_FAILED
} from "../constants/action-types";

// import {
//   RENDER_TYPE
// } from "../constants/enums"

const initialState = {
  publicProfile: false,
  profileImageUrl: '',
  skill: [],
  basicInfo: [],
  experiences: [],
  education: [],
  isLoading: true
};

function portfolioReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PORTFOLIO_DATA:
    case SUBMIT_PORTFOLIO_DATA:
    case SUBMIT_PORTFOLIO_FAILED:
    case SUBMIT_PORTFOLIO_SUCCESS:
    case GET_PORTFOLIO_DATA:
    case GET_PORTFOLIO_DATA_FAILED:
    case UPDATE_PUBLIC_PROFILE:
      return { ...state, ...action.payload }
    case RESET_ALL_STATE:
      return initialState
    default:
      return state
  }
}

export default portfolioReducer;
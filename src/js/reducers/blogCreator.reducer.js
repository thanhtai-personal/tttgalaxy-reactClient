import {
  SET_WRITER_DATA,
  SUBMIT_BLOG,
  SUBMIT_BLOG_SUCCESS,
  SUBMIT_BLOG_FAILED
} from "../constants/action-types";

const initialState = {
  writerData: '',
  submitedSuccess: true
};

function blogCreatorReducer (state = initialState, action) {
  switch (action.type) {
    case SET_WRITER_DATA:
      return { ...state, writerData: action.payload }
    case SUBMIT_BLOG:
      return { ...state, ...action.payload }
    case SUBMIT_BLOG_SUCCESS:
      return { ...state, submitedSuccess: true }
    case SUBMIT_BLOG_FAILED: 
      return { ...state, submitedSuccess: false }
    default:
      return state
  }
}

export default blogCreatorReducer;
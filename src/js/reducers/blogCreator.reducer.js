import {
  SET_WRITER_DATA,
  SUBMIT_BLOG,
  SUBMIT_BLOG_SUCCESS,
  SUBMIT_BLOG_FAILED,
  SET_TITLE
} from "../constants/action-types";

const initialState = {
  writerData: '',
  submittedSuccess: true,
  title: ''
};

function blogCreatorReducer (state = initialState, action) {
  switch (action.type) {
    case SET_WRITER_DATA:
      return { ...state, writerData: action.payload }
    case SET_TITLE:
      return { ...state, title: action.payload }
    case SUBMIT_BLOG:
      return { ...state, ...action.payload }
    case SUBMIT_BLOG_SUCCESS:
      return { ...state, submittedSuccess: true }
    case SUBMIT_BLOG_FAILED: 
      return { ...state, submittedSuccess: false }
    default:
      return state
  }
}

export default blogCreatorReducer;
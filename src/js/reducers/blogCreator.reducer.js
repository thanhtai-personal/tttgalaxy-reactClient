import {
  SET_WRITER_DATA,
  SUBMIT_BLOG,
  SUBMIT_BLOG_SUCCESS,
  SUBMIT_BLOG_FAILED,
  SET_TITLE,
  GET_BLOG,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILED,
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILED
} from "../constants/action-types";

const initialState = {
  writerData: '',
  submittedSuccess: true,
  title: '',
  createdTime: '',
  updatedTime: '',
  getDataFailed: false,
  getDataListFailed: false,
  listBlog: [],
  authorId: '',
  blogId: '',
};

function blogCreatorReducer (state = initialState, action) {
  switch (action.type) {
    case SET_WRITER_DATA:
      return { ...state, writerData: action.payload }
    case SET_TITLE:
      return { ...state, title: action.payload }
    case GET_BLOG_SUCCESS:
      return { ...state, getDataFailed: false, writerData: action.payload.htmlContent || '', title: action.payload.title, createdTime: action.payload.createdAt, updatedTime: action.payload.updatedAt }
    case GET_BLOG_FAILED:
      return { ...state, getDataFailed: true }
    case GET_BLOGS_SUCCESS:
      return { ...state, getDataListFailed: false, listBlog: action.payload }
    case GET_BLOGS_FAILED:
      return { ...state, getDataListFailed: true }
    case SUBMIT_BLOG_SUCCESS:
      return { ...state, submittedSuccess: true }
    case SUBMIT_BLOG_FAILED:
      return { ...state, submittedSuccess: false }
    case SUBMIT_BLOG:
    case GET_BLOG:
    case GET_BLOGS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default blogCreatorReducer;
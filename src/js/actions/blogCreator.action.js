
// import _ from 'lodash'

import {
  SET_WRITER_DATA,
  SUBMIT_BLOG,
  SET_TITLE
} from "../constants/action-types";

export const setWriterData = (data) => {
  return { type: SET_WRITER_DATA, payload: data };
}

export const setTitle = (title) => {
  return { type: SET_TITLE, payload: title };
}

export const submitBlog = () => {
  return { type: SUBMIT_BLOG, payload: {} }
}


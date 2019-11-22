
// import _ from 'lodash'

import {
  SET_WRITER_DATA,
  SUBMIT_BLOG
} from "../constants/action-types";

export const setWriterData = (data) => {
  return { type: SET_WRITER_DATA, payload: data };
}

export const submitBlog = (data) => {
  return { type: SUBMIT_BLOG, payload: data }
}
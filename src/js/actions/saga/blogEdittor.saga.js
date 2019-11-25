import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../../store'
import _ from 'lodash'

import {
  SUBMIT_BLOG,
  SUBMIT_BLOG_SUCCESS,
  SUBMIT_BLOG_FAILED
} from '../../constants/action-types'

import apiInstant from '../../api'

//======================================================================
function* submitBlog() {
  let data = store.getState().blogCreator
  const dataSubmit = {
    htmlContent: data.writerData,
    title: data.title
  }
  try {
    let dataResponse = yield apiInstant.post('blog/submit-blog', dataSubmit, { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
      .then(response => response)
    yield put({ type: SUBMIT_BLOG_SUCCESS, payload: dataResponse });
  } catch (error) {
    console.log('error', error)
    yield put({ type: SUBMIT_BLOG_FAILED, payload: { } });
  }
}

function* submitBlogWatcher() {
  yield takeLatest(SUBMIT_BLOG, submitBlog)
}

function* blogEdittorActionWatcher() {
  yield all([
    submitBlogWatcher()
  ]);
}

export default blogEdittorActionWatcher
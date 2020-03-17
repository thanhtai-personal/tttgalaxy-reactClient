// import { put, takeLatest, all } from 'redux-saga/effects';
// import store from '../../store'
// import _ from 'lodash'

// import {
//   SUBMIT_BLOG,
//   SUBMIT_BLOG_SUCCESS,
//   SUBMIT_BLOG_FAILED,
//   GET_BLOG,
//   GET_BLOG_SUCCESS,
//   GET_BLOG_FAILED,
//   GET_BLOGS,
//   GET_BLOGS_SUCCESS,
//   GET_BLOGS_FAILED
// } from '../../constants/action-types'

// import apiInstant from '../../api'

// //======================================================================
// function* submitBlog() {
//   let data = store.getState().blogCreator
//   const dataSubmit = {
//     htmlContent: data.writerData,
//     title: data.title
//   }
//   try {
//     let dataResponse = yield apiInstant.post('blog/submit-blog', dataSubmit, { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
//       .then(response => response)
//     yield put({ type: SUBMIT_BLOG_SUCCESS, payload: dataResponse });
//   } catch (error) {
//     console.log('error', error)
//     yield put({ type: SUBMIT_BLOG_FAILED, payload: { } });
//   }
// }

// function* submitBlogWatcher() {
//   yield takeLatest(SUBMIT_BLOG, submitBlog)
// }


// //======================================================================
// function* getBlog() {
//   let data = store.getState().blogCreator
//   const dataSubmit = { blogId: data.id }
//   try {
//     let dataResponse = yield apiInstant.post('blog/get-blog', dataSubmit, { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
//       .then(response => response)
//     console.log('dataResponse', dataResponse)
//     yield put({ type: GET_BLOG_SUCCESS, payload: dataResponse });
//   } catch (error) {
//     console.log('error', error)
//     yield put({ type: GET_BLOG_FAILED, payload: { } });
//   }
// }

// function* getBlogWatcher() {
//   yield takeLatest(GET_BLOG, getBlog)
// }


// //======================================================================
// function* getBlogs() {
//   let data = store.getState().blogCreator
//   let dataSubmit = {
//     userId: data.authorId
//   }
//   try {
//     let dataResponse = yield apiInstant.post('blog/get-blogs', dataSubmit, { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
//       .then(response => response)
//     console.log('dataResponse', dataResponse)
//     yield put({ type: GET_BLOGS_SUCCESS, payload: dataResponse });
//   } catch (error) {
//     console.log('error', error)
//     yield put({ type: GET_BLOGS_FAILED, payload: { } });
//   }
// }

// function* getBlogsWatcher() {
//   yield takeLatest(GET_BLOGS, getBlogs)
// }




// function* blogEdittorActionWatcher() {
//   yield all([
//     submitBlogWatcher(),
//     getBlogWatcher(),
//     getBlogsWatcher()
//   ]);
// }

// export default blogEdittorActionWatcher
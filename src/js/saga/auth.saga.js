import { put, takeLatest, all } from 'redux-saga/effects';
import store from './../store/index'
import {
  USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_USER_DATA
} from './../constants/action-types'

function* login() {
  let dataLogin = store.getState().login
  try {
    const dataResponse = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc', { email: dataLogin.email, password: dataLogin.password })
    .then(response => response.json() )
    yield put({ type: LOGIN_SUCCESS, payload: { loginLoading: false } });
    yield put({ type: UPDATE_USER_DATA, payload: { userData: dataResponse } });
  } catch(error) {
    yield put({ type: LOGIN_FAILED, payload: { error: error } });
  }      
}
function* loginActionWatcher() {
     yield takeLatest(USER_LOGIN, login)
}

function* reLogin() {
  const dataLogin = store.getState().login
  if (!dataLogin.loginLoading) return
  try {
    const dataResponse = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc', { email: dataLogin.email, password: dataLogin.password })
    .then(response => response.json() )
    yield put({ type: LOGIN_SUCCESS, payload: { loginLoading: false } });
    yield put({ type: UPDATE_USER_DATA, payload: { userData: dataResponse } });
  } catch(error) {
    yield put({ type: LOGIN_FAILED, payload: { error: error, loginLoading: false } });
  }      
}
function* reLoginActionWatcher() {
     yield takeLatest(LOGIN_FAILED, reLogin)
}


function* authActionWatcher() {
  yield all([
    loginActionWatcher(),
    reLoginActionWatcher(),
  ]);
}

export default authActionWatcher
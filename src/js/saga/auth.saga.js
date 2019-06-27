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
    yield put({ type: LOGIN_FAILED, payload: { error: error, loginLoading: false } });
  }      
}
function* loginActionWatcher() {
     yield takeLatest(USER_LOGIN, login)
}

function* login2Test() {
  let dataLogin = store.getState().login
  try {
    const dataResponse = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc', { email: dataLogin.email, password: dataLogin.password })
    .then(response => response.json() )
    yield put({ type: LOGIN_SUCCESS, payload: { loginLoading: false } });
    yield put({ type: UPDATE_USER_DATA, payload: { userData: dataResponse } });
  } catch(error) {
    yield put({ type: LOGIN_FAILED, payload: { error: error, loginLoading: false } });
  }      
}
function* login2ActionWatcher() {
     yield takeLatest(USER_LOGIN, login2Test)
}

function* authActionWatcher() {
  yield all([
    loginActionWatcher(),
    login2ActionWatcher(),
  ]);
}
export default authActionWatcher
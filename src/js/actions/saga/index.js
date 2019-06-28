import { all } from 'redux-saga/effects'
import authActionWatcher from './auth.saga'

export default function* rootSaga() {
  yield all([
    authActionWatcher(),
  ]);
}
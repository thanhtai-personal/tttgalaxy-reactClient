import { all } from 'redux-saga/effects'
import authActionWatcher from './auth.saga'
import portfolioActionWatcher from './portfolio.saga'
import blogEdittorActionWatcher from './blogEdittor.saga'

export default function* rootSaga() {
  yield all([
    authActionWatcher(),
    portfolioActionWatcher(),
    blogEdittorActionWatcher()
  ]);
}
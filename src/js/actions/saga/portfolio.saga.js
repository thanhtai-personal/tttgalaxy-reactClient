import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../../store'
import _ from 'lodash'

import {
  SUBMIT_PORTFOLIO_FAILED,
  SUBMIT_PORTFOLIO_SUCCESS,
  SUBMIT_PORTFOLIO_DATA
} from '../../constants/action-types'

import apiInstant from './../../api'


function* submitPortfolioData() {
  let dataSubmit = store.getState().portfolio
  try {
    const dataResponse = yield apiInstant.post('portfolio/update', dataSubmit)
    .then(response => response )
    yield put({ type: SUBMIT_PORTFOLIO_SUCCESS, payload: { loading: false, dataResponse: dataResponse } });
  } catch(error) {
    yield put({ type: SUBMIT_PORTFOLIO_FAILED, payload: { error: error } });
  }      
}

function* submitDataPortfolioWatcher() {
     yield takeLatest(SUBMIT_PORTFOLIO_DATA, submitPortfolioData)
}



function* authActionWatcher() {
  yield all([
    submitDataPortfolioWatcher(),
  ]);
}

export default authActionWatcher
import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../../store'
import _ from 'lodash'

import {
  SUBMIT_PORTFOLIO_FAILED,
  SUBMIT_PORTFOLIO_SUCCESS,
  SUBMIT_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA
} from '../../constants/action-types'

import apiInstant from './../../api'

import { convertPortfolioData } from './../../helper'


function* submitPortfolioData() {
  let dataSubmit = convertPortfolioData(store.getState().portfolio, 'static')
  try {
    const dataResponse = yield apiInstant.post('users/update-portfolio', dataSubmit)
    .then(response => response )
    yield put({ type: SUBMIT_PORTFOLIO_SUCCESS, payload: { loading: false, dataResponse: dataResponse } });
  } catch(error) {
    yield put({ type: SUBMIT_PORTFOLIO_FAILED, payload: { error: error } });
  }      
}

function* submitDataPortfolioWatcher() {
  yield takeLatest(SUBMIT_PORTFOLIO_DATA, submitPortfolioData)
}

function* getDataPortfolioWatcher() {
     yield takeLatest(GET_PORTFOLIO_DATA, getPortfolioData)
}

function* getPortfolioData() {
  try {
    const dataResponse = yield apiInstant.get('users/portfolio-data', { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') }})
    .then(response => {
      // re-map data response
      let portfolioData = convertPortfolioData(store.getState().portfolio, 'dynamic')
      // yield put({ type: GET_PORTFOLIO_SUCCESS, payload: response });
    } )
    .catch(error => {
      // yield put({ type: GET_PORTFOLIO_FAILED, payload: { error: error } });
    })
  } catch(error) {
    // yield put({ type: GET_PORTFOLIO_FAILED, payload: { error: error } });
  }      
}




function* portfolioActionWatcher() {
  yield all([
    submitDataPortfolioWatcher(),
    getDataPortfolioWatcher()
  ]);
}

export default portfolioActionWatcher
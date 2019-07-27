import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../../store'
// import _ from 'lodash'

import {
  SUBMIT_PORTFOLIO_FAILED,
  SUBMIT_PORTFOLIO_SUCCESS,
  SUBMIT_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA,
  UPDATE_PORTFOLIO_DATA
} from '../../constants/action-types'

import apiInstant from './../../api'

import { convertPortfolioData } from './../../helper'


function* submitPortfolioData() {
  let dataSubmit = store.getState().portfolio
  dataSubmit.currentUser = store.getState().auth.userData
  dataSubmit = convertPortfolioData(dataSubmit, 'static')
  try {
    const dataResponse = yield apiInstant.post('portfolio/update-portfolio', dataSubmit, { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
      .then(response => response)
    yield put({ type: SUBMIT_PORTFOLIO_SUCCESS, payload: { loading: false, dataResponse: dataResponse } });
  } catch (error) {
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
    const dataResponse = yield apiInstant.get('portfolio/portfolio-data', { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
      .then(response => response)
      let portfolioData = convertPortfolioData(dataResponse.data, 'dynamic');
      yield put({ type: UPDATE_PORTFOLIO_DATA, payload: portfolioData });
  } catch (error) {
    console.log('error', error)
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
import { put, takeLatest, all } from 'redux-saga/effects';
import store from '../../store'
import _ from 'lodash'

import {
  SUBMIT_PORTFOLIO_FAILED,
  SUBMIT_PORTFOLIO_SUCCESS,
  SUBMIT_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA,
  UPDATE_PORTFOLIO_DATA,
  UPDATE_PUBLIC_PROFILE,
  GET_PORTFOLIO_DATA_FAILED
} from '../../constants/action-types'

import apiInstant from './../../api'

import { convertPortfolioData } from './../../helper'

//======================================================================
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

//========================================================================
function* getDataPortfolioWatcher() {
  yield takeLatest(GET_PORTFOLIO_DATA, getPortfolioData)
}

function* getPortfolioData() {
  try {
    if (_.isNil(store.getState().portfolio.publicKey)) {
      const dataResponse = yield apiInstant.get('portfolio/portfolio-data', { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
        .then(response => response)
      if (dataResponse.data.message) {
        window.alert(dataResponse.data.message)
        yield put({ type: UPDATE_PORTFOLIO_DATA, payload: { isLoading: false } });
      } else {
        let portfolioData = convertPortfolioData(dataResponse.data, 'dynamic');
        yield put({ type: UPDATE_PORTFOLIO_DATA, payload: { ...portfolioData, isLoading: false } });
      }
    } else {
      const dataResponse = yield apiInstant.post('portfolio/get-public-portfolio-data', { publicKey: store.getState().portfolio.publicKey })
        .then(response => response)
      if (dataResponse.data.message) {
        window.alert(dataResponse.data.message)
        yield put({ type: UPDATE_PORTFOLIO_DATA, payload: { isLoading: false } });
      } else {
        let portfolioData = convertPortfolioData(dataResponse.data, 'dynamic');
        yield put({ type: UPDATE_PORTFOLIO_DATA, payload: { ...portfolioData, isLoading: false } });
      }
    }
  } catch (error) {
    window.alert("get data from api failed!")
    yield put({ type: GET_PORTFOLIO_DATA_FAILED, payload: { isLoading: false } });
  }
}

//=========================================================================
function* updatePublicProfileActionWatcher() {
  yield takeLatest(UPDATE_PUBLIC_PROFILE, updatePublicProfile)
}

function* updatePublicProfile() {
  try {
    let dataResponse = yield apiInstant.post('portfolio/public-profile', { isPublicProfile: store.getState().portfolio.publicProfile }, { headers: { 'x-access-token': window.localStorage.getItem('jwtToken') } })
      .then(response => response)
    yield put({ type: UPDATE_PORTFOLIO_DATA, payload: { publicKey: dataResponse.data } });
  } catch (error) {
    console.log('error', error)
    // yield put({ type: GET_PORTFOLIO_FAILED, payload: { error: error } });
  }
}


function* portfolioActionWatcher() {
  yield all([
    submitDataPortfolioWatcher(),
    getDataPortfolioWatcher(),
    updatePublicProfileActionWatcher()
  ]);
}

export default portfolioActionWatcher
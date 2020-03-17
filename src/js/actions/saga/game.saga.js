// import { put, takeLatest, all } from 'redux-saga/effects';
// import store from '../../store'
// import _ from 'lodash'

// import {
//   GET_GAME_DATA,
//   GET_GAME_DATA_SUCCESS,
//   GET_GAME_DATA_FAILED
// } from '../../constants/action-types'

// // import apiInstant from './../../api'


// function* getGameData() {
//   let data = store.getState().listGame.gameDetail || {}
//   console.log('state', store.getState())
//   try {
//     // const dataResponse = yield apiInstant.post('game/get-data', { gameId: data.id })
//     // .then(response => response )
//     const testData = store.getState().listGame.games.find((g) => g.id === data.id)
//     yield put({ type: GET_GAME_DATA_SUCCESS, payload: { data: testData || {} } });
//   } catch(error) {
//     yield put({ type: GET_GAME_DATA_FAILED, payload: { error: error } });
//   }      
// }

// function* getGameDataActionWatcher() {
//   yield takeLatest(GET_GAME_DATA, getGameData)
// }




// function* gameActionWatcher() {
//   yield all([
//     getGameDataActionWatcher()
//   ]);
// }

// export default gameActionWatcher
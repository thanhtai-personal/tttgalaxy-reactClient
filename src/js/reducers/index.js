/**
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */
import { combineReducers } from 'redux'

import homeReducer from './home.reducer'
import listItem from './item.list.reducer'
import listGame from './games.reducer'
import login from './login.reducer'
import signUp from './signup.reducer'


export default combineReducers({
  home: homeReducer,
  listItem: listItem,
  listGame: listGame,
  login: login,
  signup: signUp
})
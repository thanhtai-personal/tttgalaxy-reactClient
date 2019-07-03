/**
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */
import { combineReducers } from 'redux'

import homeReducer from './home.reducer'
import listItem from './item.list.reducer'
import listGame from './games.reducer'
import login from './login.reducer'
import signup from './signup.reducer'
import auth from './auth.reducer'
import portfolio from './portfolio.reducer'


export default combineReducers({
  home: homeReducer,
  listItem: listItem,
  listGame: listGame,
  login: login,
  signup: signup,
  auth: auth,
  portfolio: portfolio
})
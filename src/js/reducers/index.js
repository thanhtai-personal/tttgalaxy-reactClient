/**
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */
import { combineReducers } from 'redux'

import home from './home.reducer'
import listItem from './item.list.reducer'
import listGame from './games.reducer'
import login from './login.reducer'
import signup from './signup.reducer'
import auth from './auth.reducer'
import portfolio from './portfolio.reducer'
import common from './common.reducer'
import novals from './novals.reducer'
import blogCreator from './blogCreator.reducer'


export default combineReducers({
  home,
  listItem,
  listGame,
  login,
  signup,
  auth,
  portfolio,
  common,
  novals,
  blogCreator
})
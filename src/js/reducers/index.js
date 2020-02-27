/**
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */
import { combineReducers } from 'redux'

import login from './login.reducer'
import signup from './signup.reducer'
import auth from './auth.reducer'
import shop from './shop.reducer'


export default combineReducers({
  login,
  signup,
  auth,
  shop
})
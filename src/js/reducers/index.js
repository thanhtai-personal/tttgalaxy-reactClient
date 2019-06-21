/**
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */
import { combineReducers } from 'redux'

import homeReducer from './home.reducer'

export default combineReducers({
  home: homeReducer
})
/*
 src/reducers/index.js
*/
import { combineReducers } from 'redux'
import loginReducer from './login.reducer'
import newsReducer from './news.reducer'

export default combineReducers({
  loginReducer,
  newsReducer,
})
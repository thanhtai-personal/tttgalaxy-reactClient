// src/js/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
// import { logger } from "../middleware";
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk'
import apiSaga from "../sagas/api-saga";


const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(logger, thunk, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(apiSaga);


export default store;
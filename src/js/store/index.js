// src/js/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import sagaService from './../actions/saga'

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function logger({ getState }) {
  return next => action => {
    if (window.location.href.includes('localhost')) {
      console.log('will dispatch', action)
    }

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)
    if (window.location.href.includes('localhost')) {
      console.log('state after dispatch', getState())
    }

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}


const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(logger, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(sagaService);


export default store;
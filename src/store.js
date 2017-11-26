// @flow

import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';

import itemReducer from './items/itemReducer';

export default createStore(
  combineReducers({
    items: itemReducer,
  }),
  applyMiddleware(ReduxLogger),
);

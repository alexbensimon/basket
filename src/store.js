// @flow

import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';

import itemReducer from './items/itemReducer';
import basketReducer from './basket/basketReducer';

export default createStore(
  combineReducers({
    items: itemReducer,
    basket: basketReducer,
  }),
  applyMiddleware(ReduxLogger),
);

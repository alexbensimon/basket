// @flow
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import store from './store';

import ItemList from './items/ItemList';
import Basket from './basket/Basket';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to Basket{' '}
            <span role="img" aria-label="shopping-cart-emoji">
              🛒
            </span>
          </h1>
        </header>
        <ItemList />
        <Basket />
      </div>
    </Provider>
  );
}

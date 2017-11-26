// @flow
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import logo from './logo.svg';
import './App.css';

import ItemList from './ItemList';

export default function App() {
  return (
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
    </div>
  );
}

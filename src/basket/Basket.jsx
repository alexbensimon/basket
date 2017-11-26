// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { BasketItemType } from '../types';

import BasketItem from './BasketItem';

type Props = {
  items: Array<{
    ...BasketItemType,
    totalPrice: number,
  }>,
};

function Basket(props: Props) {
  const basketItemList = props.items
    ? props.items.map(item => (
        // $FlowFixMe
      <BasketItem
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        totalPrice={item.totalPrice}
        key={item.id}
      />
      ))
    : null;
  const total = props.items.reduce((acc, cur) => acc + cur.totalPrice, 0.0);
  return (
    <div>
      <h1>Basket</h1>
      {basketItemList}
      <h2>Total: {total.toFixed(2)}</h2>
    </div>
  );
}

export default connect(state => ({
  items: Object.values(state.basket).map(item => ({
    ...item,
    // $FlowFixMe
    totalPrice:
      item.name !== 'Papaye'
        ? item.quantity * item.price
        : (Math.trunc(item.quantity / 3) * 2 + item.quantity % 3) * item.price,
  })),
}))(Basket);

// @flow

import React from 'react';

import Item from './Item';

const data = [
  {
    id: 0,
    name: 'Pomme',
    price: 0.25,
  },
  {
    id: 1,
    name: 'Orange',
    price: 0.3,
  },
  {
    id: 2,
    name: 'Banane',
    price: 0.15,
  },
  {
    id: 3,
    name: 'Papaye',
    price: 0.5,
  },
];

export default function ItemList() {
  return data.map(item => <Item name={item.name} price={item.price} key={item.id} />);
}

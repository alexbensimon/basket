// @flow

import type { Item } from '../types';

const initialState = [
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

export default function shoppingReducer(
  state: Item[] = initialState,
  action: { type: string, payload: any },
) {
  switch (action.type) {
    default:
      return state;
  }
}

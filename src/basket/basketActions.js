// @flow

import type { ItemType } from '../types';

export const ADD_ITEM = 'ADD_ITEM';

export function addItem(item: ItemType) {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

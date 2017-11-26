// @flow
/* eslint-disable no-undef */

export type ItemType = {
  id: number,
  name: string,
  price: number,
};

export type BasketItemType = {
  ...ItemType,
  quantity: number,
};

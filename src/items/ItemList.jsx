// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { ItemType } from '../types';
import { addItem } from '../basket/basketActions';

import Item from './Item';

type Props = {
  items: ItemType[],
  addItem: Function,
};

function ItemList(props: Props) {
  return props.items.map(item => (
    <Item name={item.name} price={item.price} key={item.id} addItem={() => props.addItem(item)} />
  ));
}

export default connect(
  state => ({
    items: state.items,
  }),
  { addItem },
)(ItemList);

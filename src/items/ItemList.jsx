// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Item } from '../types';

import ItemComp from './ItemComp';

type Props = {
  items: Item[],
};

function ItemList(props: Props) {
  return props.items.map(item => <ItemComp name={item.name} price={item.price} key={item.id} />);
}

export default connect(state => ({
  items: state.items,
}))(ItemList);

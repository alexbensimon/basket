// @flow

import React from 'react';

import './item.css';

type Props = {
  name: string,
  price: number,
  addItem: Function,
};

export default function Item(props: Props) {
  return (
    <div className="item-comp">
      <button onClick={props.addItem} className="item-comp-add-button">
        +
      </button>
      <h3>
        {props.name}: {props.price}
      </h3>
    </div>
  );
}

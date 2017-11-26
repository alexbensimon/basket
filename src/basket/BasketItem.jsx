// @flow

import React from 'react';

type Props = {
  name: string,
  quantity: number,
  price: number,
  totalPrice: number,
};

export default function BasketItem(props: Props) {
  return (
    <div>
      <h3>
        {props.quantity} {props.name} ({props.price}): {props.totalPrice.toFixed(2)}
      </h3>
    </div>
  );
}

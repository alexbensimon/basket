// @flow

import React from 'react';

type Props = {
  name: string,
  price: number,
};

export default function Item(props: Props) {
  return (
    <div>
      <h1>
        {props.name}: {props.price}
      </h1>
    </div>
  );
}

// @flow

import { ADD_ITEM } from './basketActions';

export default function Basket(state: Object = {}, action: { type: string, payload: any }) {
  switch (action.type) {
    case ADD_ITEM: {
      const { id } = action.payload;
      if (state[id]) {
        return {
          ...state,
          [id]: { ...action.payload, quantity: state[id].quantity + 1 },
        };
      }
      return { ...state, [id]: { ...action.payload, quantity: 1 } };
    }

    default:
      return state;
  }
}

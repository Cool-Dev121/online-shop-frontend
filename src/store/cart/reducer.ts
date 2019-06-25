import { CLEAR_CART } from './actions/types';
import {
  SET_CART_ITEM_COUNT,
  ActionTypes,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from './actions';

import { State } from './models';

const initialState: State = {
  items: {},
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const { id } = action.payload.item;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...action.payload.item,
            count: 1,
          },
        },
      };
    }
    case SET_CART_ITEM_COUNT: {
      const { id } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...state.items[id],
            count: action.payload.count,
          },
        },
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      const { id } = action.payload.item;
      const { [id]: value, ...itemsWithoutRemoved } = state.items;
      return {
        ...state,
        items: { ...itemsWithoutRemoved },
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: {},
      };
    }
    default:
      return state;
  }
}

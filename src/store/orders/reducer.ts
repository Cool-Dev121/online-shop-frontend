import {
  ActionTypes,
  REQUEST_TABLE_ORDERS_SUCCESS,
  REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS,
} from './actions';

import { State } from './models';

const initialState: State = {
  customer: {
    items: [],
    totalItemsCount: 0,
  },
  items: [],
  totalItemsCount: 0,
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case REQUEST_TABLE_ORDERS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        totalItemsCount: action.payload.totalItemsCount,
      };
    case REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS: {
      const { items, totalItemsCount } = action.payload;
      return {
        ...state,
        customer: {
          items,
          totalItemsCount,
        },
      };
    }
    default:
      return state;
  }
}

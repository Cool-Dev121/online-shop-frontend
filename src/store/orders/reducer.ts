import {
  ActionTypes,
  REQUEST_TABLE_ADMIN_ORDERS_SUCCESS,
  REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS,
} from './actions';

import { State } from './models';

const initialState: State = {
  customer: {
    items: [],
    totalItemsCount: 0,
  },
  admin: {
    items: [],
    totalItemsCount: 0,
  },
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case REQUEST_TABLE_ADMIN_ORDERS_SUCCESS: {
      const { items, totalItemsCount } = action.payload;
      return {
        ...state,
        admin: {
          items,
          totalItemsCount,
        },
      };
    }
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

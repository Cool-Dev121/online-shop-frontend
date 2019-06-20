import {
  OrdersActionTypes,
  REQUEST_TABLE_ORDERS_PENDING,
  REQUEST_TABLE_ORDERS_SUCCESS,
  REQUEST_TABLE_ORDERS_ERROR,
} from './actions';

import { OrdersState } from './models';

const initialState: OrdersState = {
  items: [],
  totalPagesCount: 0,
};

export function ordersReducer(state = initialState, action: OrdersActionTypes): OrdersState {
  switch (action.type) {
    case REQUEST_TABLE_ORDERS_PENDING:
      return {
        ...state,
      };
    case REQUEST_TABLE_ORDERS_SUCCESS:
      return {
        ...state,
        items: [...action.payload.items],
        totalPagesCount: action.payload.totalPagesCount,
      };
    case REQUEST_TABLE_ORDERS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}

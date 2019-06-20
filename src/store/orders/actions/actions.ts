import { TableOrdersStoreModel } from '../models';
import {
  REQUEST_TABLE_ORDERS_PENDING,
  REQUEST_TABLE_ORDERS_SUCCESS,
  REQUEST_TABLE_ORDERS_ERROR,
  OrdersActionTypes,
} from './types';

export function requestTableOrdersPending(start: number, count: number): OrdersActionTypes {
  return {
    type: REQUEST_TABLE_ORDERS_PENDING,
    payload: {
      start,
      count,
    },
  };
}

export function requestTableOrdersSuccess(
  items: TableOrdersStoreModel[],
  totalPagesCount: number,
): OrdersActionTypes {
  return {
    type: REQUEST_TABLE_ORDERS_SUCCESS,
    payload: {
      items,
      totalPagesCount,
    },
  };
}

// TODO: Replace with unified app-level error action
export function requestTableOrdersError(error: string): OrdersActionTypes {
  return {
    type: REQUEST_TABLE_ORDERS_ERROR,
    payload: {
      error,
    },
  };
}

import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { State } from '../models';
import { REQUEST_TABLE_ORDERS_SUCCESS, REQUEST_TABLE_ORDERS_ERROR, ActionTypes } from './types';
import {
  ThunkExtraArgument,
  AdminOrdersTableOrderModel,
  AdminOrdersTableOrderItemModel,
} from '../../../shared';
import { AdminOrdersOrderItemResponseModel, AdminOrdersOrderResponseModel } from '../../../api';

export function requestTableOrdersSuccess(
  items: AdminOrdersTableOrderModel[],
  totalPagesCount: number,
): ActionTypes {
  return {
    type: REQUEST_TABLE_ORDERS_SUCCESS,
    payload: {
      items,
      totalPagesCount,
    },
  };
}

// TODO: Replace with unified app-level error action
export function requestTableOrdersError(error: string): ActionTypes {
  return {
    type: REQUEST_TABLE_ORDERS_ERROR,
    payload: {
      error,
    },
  };
}

function getOrderSum(orderItems: AdminOrdersOrderItemResponseModel[]) {
  return orderItems.map(i => i.product.price * i.count).reduce((acc, curr) => acc + curr, 0);
}

function getOrderItemSum(orderItem: AdminOrdersOrderItemResponseModel) {
  return orderItem.count * orderItem.product.price;
}

export const requestTableOrdersActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes>, State, ThunkExtraArgument, ActionTypes>
> = (start: number, count: number) => async (dispatch: Dispatch, _, { api }) => {
  // return dispatch(apiCallStarted)
  try {
    const result = await api.orders.getOrders(start, count);

    const mappedResult: AdminOrdersTableOrderModel[] = result.items.map(
      (order: AdminOrdersOrderResponseModel) => ({
        id: order.id,
        userId: order.userId,
        createdAt: order.createdAt,
        items: order.items.map((orderItem: AdminOrdersOrderItemResponseModel) => ({
          product: orderItem.product,
          count: orderItem.count,
          orderItemSum: getOrderItemSum(orderItem),
        } as AdminOrdersTableOrderItemModel)),
        status: order.status,
        orderSum: getOrderSum(order.items),
      } as AdminOrdersTableOrderModel),
    );

    return dispatch(requestTableOrdersSuccess(mappedResult, result.totalItems));
  } catch {
    // use this return dispatch(apiCallFailed) instead
    return dispatch(requestTableOrdersError('Something went wrong'));
  } finally {
    // return dispatch(apiCallEnded)
  }
};

import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { State } from '../models';
import { REQUEST_TABLE_ORDERS_SUCCESS, ActionTypes } from './types';
import {
  ThunkExtraArgument,
  AdminOrdersTableOrderModel,
  AdminOrdersTableOrderItemModel,
} from '../../../shared';
import { AdminOrdersOrderItemResponseModel, AdminOrdersOrderResponseModel } from '../../../api';
import { getOrderItemSum, getOrderSum } from '../../../helpers';
import { startApiCall, apiCallFailed, apiCallEnded } from '../../app';

export function requestTableOrdersSuccess(
  items: AdminOrdersTableOrderModel[],
  totalItemsCount: number,
): ActionTypes {
  return {
    type: REQUEST_TABLE_ORDERS_SUCCESS,
    payload: {
      items,
      totalItemsCount,
    },
  };
}

export const requestTableOrdersActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes | void>, State, ThunkExtraArgument, ActionTypes>
> = (start: number, count: number) => async (
  dispatch: Dispatch,
  _,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.orders.getOrders(start, count);
    const mappedResult: AdminOrdersTableOrderModel[] = result.items.map(
      (order: AdminOrdersOrderResponseModel) => ({
        id: order.id,
        userId: order.userId,
        createdAt: order.createdAt,
        items: order.items.map(
          (orderItem: AdminOrdersOrderItemResponseModel) => ({
            product: orderItem.product,
            count: orderItem.count,
            orderItemSum: getOrderItemSum(orderItem),
          } as AdminOrdersTableOrderItemModel),
        ),
        status: order.status,
        orderSum: getOrderSum(order.items),
      } as AdminOrdersTableOrderModel),
    );
    return dispatch(requestTableOrdersSuccess(mappedResult, result.totalItems));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

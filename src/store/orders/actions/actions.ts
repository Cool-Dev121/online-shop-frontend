import { Dispatch } from 'redux';
import {
  REQUEST_TABLE_ADMIN_ORDERS_SUCCESS,
  ActionTypes,
  REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS,
} from './types';
import {
  AdminOrdersTableOrderModel,
  AdminOrdersTableOrderItemModel,
  CustomerOrdersTableOrderModel,
  OrderStatus,
} from '../../../shared';
import {
  AdminOrdersOrderItemResponseModel,
  AdminOrdersOrderResponseModel,
  CustomerOrdersOrderResponseModel,
} from '../../../api';
import { getOrderItemSum, getOrderSum } from '../../../helpers';
import { startApiCall, apiCallFailed, apiCallEnded } from '../../app';
import { ActionCreator } from '../models';

function requestTableAdminOrdersSuccess(
  items: AdminOrdersTableOrderModel[],
  totalItemsCount: number,
): ActionTypes {
  return {
    type: REQUEST_TABLE_ADMIN_ORDERS_SUCCESS,
    payload: {
      items,
      totalItemsCount,
    },
  };
}

function requestTableCustomerOrdersSuccess(
  items: CustomerOrdersTableOrderModel[],
  totalItemsCount: number,
): ActionTypes {
  return {
    type: REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS,
    payload: {
      items,
      totalItemsCount,
    },
  };
}

export const requestTableAdminOrdersActionCreator: ActionCreator = (
  start: number,
  count: number,
) => async (dispatch: Dispatch, _, { api }): Promise<ActionTypes | void> => {
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
    return dispatch(requestTableAdminOrdersSuccess(mappedResult, result.totalItemsCount));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

export const requestTableCustomerOrdersActionCreator: ActionCreator = (
  start: number,
  count: number,
) => async (dispatch: Dispatch, _, { api }): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.orders.getOrdersOfUser(start, count);
    const mappedResult: CustomerOrdersTableOrderModel[] = result.items.map(
      (order: CustomerOrdersOrderResponseModel) => ({
        id: order.id,
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
    return dispatch(requestTableCustomerOrdersSuccess(mappedResult, result.totalItemsCount));
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

export const requestOrderStatusChangeActionCreator: ActionCreator = (
  id: string,
  status: OrderStatus,
) => async (dispatch: Dispatch, _, { api }): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const result = await api.orders.changeOrderStatus(id, status);
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

import { Dispatch } from 'redux';
import { AppState } from '../../store';
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
  CustomerOrdersTableOrderItemModel,
  CartItemModel,
} from '../../../shared';
import {
  AdminOrdersOrderItemResponseModel,
  AdminOrdersOrderResponseModel,
  CustomerOrdersOrderResponseModel,
  ChangeOrderStatusRequestModel,
  CustomerOrdersOrderItemResponseModel,
  CreateOrderRequestModel,
} from '../../../api';
import {
  getOrderItemSum,
  getOrderSum,
  getFullImageUrl,
  mapOrderStatusIdToTitle,
} from '../../../helpers';
import { startApiCall, apiCallFailed, apiCallEnded } from '../../app';
import { ActionCreator } from '../models';
import { cartItemsSelector, clearCart } from '../../cart';
import { getKeys } from '../../../components';

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
            product: {
              ...orderItem.product,
              img: getFullImageUrl(orderItem.product.img),
            },
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
          (orderItem: CustomerOrdersOrderItemResponseModel) => ({
            product: {
              ...orderItem.product,
              img: getFullImageUrl(orderItem.product.img),
            },
            count: orderItem.count,
            orderItemSum: getOrderItemSum(orderItem),
          } as CustomerOrdersTableOrderItemModel),
        ),
        status: mapOrderStatusIdToTitle(parseInt(order.status.toString())),
        orderSum: getOrderSum(order.items),
      } as CustomerOrdersTableOrderModel),
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
    const requestModel: ChangeOrderStatusRequestModel = {
      status,
    };
    await api.orders.changeOrderStatus(id, requestModel);
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

export const requestCreateOrderActionCreator: ActionCreator = () => async (
  dispatch: Dispatch,
  getState: () => AppState,
  { api },
): Promise<ActionTypes | void> => {
  dispatch(startApiCall());
  try {
    const cartItems: { [id: string]: CartItemModel } = cartItemsSelector(getState());
    const createOrderRequestModel: CreateOrderRequestModel = {
      items: getKeys(cartItems).map((cartItemId) => {
        const cartItem = cartItems[cartItemId];
        return {
          productId: cartItem.id,
          count: cartItem.count,
        };
      }),
    };
    await api.orders.createOrder(createOrderRequestModel);
    dispatch(clearCart());
  } catch (e) {
    dispatch(apiCallFailed(e));
    return; // eslint-disable-line
  } finally {
    dispatch(apiCallEnded());
  }
};

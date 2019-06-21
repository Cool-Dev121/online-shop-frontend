import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Dispatch } from 'redux';
import { TableOrdersStoreModel, State } from '../models';
import { REQUEST_TABLE_ORDERS_SUCCESS, REQUEST_TABLE_ORDERS_ERROR, ActionTypes } from './types';
import { ThunkExtraArgument } from '../../../shared';
import { TableOrderModel, TableOrderItemModel } from '../../../api/models';

// export function requestTableOrders(start: number, count: number): ActionTypes {
//   return {
//     type: REQUEST_TABLE_ORDERS_PENDING,
//     payload: {
//       start,
//       count,
//     },
//   };
// }

export function requestTableOrdersSuccess(
  items: TableOrdersStoreModel[],
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

function getOrderSum(orderItems: TableOrderItemModel[]) {
  return orderItems.map(i => i.product.price * i.count).reduce((acc, curr) => acc + curr, 0);
}

export const requestTableOrdersActionCreator: ActionCreator<
ThunkAction<Promise<ActionTypes>, State, ThunkExtraArgument, ActionTypes>
> = (start: number, count: number) => async (dispatch: Dispatch, _, { api }) => {
  // return dispatch(apiCallStarted)
  try {
    const result = await api.orders.getOrders(start, count);

    const mappedResult: TableOrdersStoreModel[] = result.items.map(
      (order: TableOrderModel) => ({
        id: order.id,
        userId: order.userId,
        createdAt: order.createdAt,
        items: order.items,
        status: order.status,
        sum: getOrderSum(order.items),
      } as TableOrdersStoreModel),
    );

    return dispatch(requestTableOrdersSuccess(mappedResult, result.totalItems));
  } catch {
    // use this return dispatch(apiCallFailed) instead
    return dispatch(requestTableOrdersError('Something went wrong'));
  } finally {
    // return dispatch(apiCallEnded)
  }
};

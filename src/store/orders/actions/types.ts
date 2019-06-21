import { AdminOrdersTableOrderModel } from '../../../shared';

export const REQUEST_TABLE_ORDERS_SUCCESS = '[ORDERS] REQUEST_TABLE_ORDERS_SUCCESS';

interface RequestTableOrdersSuccessAction {
  type: typeof REQUEST_TABLE_ORDERS_SUCCESS;
  payload: {
    items: AdminOrdersTableOrderModel[];
    totalItemsCount: number;
  };
}

export type ActionTypes = RequestTableOrdersSuccessAction;

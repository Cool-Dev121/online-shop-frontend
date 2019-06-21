import { AdminOrdersTableOrderModel } from '../../../shared';

export const REQUEST_TABLE_ORDERS_SUCCESS = '[ORDERS] REQUEST_TABLE_ORDERS_SUCCESS';
export const REQUEST_TABLE_ORDERS_ERROR = '[ORDERS] REQUEST_TABLE_ORDERS_ERROR';

interface RequestTableOrdersSuccessAction {
  type: typeof REQUEST_TABLE_ORDERS_SUCCESS;
  payload: {
    items: AdminOrdersTableOrderModel[];
    totalPagesCount: number;
  };
}

interface RequestTableOrdersErrorAction {
  type: typeof REQUEST_TABLE_ORDERS_ERROR;
  payload: {
    error: string;
  };
}

export type ActionTypes = RequestTableOrdersSuccessAction | RequestTableOrdersErrorAction;

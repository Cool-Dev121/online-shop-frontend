import { AdminOrdersTableOrderModel, CustomerOrdersTableOrderModel } from '../../../shared';

// TODO: Clarify adding admin
export const REQUEST_TABLE_ORDERS_SUCCESS = '[ORDERS] REQUEST_TABLE_ORDERS_SUCCESS';
export const REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS = '[ORDERS] REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS';

interface RequestTableOrdersSuccessAction {
  type: typeof REQUEST_TABLE_ORDERS_SUCCESS;
  payload: {
    items: AdminOrdersTableOrderModel[];
    totalItemsCount: number;
  };
}

interface RequestTableCustomerOrdersSuccessAction {
  type: typeof REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS;
  payload: {
    items: CustomerOrdersTableOrderModel[];
    totalItemsCount: number;
  };
}

export type ActionTypes = RequestTableOrdersSuccessAction | RequestTableCustomerOrdersSuccessAction;

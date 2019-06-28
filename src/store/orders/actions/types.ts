import {
  AdminOrdersTableOrderModel,
  CustomerOrdersTableOrderModel,
  OrderStatus,
} from '../../../shared';

export const REQUEST_TABLE_ADMIN_ORDERS_SUCCESS = '[ORDERS] REQUEST_TABLE_ADMIN_ORDERS_SUCCESS';
export const REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS = '[ORDERS] REQUEST_TABLE_CUSTOMER_ORDERS_SUCCESS';
export const REQUEST_ORDER_STATUS_CHANGE_SUCCESS = '[ORDERS] REQUEST_ORDER_STATUS_CHANGE_SUCCESS';

interface RequestTableAdminOrdersSuccessAction {
  type: typeof REQUEST_TABLE_ADMIN_ORDERS_SUCCESS;
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

interface RequestOrderStatusChangeSuccessAction {
  type: typeof REQUEST_ORDER_STATUS_CHANGE_SUCCESS;
  payload: {
    id: string;
    status: OrderStatus;
  };
}

export type ActionTypes = | RequestTableAdminOrdersSuccessAction
  | RequestTableCustomerOrdersSuccessAction
  | RequestOrderStatusChangeSuccessAction;

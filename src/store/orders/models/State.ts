import { AdminOrdersTableOrderModel, CustomerOrdersTableOrderModel } from '../../../shared';

export interface State {
  customer: {
    items: CustomerOrdersTableOrderModel[];
    totalItemsCount: number;
  };
  admin: {
    items: AdminOrdersTableOrderModel[];
    totalItemsCount: number;
  };
}

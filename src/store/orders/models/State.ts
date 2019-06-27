import { AdminOrdersTableOrderModel, CustomerOrdersTableOrderModel } from '../../../shared';

export interface State {
  customer: {
    items: CustomerOrdersTableOrderModel[];
    totalItemsCount: number;
  };
  items: AdminOrdersTableOrderModel[];
  totalItemsCount: number;
}

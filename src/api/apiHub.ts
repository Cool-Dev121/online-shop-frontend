import { ordersApiMock, OrdersApi } from './ordersApi';
import { PagedModel, TableOrderModel } from './models';

export interface ApiHub {
  orders: OrdersApi<PagedModel<TableOrderModel>, any, any>;
}

export const apiHub: ApiHub = {
  orders: ordersApiMock,
};

import { ordersApiMock, OrdersApiConcrete } from './ordersApi';

export interface ApiHub {
  orders: OrdersApiConcrete;
}

export const apiHub: ApiHub = {
  orders: ordersApiMock,
};

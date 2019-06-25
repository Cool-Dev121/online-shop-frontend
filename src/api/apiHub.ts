import { ordersApiMock, OrdersApiConcrete } from './ordersApi';
import { ProductsApiConcrete, productsApiMock } from './productsApi';
import { AppApiInterface } from './appApi/AppApiInterface';
import { appApiMock } from './appApi';

export interface ApiHub {
  app: AppApiInterface;
  orders: OrdersApiConcrete;
  products: ProductsApiConcrete;
}

export const apiHub: ApiHub = {
  app: appApiMock,
  orders: ordersApiMock,
  products: productsApiMock,
};

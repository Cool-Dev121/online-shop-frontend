import { ordersApiMock, OrdersApiConcrete } from './ordersApi';
import { ProductsApiConcrete, productsApiMock } from './productsApi';

export interface ApiHub {
  orders: OrdersApiConcrete;
  products: ProductsApiConcrete;
}

export const apiHub: ApiHub = {
  orders: ordersApiMock,
  products: productsApiMock,
};

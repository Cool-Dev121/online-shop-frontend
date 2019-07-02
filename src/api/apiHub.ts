import { OrdersApiConcrete, ordersApi } from './ordersApi';
import { ProductsApiConcrete, productsApi } from './productsApi';
import { AuthApiInterface, authApi } from './authApi';

export interface ApiHub {
  auth: AuthApiInterface;
  orders: OrdersApiConcrete;
  products: ProductsApiConcrete;
}

export const apiHub: ApiHub = {
  auth: authApi, // authApiMock,
  orders: ordersApi, // ordersApiMock,
  products: productsApi, // productsApiMock
};

import {
  AdminOrdersOrderResponseModel,
  PagedModel,
  CustomerOrdersOrderResponseModel,
} from '../models';
import { OrdersApiInterface } from './OrdersApiInterface';

export type OrdersApiConcrete = OrdersApiInterface<
  PagedModel<AdminOrdersOrderResponseModel>,
  PagedModel<CustomerOrdersOrderResponseModel>,
  any,
  any
>;

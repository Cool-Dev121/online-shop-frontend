import {
  AdminOrdersOrderResponseModel,
  PagedModel,
  CustomerOrdersOrderResponseModel,
} from '../models';
import { OrdersApiInterface } from './OrdersApiInterface';
import { OrderStatus } from '../../shared';

export type OrdersApiConcrete = OrdersApiInterface<
  PagedModel<AdminOrdersOrderResponseModel>,
  PagedModel<CustomerOrdersOrderResponseModel>,
  any,
  OrderStatus
>;

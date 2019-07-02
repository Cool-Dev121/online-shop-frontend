import {
  AdminOrdersOrderResponseModel,
  PagedModel,
  CustomerOrdersOrderResponseModel,
  CreateOrderRequestModel,
  ChangeOrderStatusRequestModel,
} from '../models';
import { OrdersApiInterface } from './OrdersApiInterface';

export type OrdersApiConcrete = OrdersApiInterface<
  PagedModel<AdminOrdersOrderResponseModel>,
  PagedModel<CustomerOrdersOrderResponseModel>,
  any,
  ChangeOrderStatusRequestModel,
  CreateOrderRequestModel
>;

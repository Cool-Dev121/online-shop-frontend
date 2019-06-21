import { AdminOrdersOrderResponseModel, PagedModel } from '../models';
import { OrdersApiInterface } from './OrdersApiInterface';

export type OrdersApiConcrete = OrdersApiInterface<
  PagedModel<AdminOrdersOrderResponseModel>,
  any,
  any
>;

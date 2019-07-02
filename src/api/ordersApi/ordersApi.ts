import {
  PagedModel,
  AdminOrdersOrderResponseModel,
  CustomerOrdersOrderResponseModel,
} from '../models';
import { http } from '../../helpers';
import { Url, OrderStatus } from '../../shared';
import { OrdersApiConcrete } from './OrdersApiConcrete';

export const ordersApi: OrdersApiConcrete = {
  getOrders(start: number, count: number): Promise<PagedModel<AdminOrdersOrderResponseModel>> {
    return http.get<PagedModel<AdminOrdersOrderResponseModel>>(Url.getOrders, { start, count });
  },
  getOrdersOfUser(
    start: number,
    count: number,
  ): Promise<PagedModel<CustomerOrdersOrderResponseModel>> {
    return http.get<PagedModel<CustomerOrdersOrderResponseModel>>(Url.getOrdersOfUser, {
      start,
      count,
    });
  },
  changeOrderStatus(orderId: string, status: OrderStatus) {
    return http.post<any, any>(`${Url.changeOrderStatus}/${orderId}`, { status });
  },
};

import {
  PagedModel,
  AdminOrdersOrderResponseModel,
  CustomerOrdersOrderResponseModel,
  ChangeOrderStatusRequestModel,
  OrderResponseModel,
  CreateOrderRequestModel,
} from '../models';
import { http } from '../../helpers';
import { Url } from '../../shared';
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
  changeOrderStatus(orderId: string, changeOrderStatusRequestModel: ChangeOrderStatusRequestModel) {
    return http.post<ChangeOrderStatusRequestModel, null>(
      `${Url.changeOrderStatus}/${orderId}`,
      changeOrderStatusRequestModel,
    );
  },
  getOrder(id: string): Promise<OrderResponseModel> {
    return http.get<OrderResponseModel>(`${Url.getOrder}/${id}`);
  },
  createOrder(order: CreateOrderRequestModel): Promise<null> {
    return http.post<CreateOrderRequestModel, null>(Url.createOrder, order);
  },
};

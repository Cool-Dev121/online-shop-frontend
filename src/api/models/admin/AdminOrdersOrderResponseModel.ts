import { OrderStatus } from '../../../shared';

export interface AdminOrdersOrderItemProductResponseModel {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface AdminOrdersOrderItemResponseModel {
  product: AdminOrdersOrderItemProductResponseModel;
  count: number;
}

export interface AdminOrdersOrderResponseModel {
  id: string;
  userId: string;
  createdAt: string;
  items: AdminOrdersOrderItemResponseModel[];
  status: OrderStatus;
}

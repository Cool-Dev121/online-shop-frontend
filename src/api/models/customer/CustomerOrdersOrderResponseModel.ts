import { OrderStatus } from '../../../shared';

export interface CustomerOrdersOrderItemProductResponseModel {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface CustomerOrdersOrderItemResponseModel {
  product: CustomerOrdersOrderItemProductResponseModel;
  count: number;
}

export interface CustomerOrdersOrderResponseModel {
  id: string;
  createdAt: string;
  items: CustomerOrdersOrderItemResponseModel[];
  status: OrderStatus;
}

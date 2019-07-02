import { OrderStatus } from '../../shared';

export interface OrderItemProductResponseModel {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface OrderItemResponseModel {
  product: OrderItemProductResponseModel;
  count: number;
}

export interface OrderResponseModel {
  id: string;
  items: OrderItemResponseModel[];
  status: OrderStatus;
}

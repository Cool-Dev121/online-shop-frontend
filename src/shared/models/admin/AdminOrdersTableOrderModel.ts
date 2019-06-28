import { OrderStatus } from '../OrderStatus';

export interface AdminOrdersTableOrderItemProductModel {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface AdminOrdersTableOrderItemModel {
  product: AdminOrdersTableOrderItemProductModel;
  count: number;
  orderItemSum: number;
}

export interface AdminOrdersTableOrderModel {
  id: string;
  userId: string;
  createdAt: string;
  items: AdminOrdersTableOrderItemModel[];
  status: OrderStatus;
  orderSum: number;
}

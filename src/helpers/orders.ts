import { AdminOrdersOrderItemResponseModel } from '../api';

export function getOrderSum(orderItems: AdminOrdersOrderItemResponseModel[]) {
  return orderItems.map(i => i.product.price * i.count).reduce((acc, curr) => acc + curr, 0);
}

export function getOrderItemSum(orderItem: AdminOrdersOrderItemResponseModel) {
  return orderItem.count * orderItem.product.price;
}

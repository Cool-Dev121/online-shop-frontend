import { AdminOrdersOrderItemResponseModel } from '../api';
import { OrderStatus } from '../shared';

export function getOrderSum(orderItems: AdminOrdersOrderItemResponseModel[]) {
  return orderItems.map(i => i.product.price * i.count).reduce((acc, curr) => acc + curr, 0);
}

export function getOrderItemSum(orderItem: AdminOrdersOrderItemResponseModel) {
  return orderItem.count * orderItem.product.price;
}

export const mapOrderStatusIdToTitle = (statusId: OrderStatus) => {
  switch (statusId) {
    case OrderStatus.Cancelled:
      return 'Cancelled';
    case OrderStatus.Completed:
      return 'Completed';
    case OrderStatus.Created:
      return 'Created';
    case OrderStatus.Processing:
      return 'Processing';
    default:
      return '';
  }
};

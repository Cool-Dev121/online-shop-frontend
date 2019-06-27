export interface CustomerOrdersTableOrderItemProductModel {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface CustomerOrdersTableOrderItemModel {
  product: CustomerOrdersTableOrderItemProductModel;
  count: number;
  orderItemSum: number;
}

export interface CustomerOrdersTableOrderModel {
  id: string;
  createdAt: string;
  items: CustomerOrdersTableOrderItemModel[];
  status: string;
  orderSum: number;
}

export interface TableOrderProduct {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface TableOrderItemModel {
  product: TableOrderProduct;
  count: number;
}

export interface TableOrderModel {
  id: string;
  userId: string;
  createdAt: string;
  items: TableOrderItemModel[];
  status: string;
}

interface TableOrderItemModel {
  name: string;
  count: number;
}

export interface TableOrderModel {
  id: string;
  userId: string;
  createdAt: string;
  items: TableOrderItemModel[];
  status: string;
}

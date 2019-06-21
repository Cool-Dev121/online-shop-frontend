import { TableOrderItemModel } from '../../../api/models';

export interface TableOrdersStoreModel {
  id: string;
  userId: string;
  createdAt: string;
  items: TableOrderItemModel[];
  status: string;
  sum: number;
}

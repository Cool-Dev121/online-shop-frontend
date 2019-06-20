import { TableOrdersStoreModel } from './TableOrdersStoreModel';

export interface OrdersState {
  items: TableOrdersStoreModel[];
  totalPagesCount: number;
}

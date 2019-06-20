export interface TableOrdersStoreModel {
  id: string;
  userId: string;
  createdAt: string;
  items: {
    name: string;
    count: number;
  }[];
  status: string;
}

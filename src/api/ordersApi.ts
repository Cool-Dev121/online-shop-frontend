import { PagedModel, TableOrderModel } from './models';

export interface OrdersApi<TOrdersPage, TOrder, TOrderStatus> {
  getOrders: (start: number, count: number) => Promise<TOrdersPage>;
  getOrdersOfUser?: (start: number, count: number) => Promise<TOrdersPage>;
  getOrder?: (id: string) => Promise<TOrder>;
  createOrder?: () => Promise<null>;
  changeOrderStatus?: (id: string, status: TOrderStatus) => Promise<null>;
}

const generateOrders = (start: number, count: number): TableOrderModel[] => {
  const generated: TableOrderModel[] = [];
  for (let i = start; i < start + count; i++) {
    generated.push({
      id: i.toString(),
      userId: 'sdfg sdg sdfgsdfgsdfgsdfgs',
      createdAt: '19.06.2019',
      items: [
        { name: 'item 4', count: 2 },
        { name: 'item 5', count: 2 },
        { name: 'item 6', count: 2 },
      ],
      status: 'created',
    });
  }
  return generated;
};

export const ordersApiMock: OrdersApi<PagedModel<TableOrderModel>, any, any> = {
  getOrders: (start: number, count: number): Promise<PagedModel<TableOrderModel>> => new Promise((res) => {
    const totalItems = 100;
    res({ items: generateOrders(start, count), totalItems });
  }),
};

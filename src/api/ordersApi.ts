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
        {
          product: {
            id: '1',
            img: 'path/to/image',
            name: 'Product Name 1',
            price: 1,
          },
          count: 2,
        },
        {
          product: {
            id: '1',
            img: 'path/to/image',
            name: 'Product Name 2',
            price: 2,
          },
          count: 2,
        },
        {
          product: {
            id: '1',
            img: 'path/to/image',
            name: 'Product Name 3',
            price: 3,
          },
          count: 2,
        },
      ],
      status: 'created',
    });
  }
  return generated;
};

export const ordersApiMock: OrdersApi<PagedModel<TableOrderModel>, any, any> = {
  getOrders: (start: number, count: number): Promise<PagedModel<TableOrderModel>> => new Promise((res) => {
    setTimeout(() => {
      const totalItems = 100;
      res({ items: generateOrders(start, count), totalItems });
    }, 300);
  }),
};

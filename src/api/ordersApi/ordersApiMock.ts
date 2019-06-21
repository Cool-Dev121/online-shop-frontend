import { PagedModel, AdminOrdersOrderResponseModel } from '../models';
import { OrdersApiInterface } from './OrdersApiInterface';

const generateOrders = (start: number, count: number): AdminOrdersOrderResponseModel[] => {
  const generated: AdminOrdersOrderResponseModel[] = [];
  for (let i = start; i < start + count; i++) {
    generated.push({
      id: i.toString(),
      userId: 'sdfg sdg sdfgsdfgsdfgsdfgs',
      createdAt: '19.06.2019',
      items: [
        {
          product: {
            id: '1',
            img: 'https://cdn.pixabay.com/photo/2014/10/15/22/06/apples-490474_1280.jpg',
            name: 'Product Name 1',
            price: 1,
          },
          count: 2,
        },
        {
          product: {
            id: '2',
            img: 'https://cdn.pixabay.com/photo/2014/10/15/22/06/apples-490474_1280.jpg',
            name: 'Product Name 2',
            price: 2,
          },
          count: 2,
        },
        {
          product: {
            id: '3',
            img: 'https://cdn.pixabay.com/photo/2014/10/15/22/06/apples-490474_1280.jpg',
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

export const ordersApiMock: OrdersApiInterface<
PagedModel<AdminOrdersOrderResponseModel>,
any,
any
> = {
  getOrders(start: number, count: number): Promise<PagedModel<AdminOrdersOrderResponseModel>> {
    debugger;
    return new Promise((res) => {
      setTimeout(() => {
        const totalItems = 12;
        res({
          items: generateOrders(start, start + count > totalItems ? totalItems - start : count),
          totalItems,
        });
      }, 300);
    });
  },
};

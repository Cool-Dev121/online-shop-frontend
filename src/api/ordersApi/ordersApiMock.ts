import { ChangeOrderStatusRequestModel } from '../models/admin/ChangeOrderStatusRequestModel';
import {
  PagedModel,
  AdminOrdersOrderResponseModel,
  CustomerOrdersOrderResponseModel,
} from '../models';
import { OrdersApiConcrete } from './OrdersApiConcrete';
import { OrderStatus } from '../../shared';

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
      status: OrderStatus.Created,
    });
  }
  return generated;
};

const generateOrdersOfCustomer = (
  start: number,
  count: number,
): CustomerOrdersOrderResponseModel[] => {
  const generated: CustomerOrdersOrderResponseModel[] = [];
  for (let i = start; i < start + count; i++) {
    generated.push({
      id: i.toString(),
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
      status: OrderStatus.Created,
    });
  }
  return generated;
};

export const ordersApiMock: OrdersApiConcrete = {
  getOrders(start: number, count: number): Promise<PagedModel<AdminOrdersOrderResponseModel>> {
    return new Promise((res) => {
      setTimeout(() => {
        const totalItemsCount = 12;
        res({
          items: generateOrders(
            start,
            start + count > totalItemsCount ? totalItemsCount - start : count,
          ),
          totalItemsCount,
        });
      }, 300);
    });
  },
  getOrdersOfUser(
    start: number,
    count: number,
  ): Promise<PagedModel<CustomerOrdersOrderResponseModel>> {
    return new Promise((res) => {
      setTimeout(() => {
        const totalItemsCount = 12;
        res({
          items: generateOrdersOfCustomer(
            start,
            start + count > totalItemsCount ? totalItemsCount - start : count,
          ),
          totalItemsCount,
        });
      }, 300);
    });
  },
  changeOrderStatus(
    id: string,
    changeOrderStatusRequestModel: ChangeOrderStatusRequestModel,
  ): Promise<null> {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 300);
    });
  },
};

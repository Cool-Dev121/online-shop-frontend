import React from 'react';
import { Table, TableColumnsDefinition } from '../../components';

enum OrdersColumnKey {
  Id,
  UserName,
  CreatedAt,
  CartItems,
  Status,
  Sum,
}

interface CustomerOrderItemModel {
  id: string;
  userName: string;
  createdAt: string;
  items: number[];
  status: string;
  sum: number;
}

const ordersColumnsDefenition: TableColumnsDefinition<CustomerOrderItemModel> = {
  [OrdersColumnKey.Id]: {
    width: 1,
    title: 'Id',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.id}</div>,
  },
  [OrdersColumnKey.UserName]: {
    width: 2,
    title: 'User Name',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.userName}</div>,
  },
  [OrdersColumnKey.CreatedAt]: {
    width: 2,
    title: 'Created at',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.createdAt}</div>,
  },
  [OrdersColumnKey.CartItems]: {
    width: 5,
    title: 'Cart Items',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => (
      <div>{item.items.reduce((prev, curr) => `${prev} ${curr}`, '')}</div>
    ),
  },
  [OrdersColumnKey.Status]: {
    width: 2,
    title: 'Status',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.status}</div>,
  },
  [OrdersColumnKey.Sum]: {
    width: 1,
    title: 'Sum',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.sum}</div>,
  },
};

const ordersMock: CustomerOrderItemModel[] = [
  {
    id: '1',
    userName: 'User 1',
    createdAt: '18.06.2019',
    items: [1, 2, 3],
    status: 'created',
    sum: 101,
  },
  {
    id: '2',
    userName: 'User 2',
    createdAt: '19.06.2019',
    items: [4, 5, 6],
    status: 'created',
    sum: 102,
  },
  {
    id: '3',
    userName: 'User 3',
    createdAt: '20.06.2019',
    items: [7, 8, 9],
    status: 'created',
    sum: 103,
  },
];

export const OrdersScreen = (): JSX.Element => (
  <Table tableColumnsDefinition={ordersColumnsDefenition} items={ordersMock} />
);

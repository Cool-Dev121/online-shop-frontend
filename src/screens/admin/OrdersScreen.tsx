import React, { useState } from 'react';
import {
  Table, TableColumnsDefinition, Identifiable, Paginator, styled,
} from '../../components';
import { apiHub } from '../../api';
import { PagedModel, TableOrderModel } from '../../api/models';

enum OrdersColumnKey {
  Id,
  UserName,
  CreatedAt,
  CartItems,
  Status,
  Sum,
}

interface CustomerOrderItemModel extends Identifiable {
  id: string;
  userName: string;
  createdAt: string;
  items: string[];
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

const Space = styled.div`
  height: 50px;
`;

const PAGE_SIZE = 10;

function onPageChange(page: number): Promise<PagedModel<TableOrderModel>> {
  return apiHub.orders.getOrders(PAGE_SIZE * (page - 1), PAGE_SIZE);
}

export const OrdersScreen = (): JSX.Element => {
  const [items, setItems] = useState<CustomerOrderItemModel[]>([]);
  const [pagesCount, setPagesCount] = useState<number>(0);

  return (
    <React.Fragment>
      <Table tableColumnsDefinition={ordersColumnsDefenition} items={items} />
      <Space />
      <Paginator
        visiblePagesCount={8}
        pagesCount={pagesCount}
        onPageChange={(page: number) => {
          onPageChange(page).then((result: PagedModel<TableOrderModel>) => {
            setItems(
              result.items.map(
                (item: TableOrderModel) => ({
                  id: item.id,
                  userName: item.userId,
                  createdAt: item.createdAt,
                  items: item.items.map(i => i.name),
                  status: item.status,
                  sum: 103,
                } as CustomerOrderItemModel),
              ),
            );
            setPagesCount(Math.round(result.totalItems / PAGE_SIZE));
          });
        }}
      />
    </React.Fragment>
  );
};

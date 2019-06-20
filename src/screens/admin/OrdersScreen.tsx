import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  Table, TableColumnsDefinition, Identifiable, Paginator, styled,
} from '../../components';
import { AppState, TableOrdersStoreModel, requestTableOrdersPendingThunk } from '../../store';

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

interface Props {
  orders: TableOrdersStoreModel[];
  totalPagesCount: number;
  onPageChange: (start: number, count: number) => void;
}

const OrdersScreenInner = (props: Props): JSX.Element => {
  const { orders, totalPagesCount, onPageChange } = props;

  return (
    <React.Fragment>
      <Table
        tableColumnsDefinition={ordersColumnsDefenition}
        items={orders.map(o =>
          // TODO: place mapping to dispatching success
          ({
            id: o.id,
            userName: o.userId,
            createdAt: o.createdAt,
            items: o.items.map(i => i.name),
            status: o.status,
            sum: 103,
          }))}
      />
      <Space />
      <Paginator
        visiblePagesCount={8}
        pagesCount={Math.round(totalPagesCount / PAGE_SIZE)}
        onPageChange={(page: number) => {
          onPageChange(PAGE_SIZE * (page - 1), PAGE_SIZE);
        }}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => {
  const { orders } = state;
  return { orders: orders.items, totalPagesCount: orders.totalPagesCount };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPageChange: (page: number, count: number) => {
    requestTableOrdersPendingThunk(dispatch)(page, count);
  },
});

export const OrdersScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersScreenInner);

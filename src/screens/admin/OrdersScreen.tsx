import React from 'react';
import { connect } from 'react-redux';
import {
  Table, TableColumnsDefinition, Identifiable, Paginator, styled,
} from '../../components';
import {
  requestTableOrdersActionCreator,
  AppState,
  OrdersDispatch,
  TableOrdersStoreModel,
} from '../../store';
import { TableOrderItemModel } from '../../api/models';

enum OrdersColumnKey {
  Id,
  UserId,
  CreatedAt,
  CartItems,
  Status,
  Sum,
}

interface CustomerOrderItemModel extends Identifiable {
  id: string;
  userId: string;
  createdAt: string;
  items: TableOrderItemModel[];
  status: string;
  sum: number;
}

const ordersColumnsDefenition: TableColumnsDefinition<CustomerOrderItemModel> = {
  [OrdersColumnKey.Id]: {
    width: 1,
    title: 'Id',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.id}</div>,
  },
  [OrdersColumnKey.UserId]: {
    width: 2,
    title: 'User Id',
    renderCellItem: (item: CustomerOrderItemModel): JSX.Element => <div>{item.userId}</div>,
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
      <div>
        {item.items.reduce(
          (prev, curr: TableOrderItemModel) => `${prev} [${curr.product.name}: ${curr.count}x$${curr.product.price}]`,
          '',
        )}
      </div>
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

interface OwnProps {}

interface StateProps {
  orders: TableOrdersStoreModel[];
  totalPagesCount: number;
}

interface DispatchProps {
  onPageChange: (start: number, count: number) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

const OrdersScreenInner = (props: Props): JSX.Element => {
  const { orders, totalPagesCount, onPageChange } = props;

  return (
    <React.Fragment>
      <Table tableColumnsDefinition={ordersColumnsDefenition} items={orders} />
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

const mapDispatchToProps = (dispatch: OrdersDispatch) => ({
  onPageChange: (start: number, count: number) => {
    dispatch(requestTableOrdersActionCreator(start, count));
  },
});

export const OrdersScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersScreenInner);

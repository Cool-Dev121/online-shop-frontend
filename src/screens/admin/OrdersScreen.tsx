import React from 'react';
import { connect } from 'react-redux';
import {
  Table, TableColumnsDefinition, Paginator, styled,
} from '../../components';
import {
  requestTableOrdersActionCreator,
  AppState,
  OrdersDispatch,
  TableOrdersStoreModel,
} from '../../store';
import {
  AdminOrdersTableOrderModel,
  AdminOrdersTableOrderItemModel,
  OrderItemCard,
} from '../../shared';

enum OrdersColumnKey {
  Id,
  UserId,
  CreatedAt,
  CartItems,
  Status,
  Sum,
}

const CardsCell = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  flex: 1 1 70px;
  padding: ${props => props.theme.padding.md}px;
  min-height: 130px;
`;

const ordersColumnsDefenition: TableColumnsDefinition<AdminOrdersTableOrderModel> = {
  [OrdersColumnKey.Id]: {
    width: 1,
    title: 'Id',
    renderCellItem: (item: AdminOrdersTableOrderModel): JSX.Element => <div>{item.id}</div>,
  },
  [OrdersColumnKey.UserId]: {
    width: 2,
    title: 'User Id',
    renderCellItem: (item: AdminOrdersTableOrderModel): JSX.Element => <div>{item.userId}</div>,
  },
  [OrdersColumnKey.CreatedAt]: {
    width: 2,
    title: 'Created at',
    renderCellItem: (item: AdminOrdersTableOrderModel): JSX.Element => <div>{item.createdAt}</div>,
  },
  [OrdersColumnKey.CartItems]: {
    width: 5,
    title: 'Cart Items',
    renderCellItem: (item: AdminOrdersTableOrderModel): JSX.Element => (
      <CardsCell>
        {item.items.map((orderItem: AdminOrdersTableOrderItemModel) => (
          <CardContainer key={`${item.id}_${orderItem.product.id}`}>
            <OrderItemCard
              productName={orderItem.product.name}
              productExtraData={`$${orderItem.orderItemSum}(${orderItem.count}x$${
                orderItem.product.price
              })`}
              imgPath={orderItem.product.img}
            />
          </CardContainer>
        ))}
      </CardsCell>
    ),
  },
  [OrdersColumnKey.Status]: {
    width: 2,
    title: 'Status',
    renderCellItem: (item: AdminOrdersTableOrderModel): JSX.Element => <div>{item.status}</div>,
  },
  [OrdersColumnKey.Sum]: {
    width: 1,
    title: 'Sum',
    renderCellItem: (item: AdminOrdersTableOrderModel): JSX.Element => <div>{item.orderSum}</div>,
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

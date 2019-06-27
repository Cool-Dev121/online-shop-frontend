import React from 'react';
import { connect } from 'react-redux';
import { OrdersTable } from './OrdersTable';
import { AppState } from '../../../store';
import { NoItemsDetect } from '../../../shared';

interface StateProps {
  isNoItems: boolean;
}
type Props = StateProps;

export const OrdersScreenInner = (props: Props): JSX.Element => {
  const { isNoItems } = props;
  return (
    <NoItemsDetect isNoItems={isNoItems}>
      <OrdersTable />
    </NoItemsDetect>
  );
};

// TODO: add reselect
const mapStateToProps = (state: AppState) => {
  const { items } = state.orders.customer;
  return { isNoItems: items.length < 1 };
};

export const OrdersScreen = connect(mapStateToProps)(OrdersScreenInner);

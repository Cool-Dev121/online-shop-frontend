import React from 'react';
import { connect } from 'react-redux';
import { OrdersTable } from './OrdersTable';
import { AppState, getIsNoCustomerOrderItems } from '../../../store';
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

const mapStateToProps = (state: AppState) => ({ isNoItems: getIsNoCustomerOrderItems(state) });

export const OrdersScreen = connect(mapStateToProps)(OrdersScreenInner);

import React from 'react';
import { connect } from 'react-redux';
import { numericEnumToArray, Selectbox } from '../../../components';
import { OrderStatus } from '../../../shared';
import { OrdersDispatch, requestOrderStatusChangeActionCreator } from '../../../store';

const orderStatuses = numericEnumToArray<string>(OrderStatus).map(os => ({
  id: os.key,
  text: os.value,
}));

interface OwnProps {
  orderId: string;
  value: string;
}
interface DispatchProps {
  onStatusChange: (id: string, status: OrderStatus) => void;
}
type Props = OwnProps & DispatchProps;

const OrderStatusSelectboxInner = (props: Props) => {
  const { orderId, value, onStatusChange } = props;
  return (
    <Selectbox
      value={value}
      collection={orderStatuses}
      onChange={(status) => {
        onStatusChange(orderId, status as OrderStatus);
      }}
    />
  );
};

const mapDispatchToProps = (dispatch: OrdersDispatch) => ({
  onStatusChange: (id: string, status: OrderStatus) => {
    console.log(status);
    dispatch(requestOrderStatusChangeActionCreator(id, status));
  },
});

export const OrderStatusSelectbox = connect(
  null,
  mapDispatchToProps,
)(OrderStatusSelectboxInner);

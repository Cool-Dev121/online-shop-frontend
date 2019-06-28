import React from 'react';
import { connect } from 'react-redux';
import { numericEnumToArray, Selectbox } from '../../../components';
import { OrderStatus } from '../../../shared';
import { OrdersDispatch } from '../../../store';

const orderStatuses = numericEnumToArray<string>(OrderStatus).map(os => ({
  id: os.key,
  text: os.value,
}));

interface OwnProps {
  value: string;
}
interface DispatchProps {
  onStatusChange: (status: OrderStatus) => void;
}
type Props = OwnProps & DispatchProps;

const OrderStatusSelectboxInner = (props: Props) => {
  const { value, onStatusChange } = props;
  return (
    <Selectbox
      value={value}
      collection={orderStatuses}
      onChange={(status) => {
        onStatusChange(status as OrderStatus);
      }}
    />
  );
};

const mapDispatchToProps = (dispatch: OrdersDispatch) => ({
  onStatusChange: (status: OrderStatus) => {
    console.log(status);
  },
});

export const OrderStatusSelectbox = connect(
  null,
  mapDispatchToProps,
)(OrderStatusSelectboxInner);

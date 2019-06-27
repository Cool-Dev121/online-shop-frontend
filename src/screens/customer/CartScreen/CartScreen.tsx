import React from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from './CartItemsList';
import { AppState } from '../../../store';
import { asArray } from '../../../components';
import { NoItemsDetect } from '../../../shared';

interface StateProps {
  isThereItems: boolean;
}
type Props = StateProps;

export const CartScreenInner = (props: Props): JSX.Element => {
  const { isThereItems } = props;
  return (
    <NoItemsDetect isNoItems={!isThereItems}>
      <CartItemsList />
    </NoItemsDetect>
  );
};

// TODO: add reselect
const mapStateToProps = (state: AppState) => {
  const { cart } = state;
  return { isThereItems: asArray(cart.items).length > 0 };
};

export const CartScreen = connect(mapStateToProps)(CartScreenInner);

import React from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from './CartItemsList';
import { AppState, getIsNoCartItems } from '../../../store';
import { NoItemsDetect } from '../../../shared';

interface StateProps {
  isNoItems: boolean;
}
type Props = StateProps;

export const CartScreenInner = (props: Props): JSX.Element => {
  const { isNoItems } = props;
  return (
    <NoItemsDetect isNoItems={isNoItems}>
      <CartItemsList />
    </NoItemsDetect>
  );
};

const mapStateToProps = (state: AppState) => ({ isNoItems: getIsNoCartItems(state) });

export const CartScreen = connect(mapStateToProps)(CartScreenInner);

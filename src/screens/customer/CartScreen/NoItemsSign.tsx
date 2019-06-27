import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { CartItemsList } from './CartItemsList';
import { AppState } from '../../../store';
import { asArray, styled } from '../../../components';

const NoItemsContainer = styled.div``;

interface StateProps {
  isThereItems: boolean;
}
type Props = StateProps;

const NoItemsSignInner = (props: Props): JSX.Element => {
  const { isThereItems } = props;
  return (
    <Fragment>
      {isThereItems && <CartItemsList />}
      {!isThereItems && <NoItemsContainer />}
    </Fragment>
  );
};

const mapStateToProps = (state: AppState) => {
  const { cart } = state;
  return { isThereItems: asArray(cart.items).length > 0 };
};

export const NoItemsSign = connect(mapStateToProps)(NoItemsSignInner);

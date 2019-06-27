import React from 'react';
import { connect } from 'react-redux';
import { ProductsTable } from './ProductsTable';
import { NoItemsDetect } from '../../../shared';
import { AppState } from '../../../store';

interface StateProps {
  isThereItems: boolean;
}
type Props = StateProps;

export const ProductsScreenInner = (props: Props): JSX.Element => {
  const { isThereItems } = props;
  return (
    <NoItemsDetect isNoItems={!isThereItems}>
      <ProductsTable />
    </NoItemsDetect>
  );
};

// TODO: add reselect
const mapStateToProps = (state: AppState) => {
  const { products } = state;
  return { isThereItems: products.items.length > 0 };
};

export const ProductsScreen = connect(mapStateToProps)(ProductsScreenInner);

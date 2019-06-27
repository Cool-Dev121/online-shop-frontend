import React from 'react';
import { connect } from 'react-redux';
import { ProductsTable } from './ProductsTable';
import { NoItemsDetect } from '../../../shared';
import { AppState, getIsNoProductItems } from '../../../store';

interface StateProps {
  isNoItems: boolean;
}
type Props = StateProps;

export const ProductsScreenInner = (props: Props): JSX.Element => {
  const { isNoItems } = props;
  return (
    <NoItemsDetect isNoItems={isNoItems}>
      <ProductsTable />
    </NoItemsDetect>
  );
};

const mapStateToProps = (state: AppState) => ({ isNoItems: getIsNoProductItems(state) });

export const ProductsScreen = connect(mapStateToProps)(ProductsScreenInner);

import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components';
import { CartDispatch, addItemToCartActionCreator } from '../../../store';
import { ProductsTableProductModel } from '../../../shared';

interface OwnProps {
  product: ProductsTableProductModel;
}
interface DispatchProps {
  onAddToCart: (product: ProductsTableProductModel) => void;
}
type Props = OwnProps & DispatchProps;

export const AddToCartButtonInner = (props: Props) => {
  const { product, onAddToCart } = props;
  return <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>;
};

const mapDispatchToProps = (dispatch: CartDispatch) => ({
  onAddToCart: (product: ProductsTableProductModel) => {
    dispatch(addItemToCartActionCreator(product));
  },
});

export const AddToCartButton = connect(
  null,
  mapDispatchToProps,
)(AddToCartButtonInner);

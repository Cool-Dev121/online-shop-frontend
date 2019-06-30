import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProductForm } from '../ProductForm';
import {
  AppState,
  ProductsDispatch,
  requestProductByIdActionCreator,
  requestUpdateProductActionCreator,
} from '../../../../store';
import { ProductFormModel } from '../../../../shared';

interface OwnProps {
  id: string;
}
interface StateProps {
  selectedProduct?: ProductFormModel;
}
interface DispatchProps {
  loadProduct: (id: string) => void;
  updateProduct: (form: ProductFormModel) => void;
}
type Props = OwnProps & StateProps & DispatchProps;

export const ProductEditFormInner = (props: Props): JSX.Element => {
  const {
    id, loadProduct, selectedProduct, updateProduct,
  } = props;

  useEffect(() => {
    loadProduct(id);
  }, []);

  return (
    <ProductForm
      onSubmit={updateProduct}
      initValue={selectedProduct}
      title={`Edit product (id: ${id})`}
    />
  );
};

const mapStateToProps = (state: AppState) => {
  const { products } = state;
  return { selectedProduct: products.selectedProduct };
};

const mapDispatchToProps = (dispatch: ProductsDispatch) => ({
  loadProduct: (id: string) => {
    dispatch(requestProductByIdActionCreator(id));
  },
  updateProduct: (form: ProductFormModel) => {
    dispatch(requestUpdateProductActionCreator(form));
  },
});

export const ProductEditForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductEditFormInner);

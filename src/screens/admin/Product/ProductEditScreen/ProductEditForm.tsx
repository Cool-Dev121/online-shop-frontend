import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProductForm } from '../ProductForm';
import { AppState, ProductsDispatch, requestProductByIdActionCreator } from '../../../../store';
import { ProductFormModel } from '../../../../shared';

const handleSubmit = (productForm: ProductFormModel) => {
  console.log('PROD FORM', productForm);
};

interface OwnProps {
  id: string;
}
interface StateProps {
  selectedProduct?: ProductFormModel;
}
interface DispatchProps {
  loadProduct: (id: string) => void;
}
type Props = OwnProps & StateProps & DispatchProps;

export const ProductEditFormInner = (props: Props): JSX.Element => {
  const { id, loadProduct, selectedProduct } = props;

  useEffect(() => {
    loadProduct(id);
  }, []);

  return (
    <ProductForm
      onSubmit={handleSubmit}
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
});

export const ProductEditForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductEditFormInner);

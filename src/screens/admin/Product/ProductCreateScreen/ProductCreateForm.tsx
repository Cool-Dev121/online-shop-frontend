import React from 'react';
import { connect } from 'react-redux';
import { ProductForm } from '../ProductForm';
import { ProductsDispatch } from '../../../../store';
import { ProductFormModel } from '../../../../shared';
import { requestCreateProductActionCreator } from '../../../../store/products';

interface DispatchProps {
  submitProduct: (form: ProductFormModel) => void;
}
type Props = DispatchProps;

export const ProductCreateFormInner = (props: Props): JSX.Element => {
  const { submitProduct } = props;
  return <ProductForm onSubmit={submitProduct} title="Create product" />;
};

const mapDispatchToProps = (dispatch: ProductsDispatch) => ({
  submitProduct: (form: ProductFormModel) => {
    dispatch(requestCreateProductActionCreator(form));
  },
});

export const ProductCreateForm = connect(
  null,
  mapDispatchToProps,
)(ProductCreateFormInner);

import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProductForm } from './ProductForm';
import { AppState, ProductsDispatch, requestProductByIdActionCreator } from '../../../store';
import { ProductFormModel } from '../../../shared';

interface Params {
  id: string;
}

const handleSubmit = (productForm: ProductFormModel) => {
  console.log('PROD FORM', productForm);
};

interface OwnProps extends RouteComponentProps<Params> {}
interface StateProps {
  selectedProduct?: ProductFormModel;
}
interface DispatchProps {
  loadProduct: (id: string) => void;
}
type Props = OwnProps & StateProps & DispatchProps;

export const ProductEditScreenInner = (props: Props): JSX.Element => {
  const { match, loadProduct, selectedProduct } = props;
  const { id } = match.params;

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

export const ProductEditScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductEditScreenInner);

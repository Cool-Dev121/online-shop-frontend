import * as React from 'react';
import { ProductForm } from './ProductForm';
import { ProductFormModel } from './models';

const handleSubmit = (productForm: ProductFormModel) => {
  console.log('PROD FORM', productForm);
};

const formInit: ProductFormModel = {
  productName: '',
  price: 0,
};

export const ProductCreateScreen = (): JSX.Element => (
  <div>
    <ProductForm onSubmit={handleSubmit} formInit={formInit} />
  </div>
);

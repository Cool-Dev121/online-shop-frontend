import * as React from 'react';
import { ProductForm } from './ProductForm';
import { ProductFormModel } from '../../../shared';

const handleSubmit = (productForm: ProductFormModel) => {
  console.log('PROD FORM', productForm);
};

export const ProductCreateScreen = (): JSX.Element => (
  <div>
    <ProductForm onSubmit={handleSubmit} title="Create product" />
  </div>
);

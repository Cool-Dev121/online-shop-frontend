import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ProductEditForm } from './ProductEditForm';

type Props = RouteComponentProps<{ id: string }>;

export const ProductEditScreen = (props: Props): JSX.Element => {
  const { match } = props;
  const { params } = match;
  return <ProductEditForm id={params.id} />;
};

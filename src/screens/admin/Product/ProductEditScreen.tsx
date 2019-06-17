import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Params {
  id: string;
}

const ProductEditScreen = (props: RouteComponentProps<Params>): JSX.Element => {
  const { match } = props;
  const { id } = match.params;
  return <div>{`ProductEditScreen: ${id}`}</div>;
};

export { ProductEditScreen };

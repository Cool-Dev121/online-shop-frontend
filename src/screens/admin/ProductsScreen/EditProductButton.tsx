import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AdminRoutes } from '../../../routing';
import { Button } from '../../../components';

interface Props {
  id: string;
}

const EditProductButtonInner = (props: Props & RouteComponentProps) => {
  const { id, history } = props;
  return <Button onClick={() => history.push(`${AdminRoutes.Product}/${id}`)}>Edit</Button>;
};

export const EditProductButton = withRouter(EditProductButtonInner);

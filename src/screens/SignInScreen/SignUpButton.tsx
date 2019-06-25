import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from '../../components';
import { CommonRoutes } from '../../routing/Common';

const SignUpButtonInner = (props: RouteComponentProps) => {
  const { history } = props;
  return <Button onClick={() => history.push(CommonRoutes.SignUp)}>Sign Up</Button>;
};

export const SignUpButton = withRouter(SignUpButtonInner);

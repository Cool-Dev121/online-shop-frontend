import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from '../../components';
import { CommonRoutes } from '../../routing/Common';

const SignInButtonInner = (props: RouteComponentProps) => {
  const { history } = props;
  return (
    <Button onClick={() => history.push(CommonRoutes.SignIn)}>Already have an account?</Button>
  );
};

export const SignInButton = withRouter(SignInButtonInner);

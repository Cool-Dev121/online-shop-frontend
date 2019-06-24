import React, { ComponentType } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ConnectedComponentClass } from 'react-redux';

interface Props {
  layout: ComponentType<any>;
  component: ComponentType<any> | ConnectedComponentClass<any, any>;
  exact?: boolean;
  path: string;
}

export const RouteWithLayout = (props: Props) => {
  const {
    component: Component, exact, path, layout: Layout,
  } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(d: RouteComponentProps) => <Layout component={() => <Component {...d} />} />}
    />
  );
};

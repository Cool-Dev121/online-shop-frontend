import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { BaseProps } from './models';

type Props<TMatchType> = BaseProps<TMatchType>;

export function RouteWithLayout<TMatchType>(props: Props<TMatchType>) {
  const {
    content: ContentComponent, exact, path, layout: Layout,
  } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeComponentProps: RouteComponentProps<TMatchType>) => (
        <Layout component={() => <ContentComponent {...routeComponentProps} />} />
      )}
    />
  );
}

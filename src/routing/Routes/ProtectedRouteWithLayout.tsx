import React from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import { BaseProps } from './models';

interface Props<TMatchType> extends BaseProps<TMatchType> {
  pathIfNotAllowed: string;
  checkIsAllowed: () => boolean;
}

export function ProtectedRouteWithLayout<TMatchType>(props: Props<TMatchType>) {
  const {
    content: ContentComponent,
    exact,
    path,
    layout: Layout,
    checkIsAllowed,
    pathIfNotAllowed,
  } = props;
  const isAllowed = checkIsAllowed();
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeComponentProps: RouteComponentProps<TMatchType>) => (isAllowed ? (
        <Layout component={() => <ContentComponent {...routeComponentProps} />} />
      ) : (
        <Redirect
          to={{
            pathname: pathIfNotAllowed,
            state: { from: routeComponentProps.location },
          }}
        />
      ))
      }
    />
  );
}

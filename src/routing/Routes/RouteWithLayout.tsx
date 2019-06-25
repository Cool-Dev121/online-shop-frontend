import React, { ComponentType } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

type ComponentProps<TMatchType> = RouteComponentProps<TMatchType>;
type ContentComponentType<TMatchType> = ComponentType<ComponentProps<TMatchType>>;
export type LayoutProps = { component: () => JSX.Element };
type LayoutComponentType = ComponentType<LayoutProps>;

interface Props<TMatchType> {
  layout: LayoutComponentType;
  content: ContentComponentType<TMatchType>;
  exact?: boolean;
  path: string;
}

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

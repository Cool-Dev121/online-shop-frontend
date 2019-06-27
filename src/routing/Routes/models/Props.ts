import { RouteComponentProps } from 'react-router-dom';
import { ComponentType } from 'react';

type ComponentProps<TProps, TMatchType> = TProps & RouteComponentProps<TMatchType>;
type ContentComponentType<TProps, TMatchType> = ComponentType<ComponentProps<TProps, TMatchType>>;
export type LayoutProps = { component: () => JSX.Element };
type LayoutComponentType = ComponentType<LayoutProps>;

export interface BaseProps<TMatchType, TProps = any | void> {
  layout: LayoutComponentType;
  content: ContentComponentType<TProps, TMatchType>;
  exact?: boolean;
  path: string;
}

import { RouteComponentProps } from 'react-router-dom';
import { ComponentType } from 'react';

type ComponentProps<TMatchType> = RouteComponentProps<TMatchType>;
type ContentComponentType<TMatchType> = ComponentType<ComponentProps<TMatchType>>;
export type LayoutProps = { component: () => JSX.Element };
type LayoutComponentType = ComponentType<LayoutProps>;

export interface BaseProps<TMatchType> {
  layout: LayoutComponentType;
  content: ContentComponentType<TMatchType>;
  exact?: boolean;
  path: string;
}

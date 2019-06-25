import React from 'react';
import { FullscreenLayout } from '../../components';
import { LayoutProps } from '../Routes';

export const FullscreenLayoutWrapper = (props: LayoutProps) => {
  const { component: Component } = props;
  return <FullscreenLayout renderContent={() => <Component />} />;
};

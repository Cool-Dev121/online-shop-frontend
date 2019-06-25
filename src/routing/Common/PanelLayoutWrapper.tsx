import React from 'react';
import { PanelLayout } from '../../components';
import { LayoutProps } from '../Routes';

export const PanelLayoutWrapper = (props: LayoutProps) => {
  const { component: Component } = props;
  return <PanelLayout renderContent={() => <Component />} />;
};

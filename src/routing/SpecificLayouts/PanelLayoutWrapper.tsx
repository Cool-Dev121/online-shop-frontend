import React from 'react';
import { Props } from './Props';
import { PanelLayout } from '../../components';

export const PanelLayoutWrapper = (props: Props) => {
  const { component: Component } = props;
  return <PanelLayout renderContent={() => <Component />} />;
};

import React from 'react';
import { Props } from './Props';
import { FullscreenLayout } from '../../components';

export const FullscreenLayoutWrapper = (props: Props) => {
  const { component: Component } = props;
  return <FullscreenLayout renderContent={() => <Component />} />;
};

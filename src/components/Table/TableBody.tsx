import React from 'react';
import { ChildrenAcceptable } from '../shared';

export const TableBody = (props: ChildrenAcceptable): JSX.Element => {
  const { children } = props;
  return <div>{children}</div>;
};

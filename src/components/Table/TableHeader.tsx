import React from 'react';
import { ChildrenAcceptable } from '../shared';
import { styled } from '../themes';

// const MainContainer = styled.div``;

export const TableHeader = (props: ChildrenAcceptable): JSX.Element => {
  const { children } = props;
  return <React.Fragment>{children}</React.Fragment>;
};

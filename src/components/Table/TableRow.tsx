import React from 'react';
import { ChildrenAcceptable } from '../shared';
import { styled } from '../themes';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableRow = (props: ChildrenAcceptable): JSX.Element => {
  const { children } = props;
  return <MainContainer>{children}</MainContainer>;
};

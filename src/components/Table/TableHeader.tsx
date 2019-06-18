import React from 'react';
import { ChildrenAcceptable } from '../shared';
import { styled } from '../themes';

const MainContainer = styled.div`
  background-color: ${props => props.theme.table.headerBgColor};
`;

export const TableHeader = (props: ChildrenAcceptable): JSX.Element => {
  const { children } = props;
  return <MainContainer>{children}</MainContainer>;
};

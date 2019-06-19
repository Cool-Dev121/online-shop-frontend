import React from 'react';
import { ChildrenAcceptable } from '../shared';
import { styled } from '../themes';

interface MainContainerProps {
  width: number;
}

const MainContainer = styled.div<MainContainerProps>`
  flex: ${props => props.width};
  word-break: break-all;
  padding: 5px;
`;

interface Props extends ChildrenAcceptable {
  width: number;
}

export const TableCell = (props: Props): JSX.Element => {
  const { children, width } = props;
  return <MainContainer width={width}>{children}</MainContainer>;
};
